
/* import data from '../database/data.json' */
import { getUsuarios } from '../lib/helper'
import {useQuery} from 'react-query'
import {useSelector, useDispatch} from 'react-redux'
import {toggleChangeAction, updateAction, deleteAction} from '../redux/reducer'

export default function Table(){

    /* getUsuario().then(res=>console.log(res)) */
    const {isLoading, isError, data} = useQuery('usuarios', getUsuarios)

    if(isLoading) return <div>Cargando Usuarios...</div>;
    if(isError) return <div>Ha Ocurrido un Error</div>

    return(
        <table className="min-w-full table-auto">
            <thead>
                <tr className="bg-gray-800">
                    <th className="px-16 py-2" >
                        <span className="text-gray-200">Nombre</span>
                    </th>
                    <th className="px-16 py-2" >
                        <span className="text-gray-200">Apellido</span>
                    </th>
                    <th className="px-16 py-2" >
                        <span className="text-gray-200">Correo</span>
                    </th>
                    <th className="px-16 py-2" >
                        <span className="text-gray-200">Fecha de Nacimiento</span>
                    </th>
                    <th className="px-16 py-2" >
                        <span className="text-gray-200">Estado</span>
                    </th>
                    <th className="px-16 py-2" >
                        <span className="text-gray-200">Acciones</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-gray-200">
                {/*{Tr()} muestra los datos en la función Tr() que trae los datos desde el .json importado*/}
                {
                    data.map((obj, i) => <Tr{...obj}key={i}/>)
                }
            </tbody>
        </table>
    )
}

function Tr({_id,nombre,apellido,correo,fechaNacimiento,estado}){

    const visible = useSelector((state)=>state.app.client.toggleForm) /* para cambiar el 'state', necesito el Dispatch */
    const dispatch = useDispatch()

    const onUpdate=()=>{
        dispatch(toggleChangeAction(_id))
        if(visible){
            dispatch(updateAction(_id))
        }
    }

    const onDelete=()=>{
        if (visible) {
            dispatch(deleteAction(_id))
        }
    }
    
    return( 
        <tr className="gb-gray-50 text-center">
            <td className="px-16 py-2 flex-row items-center">
                {/* <img src={imagen||"#"} alt="" className="h-8 w-8 rounded-full object-cover"></img> */}
                <span className="text-center ml-2 font-semibold">{nombre||"No proporcionado"}</span>
            </td>
            <td className="px-16 py-2">
                <span>{apellido||"No proporcionado"}</span>
            </td>
            <td className="px-16 py-2">
                <span>{correo||"No proporcionado"}</span>
            </td>
            <td className="px-16 py-2">
                <span>{fechaNacimiento||"No proporcionado"}</span>
            </td>
            <td className="px-16 py-2">
                <button className="cursor"><span className={'text-white px-5 py-1 rounded-full'}>{estado||"No proporcionado"}</span></button>
            </td>
            <td className="px-16 py-2 flex justify-around gap-5">
                <button className="cursor" onClick={onUpdate}>
                    Editar
                </button>
                <button className="cursor" onClick={onDelete}>
                    Eliminar
                </button>
            </td>
        </tr>
    )
}