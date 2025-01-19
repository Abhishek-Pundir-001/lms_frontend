import { configureStore } from "@reduxjs/toolkit";
import authSlicReducer from './slices/AuthSlice'
import courseListReducer from './slices/CourseListSlice'


const store = configureStore({
    reducer:{
        auth:authSlicReducer,
        course:courseListReducer
    }
    ,
    devTools:true
})

export default store