import {Schema, models, model} from 'mongoose'

const usuarioSchema = new Schema({
    nombre:String,
    apellido:String,
    correo:String,
    fechaNacimiento:Date,
    estado:String
});

    /* verifica y pasa si existe, caso contrario, crea la tabla */
const Usuarios = models.usuario || model('usuario',usuarioSchema)
export default Usuarios;