import { createStore } from 'redux'
import { Reduccer, initialState } from './Reduceer'

export const ConfigureStore = ()=>{
    const store = createStore(
        Reduccer,
        initialState
    )
    return store
}