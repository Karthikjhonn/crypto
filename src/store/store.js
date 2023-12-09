import { configureStore } from '@reduxjs/toolkit'
import navigationReducer from '../features/nav/navSlice'
import apiReducer from '../features/todaytrending/trendingcoinslice'
import marketdataapi from '../features/table/tabledataslice'
import userauthReducer from '../features/auth/authSlice'
import newsslice from '../features/news/newsslice'

export const store = configureStore({
    reducer:{
        AuthUser:userauthReducer,
        navigation:navigationReducer,
        gettrendingcoins:apiReducer,
        marketdata:marketdataapi,
        newsApi:newsslice,
    },
})
export default store