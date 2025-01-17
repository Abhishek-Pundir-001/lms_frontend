import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosinstance";
import toast from "react-hot-toast";


export const createAccount = createAsyncThunk('/auth/signup', async (data) => {
    try {
        const res = axiosInstance.post('user/register', data);
        toast.promise(res, {
            loading: "wait creating your account",
            success: (data) => {
                return data?.data?.message
            },
            error: "failed to create account frontend"
        })
        
        return (await res).data

    }
    catch (error) {
        toast.error(error?.response?.data?.message)
    }
})


export const loggedInUser = createAsyncThunk('/auth/login', async (data) => {
    try {
        const res = axiosInstance.post('user/login', data);
        toast.promise(res, {
            loading: 'wait logging you in',
            success: (data) => {
                return data?.data?.message
            },
            error: "user login failed"
        })
        
        return (await res).data;
    } 
    catch (error) {
        toast.error(error?.response?.data?.message)
    }
})



const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || '',
    data: localStorage.getItem('data') || {}

}



const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loggedInUser.fulfilled, (state, action) => {
            localStorage.setItem('data', action?.payload?.data)
            localStorage.setItem('isLoggedIn', true)
            localStorage.setItem('role', action?.payload?.data?.role);
            state.isLoggedIn = true,
                state.role = action?.payload?.data?.role,
                state.data = action?.payload?.data
        })
    }
})



export default authSlice.reducer