/* CONTROLADOR para la tabla de Ususarios */
import Usuarios from "../model/usuario"

/* getUsusuarios nos permitirá obtener los datos de la base d edatos de MongoDB */
/* get: http://localhost:3000/api/usuarios */
export async function getUsuarios(req,res){
    try{
        const usuarios = await Usuarios.find({})

        if(!usuarios)return res.status(404).json({error:"Datos NO Encontrados"})
        res.status(200).json(usuarios)
    }catch(error){
        res.status(404).json({error:"Error al obtener los datos"})
    }
}
/* get: http://localhost:3000/api/usuarios/1 */
export async function getUsuario(req,res){
    try {
        const {userId}=req.query;

        if(userId){
            const user = await Usuarios.findById(userId)
            res.status(200).json(user)
        }
        res.status(404).json({error:"Usuarios no seleccionado"});
    } catch (error) {
        res.status(404).json({error:"No se pudo obtener el usuario"})
    }
}

/* post: http://localhost:3000/api/usuarios */
export async function postUsuario(req,res){
    try{
        const formData = req.body;
        if(!formData) return res.status(404).json({error:"Formulario de datos no proporcionado"});
        const data = await Usuarios.create(formData);
        return res.status(200).json(data);
    }catch(error){
        return res.status(404).json({error})
    }
}

/* put: http://localhost:3000/api/usuarios/1 */
export async function putUsuario(req,res){
    try {
        const{userId} = req.query;
        const formData =  req.body;

        if(userId&&formData){
            await Usuarios.findByIdAndUpdate(userId, formData);
            res.status(200).json(formData)
        }
        res.status(404).json({error:"Usuario no seleccionado"})
    } catch (error) {
        res.status(404).json({error:"Error al Actualizar los datos"})
    }
}

/* delete: http://localhost:3000/api/usuarios/1 */
export async function deleteUsuario(req,res){
    try {
        const{userId} = req.query;

        if(userId){
            const user = await Usuarios.findOneAndDelete(userId)
            return res.status(200).json(user)
        }

        res.status(404).json({error:"Usuario no seleccionado"})
    } catch (error) {
        res.status(404).json({error:"Error al Eliminar el usuario"})
    }
}