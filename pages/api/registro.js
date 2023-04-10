import connect from "../../database/conn"
import Usuario from "../../model/usuario"

connect()

export default async function handler(req,res){

        try {
            const usuario = await Usuario.create(req.body);
            res.redirect('/auth')
            if(!usuario){
                return res.json({code:'Usuario no creado'})
            }
        } catch (error) {
            res.status(400).json({status:'ERROR: NO se pudo crear el usuario'})
        }
}
