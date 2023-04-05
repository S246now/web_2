import connectMongo from "../../../database/conn"
import { getUsuarios, postUsuario, putUsuario, deleteUsuario } from "../../../database/controller";

export default async function handler(req, res) {
  connectMongo().catch(()=>res.status(405).json({error:"Error en la Conexión"}))

  /* tipo de pedido */
  const{method}=req

  switch(method){
    case 'GET':
        getUsuarios(req,res)
        break;
    case 'POST':
        postUsuario(req,res)
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
  /* res.status(200).json({ name: 'John Doe' }) */
}