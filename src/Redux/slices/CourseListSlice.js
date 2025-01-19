import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosinstance";
import toast from "react-hot-toast";

export const getAllCourses = createAsyncThunk('/course/list', async () => {
    try{
        const res = axiosInstance.get('courses');
        toast.promise(res, {
            loading: 'wait getting courses',
            success: 'fetching courses successfully',
            error: 'failed in loading courses'
        })
        return (await res).data.courses
    }
    catch(e){
        toast.error(e?.response?.data?.message)
    }
   
})






const initialState = {
    courseData: []
}

const couseListSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCourses.fulfilled, (state, action) => {
            // console.log(action.payload)
            if (action.payload) {
                state.courseData = [...action.payload]
                // console.log('coursedata',state.coursedata)
            }

        })
    }
})

export default couseListSlice.reducer