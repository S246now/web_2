
import UpdateUserForm from "./updateUserForm";
import AddUserForm from "./addUserForm";
import { useSelector } from "react-redux";
import { useReducer } from "react";

const formReducer = (state, event) => {
    return{
        ...state, /* override el valor previo */
        [event.target.name]:event.target.value /* toma el valor  del input*/
    }
}

export default function Form(){

    const[formData, setFormData] = useReducer(formReducer,{});
    const formId = useSelector((state)=>state.app.client.formId)
    /* const flag=false;  cuando el valor cambia, el botón respectivo se hace visible */

    return(
        <div className='container mx-auto py-5'>
            {/* Control el botón a mostrar */}
            {formId?UpdateUserForm({formId,formData,setFormData}):AddUserForm(({formData, setFormData}))}
        </div>
    )
}