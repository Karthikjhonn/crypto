import { configureStore } from '@reduxjs/toolkit'
import navigationReducer from '../features/nav/navSlice'


export const store = configureStore({
    reducer:{
        navigation:navigationReducer,
    },
})
export default store