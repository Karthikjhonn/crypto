import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    username:false
}

export const userSlice = createSlice({
    initialState,
    name:"AuthUser",
    reducers:{
        setusername(state,action){
            state.username = action.payload
        }
    }
});


export const {setusername} = userSlice.actions
export const userName =(store)=>store.AuthUser.username
export default userSlice.reducer;