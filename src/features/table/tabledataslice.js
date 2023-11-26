import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    data:[],
    status:"idle",
    error:null
};
const URL ="https://api.coincap.io/v2/markets"
export const fetchpost =createAsyncThunk("marketdata/fetchpost",async()=>{
    console.log("api hit");
    const response = await axios(URL)
    return response.data
})
export const tabelDataSlice = createSlice({
    name:'marketdata',
    initialState,
    reducers:{

    },
    extraReducers(builder){
        builder.addCase(fetchpost.pending,(state,action)=>{
            state.status="loading";
        })
        builder.addCase(fetchpost.fulfilled,(state,action)=>{
            state.status="success";
            // console.log(action.payload.data);
            state.data=action.payload.data;
        })
        builder.addCase(fetchpost.rejected,(state,action)=>{
            state.status="error";
            state.error=action.error.message
        })
    }
})

export const sellectAllpost = (state)=>state.marketdata.data
export const apiStatus = (state)=>state.marketdata.status
export const error = (state)=>state.marketdata.error

export default tabelDataSlice.reducer