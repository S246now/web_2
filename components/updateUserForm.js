
import { useReducer } from "react"
import Success from "./success";
import Bug from "./bug";
import {isError, useQuery} from 'react-query'
import { getUsuario } from "../lib/helper";

export default function UpdateUserForm({formId,formData,setFormData}){

    const {isLoading,isError,data,error} = useQuery(['usuarios', formId], ()=> getUsuario(formId))

    if(isLoading) return <di>Cargando...</di>
    if(isError) return <div>Error</div>

    const {primerNombre,primerApellido,email,fechaNacimiento,estado} = data;
  /*   const [primerNombre]=nombre? nombre.split(''):formData */

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(Object.keys(formData).length==0)return console.log("Dont have Form Data");
        console.log(formData)
    }



    return(
        <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
            <div className="input-type">
                <input type="text" onChange={setFormData} defaultValue={primerNombre} name="primernombre" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Nombre"/>
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} defaultValue={primerApellido} name="primerapellido" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Apellido"/>
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} defaultValue={email} name="elcorreo" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Correo"/>
            </div>
            <div className="input-type">
                <input type="date" onChange={setFormData} defaultValue={fechaNacimiento} name="fechanacimiento" className="border px-5 py-3 focus:outline-none rounded-md" placeholder="Fecha de Nacimiento"/>
            </div>

            <div className="flex gap-10 items-center">
                <div className="form-check">
                    <input type="radio" defaultChecked={estado=="Activo"} onChange={setFormData} value="Activo" id="radioDefault1" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                    <label htmlFor="rafioDefault1" className="inline-block tet-gray-800">
                        Activo
                    </label>
                </div>
                <div className="form-check">
                    <input type="radio" defaultChecked={estado!=="Activo"} onChange={setFormData} value="Inactivo" id="radioDefault2" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                    <label htmlFor="rafioDefault2" className="inline-block tet-gray-800">
                        Inactivo
                    </label>
                </div>
            </div>

            <button className="flex justify-center text-md w-2/6 bg-yellow-400 text-white px-4py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-gree-500">
            Actualizar
            </button>

        </form>
    )
}