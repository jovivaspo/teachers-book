import Note from "models/note";
import User from "models/user"
import { dbConnection } from "utils/mongoose";

dbConnection()


export default async function handler (req,res){
    const {query,url,method,body} = req

    //Body contiene el contenido de la nota y el id del usuario

    switch(method){
        case "POST":{
            try{
                const {type,date,description,id_user} = body
                console.log(id_user)
                const user = await User.findById(id_user)
               console.log(user)
               
                const newNote = new Note({
                    user:user._id,
                    type,
                    date,
                    description,
                })
                const noteSaved = await newNote.save()
                user.notes = user.notes.concat(newNote._id)
                await user.save()
             
                return res.status(201).json({
                    message:"Note created successfully",
                    note:noteSaved
                })

            }catch(err){
                return res.status(500).json({error:err.message})
            }
        }
        default: {
            res.status(400).json({ msg: "Method not supported" })
        }
    }

}