import {createSlice} from "@reduxjs/toolkit"

const initialState={
    client:{toggleForm:false, formId:undefined}
}

export const ReducerSlice = createSlice({
    name:'appweb',
    initialState,
    reducers:{
        toggleChangeAction:(state)=>{
            state.client.toggleForm = !state.client.toggleForm/* si el toggleForm es false, cambiara a true. Lo mismo inversamente */
        },
        updateAction:(state,action)=>{
            state.client.formId = action.payload
        }
    }
})

export const{toggleChangeAction, updateAction} = ReducerSlice.actions

export default ReducerSlice.reducer;