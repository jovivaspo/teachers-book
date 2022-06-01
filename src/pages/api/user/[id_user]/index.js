import { dbConnection } from "utils/mongoose"

dbConnection()
import User from "models/user"

export default async function handler(req, res) {
    const { query, url, method, body } = req
    console.log(query)
    const id = query.id_user

    switch (method) {
        case "GET": { //Find one user
            try {
                const user = await User.findById(id)
                if (!user) {
                    return res.status(404).json({ error: "Este usuario no existe" })
                } else {
                    return res.status(200).json(user)
                }

            } catch (err) {
                return res.status(500).json({ error: err.message })
            }
        }
        case "DELETE": {//Delete one user
            try {
                const user = await User.findByIdAndDelete(id)
                return res.status(202).json({
                    message: "Usuario eliminado",
                    user
                })

            } catch (err) {
                return res.status(500).json({ error: err.message })
            }
        } case "PUT": {//Update one user
            try {
                const userUpdated = await User.findByIdAndUpdate(id,body)
                return res.status(202).json({
                    message: "Usuario actualizado",
                })

            } catch (err) {
                return res.status(500).json({ error: err.message })
            }
        }

        default: {
            res.status(400).json({ message: "Método no soportado" })
        }
    }
}