import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    posts: [],
    status: "idle",
    error: null
};

const URL = "https://api.coingecko.com/api/v3/search/trending";

export const fetchPost = createAsyncThunk("gettrendingcoins/fetchPost", async () => {
    const response = await axios.get(URL)
    return response.data
});

export const ApiSlice = createSlice({
    name: "gettrendingcoins",
    initialState,
    reducers: {
        test(state, action) {
            state.gettrendingcoins = "loading"
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPost.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.status = "success"
                // console.log(action.payload.coins);
                state.posts = action.payload.nfts
            })
            .addCase(fetchPost.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    }

});

export const ApiStatus = (store)=>store.gettrendingcoins.status
export const sellectAllpost = (state)=>state.gettrendingcoins.posts
export const error = (state)=>state.gettrendingcoins.error

export default ApiSlice.reducer;