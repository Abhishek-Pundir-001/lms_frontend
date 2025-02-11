import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosinstance"
import toast from "react-hot-toast"

export const getCourseLectures = createAsyncThunk('/course/lecture/get', async (cid) => {
    try {
        const res = axiosInstance.get(`/courses/${cid}`)
        toast.promise(res,{
            loading:'wait getting your lectures',
            success:'getting lecture successfully',
            error:'fail to load lectures'
        })
        return (await res).data.courseDetails?.lectures
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const addLectures = createAsyncThunk('/course/lecture/add', async (data)=>{
    try {
        const formData = new FormData();
        formData.append("lecture",data.lecture);
        formData.append("description",data.description)
        formData.append("title",data.title)

        const res = axiosInstance.post(`/courses/${data.id}`,formData);
        toast.promise(res,{
            loading:'Adding lecture to the course',
            success:'Lecture added successfully',
            error:'failed to add the lectures'
        })
        return (await res).data
        
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const deleteLecture = createAsyncThunk('/course/lecture/delete', async(data)=>{
    try {
        const res = axiosInstance.delete(`/courses?courseId=${data.courseId}&lectureId=${data.lectureId}`);
        toast.promise(res,{
            loading:'wait deleting the lecture',
            success:'lecture deleted successfully',
            error:'fail to delete the lecture'
        })
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

const initialState = {
    lectures: []
}

const lectureSlice = createSlice({
    name: 'lecture',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCourseLectures.fulfilled,(state,action)=>{
            // console.log(action.payload)
            state.lectures = [...action.payload]
        })
    }
})

export default lectureSlice.reducer