import connect from "../../database/conn"
import Usuario from "../../model/usuario"


connect()

export default async function handler(req,res){

        const {correo,contraseña} = req.body 
        const user = await Usuario.findOne({correo,contraseña})

        if (!user) {
            return res.json({status: 'Usuario NO Encontrado'})
        } else {
            /* cookie que indica que el usuario ha iniciado sesión
            redirección a /auth en caso de que el usuario no haya iniciado sesión */
            res.setHeader('Set-Cookie', 'isLoggedIn=true');
            res.redirect('/')
        }

}