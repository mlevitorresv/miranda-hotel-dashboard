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
        getUserById: (state, action) => {
            state.data.filter((user) =>user.id === action.payload.id)
        },
        addUserElement: (state, action) => {
            state.data = [action.payload, ...state.data]
        },
        removeUserElement: (state, action) => {
            state.data = state.data.filter((user) => user.id !== action.payload.id)
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


export const { addUserElement, removeUserElement } = userSlice.actions;
export const getUserData = state => state.user.data;
export const getUserStatus = state => state.user.status;
export const getUserError  = state => state.user.error;
export const getUserActive = state => state.user.data.filter(user => user.status === 'ACTIVE')
export const getUserInactive = state => state.user.data.filter(user => user.status === 'INACTIVE')