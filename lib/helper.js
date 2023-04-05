/* const BASE_URL = "http://localhost:3000" */

//Devuelve todos los usuarios de la Api
export const getUsuarios = async ()=>{
    const response = await fetch('http://localhost:3000/api/usuarios')
    const json = await response.json()

    return json;
}

//Devuelve un usuario de la Api
export const getUsuario = async(userId)=>{
    const response = await fetch('http://localhost:3000/api/usuarios/${userId}');
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

        const response = await fetch('http://localhost:3000/api/usuarios', Options)
        const json = await response.json()

        return json
    } catch (error) {
        return error;
    }
}

//Actualizar un nuevo usuario
export async function actializarUsuario(userId,formData){
    const Options = {
        method:'PUT',
        headers:{'Content-Type':"application/json"},
        body:JSON.stringify(formData)
    }
    const response = await fetch('http://localhost:3000/api/usuarios/${userId}', Options)
    const json = await response.json()

    return json

}

//Eliminar un usuario
export async function eliminarUsuario(userId){
    const Options = {
        method:'DELETE',
        headers:{'Content-Type':"application/json"},
    }

    const response = await fetch('http://localhost:3000/api/usuarios/${userId}', Options)
    const json = await response.json()

    return json
}