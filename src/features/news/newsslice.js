import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posts: [],
    status: "idle",
    error: null
}

const URL = "https://newsapi.org/v2/everything?q=crypto&from=2023-11-09&sortBy=publishedAt&apiKey=63d8332e997e48dab10fe56e0b27be56"


export const fetchPost = createAsyncThunk('newsApi/fetchPost', async () => {
    const response = await axios.get(URL);
    return response.data
})


export const ApiSlice = createSlice({
    name: "newsApi",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchPost.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.status = "success"
                // console.log(action.payload.articles);
                state.posts = action.payload.articles
            })
            .addCase(fetchPost.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    }
})

export const newsApiStatus = (store) => store.newsApi.status;
export const newsApiError = (store) => store.newsApi.error;
export const selectAllPost = (store) => store.newsApi.posts;

export default ApiSlice.reducer