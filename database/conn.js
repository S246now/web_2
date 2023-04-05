
import mongoose from 'mongoose';

const connectMongo=async()=>{
    try{
        /* conexión de nextjs con el paquete de mongoose */
        const {connection} = await mongoose.connect(process.env.MONGO_URI)

        if(connection.readyState == 1){
            console.log("Conexión Establecida")
        }
    }catch(errors){
        return Promise.reject(errors)
    }
}

export default connectMongo;