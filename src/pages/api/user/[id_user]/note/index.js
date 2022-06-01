import Note from "models/note";
import User from "models/user"
import { dbConnection } from "utils/mongoose";

dbConnection()


export default async function handler(req, res) {
    const { query, url, method, body } = req

    const { id_user } = req.query

    switch (method) {

        case "GET": { //Get all notes of the user
            try {

                const notes = await Note.find({ "_id_user": id_user })

                return res.status(200).json({ notes })


            } catch (err) {
                return res.status(404).json({ error: "Error al recuperar notas" })
            }

        }

        case "POST": { //Create a new note for the user
            try {
                const { type, date, description } = body

                const user = await User.findById(id_user)

                const newNote = new Note({
                    user: user._id,
                    type,
                    date,
                    description,
                })
                const noteSaved = await newNote.save()
                user.notes = user.notes.concat(newNote._id)
                await user.save()

                return res.status(201).json({
                    message: "Nueva nota creada con éxito",
                    note: noteSaved
                })

            } catch (err) {
                return res.status(500).json({ error: err.message })
            }


        }

        case "DELETE": {//Delete all notes for the user
            try {
                const user = await User.findById(id_user)
                user.notes = []
                await user.save()
                await Note.deleteMany( {"_id_user": id_user })
                
                return res.status(202).json({
                    message: "Todas las notas fueron borradas"})

            } catch (err) {
                return res.status(500).json({ error: err.message })
            }
        }
        default: {
            res.status(400).json({ message: "Método no soportado" })
        }
    }

}