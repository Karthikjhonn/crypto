import { configureStore } from '@reduxjs/toolkit'
import navigationReducer from '../features/nav/navSlice'
import apiReducer from '../features/todaytrending/trendingcoinslice'
import marketdataapi from '../features/table/tabledataslice'

export const store = configureStore({
    reducer:{
        navigation:navigationReducer,
        gettrendingcoins:apiReducer,
        marketdata:marketdataapi,
    },
})
export default store