import { createSlice } from "@reduxjs/toolkit";
import { getUserListFromAPIThunk } from "./userThunk";


export const userSlice = createSlice({
    name: "user",
    initialState: {
        data: [],
        status: "idle",
        error: null
    },
    reducers:{
        addUserElement: (state, action) => {
            state.data = [action.payload, ...state.data]
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUserListFromAPIThunk.fulfilled, (state, action) => {
            state.status = "fulfilled"
            state.data = action.payload
        })
        .addCase(getUserListFromAPIThunk.rejected, (state, action) => {
            state.status = "rejected"
            state.error = action.error.message
        })
        .addCase(getUserListFromAPIThunk.pending, (state, action) => {
            state.status = "pending"
        })
    }
})


export const getUserData = state => state.user.data;
export const getUserStatus = state => state.user.status;
export const getUserError  = state => state.user.error;