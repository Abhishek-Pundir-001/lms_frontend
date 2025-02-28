import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosinstance";
import toast from "react-hot-toast";

export const getAllCourses = createAsyncThunk('/course/list', async () => {
    try{
        const res = axiosInstance.get('/courses');
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


export const createNewCourse = createAsyncThunk('/course/create',async (data)=>{
 try{
    console.log(data)
    const res = axiosInstance.post('/courses',data)
    toast.promise(res,{
      loading:"wait creating a new course",
      success:"course created suuccessfully",
      error:"failed to create a course"
    })
    return (await res).data
 }catch(e){
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
            // console.log(action)
            if (action.payload) {
                state.courseData = [...action.payload]
               
            }

        })
    }
})

export default couseListSlice.reducer