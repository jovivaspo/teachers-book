import Note from "models/note";
import User from "models/user"
import { dbConnection } from "utils/mongoose";

dbConnection()


export default async function handler(req, res) {
    const { query, url, method, body } = req

    //Body contiene el contenido de la nota y el id del usuario

    switch (method) {
        case "GET": {
            try {

                const notes = await Note.find()
                return res.status(200).json(notes)


            } catch (err) {
                return res.status(500).json({ error: err.message })
            }
        }
        case "DELETE": {
            try {

                await Note.deleteMany({})
                return res.status(200).json({message: "All notes were deleted"})


            } catch (err) {
                return res.status(500).json({ error: err.message })
            }
        }
        default: {
            res.status(400).json({ msg: "Method not supported" })
        }
    }

}