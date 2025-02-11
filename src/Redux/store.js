import { configureStore } from "@reduxjs/toolkit";
import authSlicReducer from './slices/AuthSlice'
import courseListReducer from './slices/CourseListSlice'
import lectureReducer from './slices/LectureSlice'


const store = configureStore({
    reducer:{
        auth:authSlicReducer,
        course:courseListReducer,
        lecture:lectureReducer
    }
    ,
    devTools:true
})

export default store