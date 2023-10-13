import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    navStatus : true
}
export const navSlice=createSlice({
    name:'navigation',
    initialState,
    reducers:{
        navActive:(state,action)=>{
            state.navStatus=action.payload
        }
    }
})
export const {navActive} = navSlice.actions
export const navStatus = (store)=>store.navigation.navStatus

export default navSlice.reducer