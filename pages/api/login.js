
import { requestToBodyStream } from "next/dist/server/body-streams"
import connect from "../../database/conn"
import Usuario from "../../model/usuario"

connect()

export default async function handler(req,res){

        const {correo,contraseña} = req.body 
        const user = await Usuario.findOne({correo,contraseña})

        if (!user) {
            return res.json({status: 'Usuario NO Encontrado'})
        } else {
            res.redirect('/')
        }
}
