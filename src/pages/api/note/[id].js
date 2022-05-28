import Note from "models/note";
import User from "models/user"
import { dbConnection } from "utils/mongoose";

dbConnection()


export default async function handler(req, res) {
    const { query, url, method, body } = req
    const {id} = req.query
    //Body contiene el contenido de la nota y el id del usuario

    switch (method) {
        case "GET": {
            try {
                
                const note = await Note.findById(id)
                return res.status(200).json(note)


            } catch (err) {
                return res.status(500).json({ error: err.message })
            }
        }
        case "PUT":{
            try{

                const noteUpdated = await Note.findByIdAndUpdate(id,body)
                return res.status(202).json({
                    message: "Note updated"
                })

            }catch(err){
                return res.status(500).json({ error: err.message })
            }
        }
        case "DELETE": {
            try {

                const note = await Note.findById(id)
               
                await Note.findByIdAndDelete(id)

                const id_user = note.user
                
                const user = await User.findById(id_user)
               

                const newNotes = user.notes.filter(note => note.toString() !== id)
                

                user.notes = newNotes

                await user.save()

                return res.status(200).json({message: "Note was deleted"})

            } catch (err) {
                return res.status(500).json({ error: err.message })
            }
        }
        default: {
            res.status(400).json({ msg: "Method not supported" })
        }
    }

}