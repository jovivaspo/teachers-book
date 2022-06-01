import Note from "models/note";
import User from "models/user"
import { dbConnection } from "utils/mongoose";

dbConnection()


export default async function handler(req, res) {
    const { query, url, method, body } = req
    const {id_user, id_note} = req.query
   
    switch (method) {
        case "GET": { //Get one note of the user
            try {
                
                const note = await Note.findById(id_note)
                return res.status(200).json(note)


            } catch (err) {
                return res.status(500).json({ error: err.message })
            }
        }
        case "PUT":{ //Update one note of the user
            try{

                const noteUpdated = await Note.findByIdAndUpdate(id_note,body)
                return res.status(202).json({
                    message: "Nota actualizada"
                })

            }catch(err){
                return res.status(500).json({ error: err.message })
            }
        }
        case "DELETE": { //Delete one note of the user
            try {

              
                await Note.findByIdAndDelete(id_note)
                
                const user = await User.findById(id_user)
               

                const newNotes = user.notes.filter(note => note.toString() !== id_note)
                

                user.notes = newNotes

                await user.save()

                return res.status(200).json({message: "Nota eliminada"})

            } catch (err) {
                return res.status(500).json({ error: err.message })
            }
        }
        default: {
            res.status(400).json({ msg: "Method not supported" })
        }
    }

}