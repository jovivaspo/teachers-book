import { dbConnection } from "utils/mongoose"

dbConnection()
import User from "models/user"

export default async function handler(req, res) {
    const { query, url, method, body } = req

    switch (method) {
        case "GET": { //Find all users
            try {
                const users = await User.find()
                return res.status(200).json(users)
            } catch (err) {
                return res.status(500).json({ error: err.message })
            }
        }
        case "POST": {//Register one user
            try {
                const userToCreated = await User.find({"email":body.email})

                if(userToCreated.length > 0){
                    return res.status(400).json({error: "Correo en uso"})
                }
                const user = new User(body)
                const newPassword = await user.encryptPassword(body.password)
                user.password = newPassword
                const userSaved = await user.save()
                return res.status(201).json({
                    message: "Usuario creado con éxito",
                    user: userSaved
                })

            } catch (err) {
                return res.status(500).json({ error: err.message })
            }
        }
        case "DELETE":{
            try{
                 await User.deleteMany({})
                 return res.status(202).json({ message: "Todos los usuarios fueron eliminados" })

            }catch(err){
                return res.status(500).json({ error: err.message })
            }
        }

        default: {
            res.status(400).json({ message: "Método no soportado" })
        }
    }
}