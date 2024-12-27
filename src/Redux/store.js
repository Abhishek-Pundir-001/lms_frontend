import { configureStore } from "@reduxjs/toolkit";
import authSlicReducer from './slices/AuthSlice'


const store = configureStore({
    reducer:{
        auth:authSlicReducer
    }
    ,
    devTools:true
})

export default store