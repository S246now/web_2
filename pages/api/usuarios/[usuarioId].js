import connectMongo from "../../../database/conn"
import { getUsuario, putUsuario, deleteUsuario } from "../../../database/controller";

export default async function handler(req, res) {
    connectMongo().catch(()=>res.status(405).json({error:"Error en la Conexión"}))

    /* tipo de pedido */
    const{method}=req

    switch (method) {
        case 'GET':
            getUsuario(req,res);
            break;
        case 'PUT':
            putUsuario(req,res)
            break;
        case 'DELETE':
            deleteUsuario(req,res)
            break;
        default:
            res.setHeader('Allow',['GET','POST','PUT','DELETE']);
            res.status(405).end('Método ${method} NO Permitido');
            break;
    }
}