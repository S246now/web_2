import {createSlice} from "@reduxjs/toolkit"

const initialState={
    client:{toggleForm:false, formId:undefined, deleteId:null} /* propiedades creadas para las acciones de abajo */
}

export const ReducerSlice = createSlice({
    name:'appweb',
    initialState,
    reducers:{
        toggleChangeAction:(state)=>{
            state.client.toggleForm = !state.client.toggleForm/* si el toggleForm es false, cambiara a true. Lo mismo inversamente */
        },
        updateAction:(state,action)=>{
            state.client.formId = action.payload /* con la acción de payload, pasamos el valor del formId */
        },
        deleteAction:(state,action)=>{
            state.client.deleteId = action.payload
        }
    }
})

export const{toggleChangeAction, updateAction, deleteAction} = ReducerSlice.actions

export default ReducerSlice.reducer;