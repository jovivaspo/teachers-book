import { dbConnection } from "utils/mongoose"

dbConnection()
import User from "models/user"

export default async function handler(req, res) {
    const { query, url, method, body } = req
    const id = query.id

    switch (method) {
        case "GET": { //Find one user
            try {
                const user = await User.findById(id)
                if (!user) {
                    return res.status(404).json({ error: "User doesnt exist" })
                } else {
                    return res.status(200).json(user)
                }

            } catch (err) {
                return res.status(500).json({ error: err.message })
            }
        }
        case "DELETE": {//Register one user
            try {
                const user = await User.findByIdAndDelete(id)
                return res.status(202).json({
                    msg: "User deleted",
                    user
                })

            } catch (err) {
                return res.status(500).json({ error: err.message })
            }
        } case "PUT": {//Register one user
            try {
                const userUpdated = await User.findByIdAndUpdate(id,body)
                return res.status(202).json({
                    msg: "User updated",
                })

            } catch (err) {
                return res.status(500).json({ error: err.message })
            }
        }

        default: {
            res.status(400).json({ msg: "Method not supported" })
        }
    }
}