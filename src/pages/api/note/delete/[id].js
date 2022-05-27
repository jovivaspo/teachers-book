import Note from "models/note";
import User from "models/user"
import { dbConnection } from "utils/mongoose";

dbConnection()


export default async function handler(req, res) {
    const { query, url, method, body } = req

    switch (method) {
        case "DELETE": {
            try {
                const note = await Note.findById(query.id)

                console.log(note)
                return res.status(200).json({message: "Note deleted"})


            } catch (err) {
                return res.status(500).json({ error: err.message })
            }
        }
        default: {
            res.status(400).json({ msg: "Method not supported" })
        }
    }

}