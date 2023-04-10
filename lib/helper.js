
const BASE_URL = "http://localhost:3000"

//Devuelve todos los usuarios de la Api
export const getUsuarios = async ()=>{
    const response = await fetch(`${BASE_URL}/api/usuarios`)
    const json = await response.json()

    return json;
}

//Devuelve un usuario de la Api
export const getUsuario = async(usuarioId)=>{

    const response = await fetch(`/api/usuarios/${usuarioId}`);
    
    /* if(usuarioId=== "64331cb6b14d09404eb7d559") {
        console.log("El _id devuelto es el mismo que el que se esperaba");
        const response = await fetch(`${BASE_URL}/api/usuarios/${usuarioId}`); 
        
      } else {
        console.log("El _id devuelto no es el mismo que el que se esperaba");
      } */
    const json = await response.json()


    if(json) return json;
    return{}
}

//Posting un nuevo usuario en la Api
export async function añadirUsuario(formData){
    try {
        const Options = {
            method:'POST',
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify(formData)
        }

        const response = await fetch(`${BASE_URL}/api/usuarios`, Options)
        const json = await response.json()

        return json
    } catch (error) {
        return error;
    }
}

//Actualizar un nuevo usuario
export async function actializarUsuario(usuarioId,formData){
    const Options = {
        method:'PUT',
        headers:{'Content-Type':"application/json"},
        body:JSON.stringify(formData) /* data to post */
    }
    
    const response = await fetch(`${BASE_URL}/api/usuarios/${usuarioId}`, Options)
    const json = await response.json()

    return json

}

//Eliminar un usuario
export async function eliminarUsuario(usuarioId){
    const Options = {
        method:'DELETE',
        headers:{'Content-Type':"application/json"},
    }

    const response = await fetch(`${BASE_URL}/api/usuarios/${usuarioId}`, Options)
    const json = await response.json()

    return json
}