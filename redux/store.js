import {configureStore} from '@reduxjs/toolkit'
import Reducer from './reducer'
import listenerMiddleware from './listener'

/* le paso la función 'Reducer' a la propiedad 'reducer:' de 'configureStore' */
export const store = configureStore({
    reducer:{
        app:Reducer 
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().prepend(listenerMiddleware.middleware)
})