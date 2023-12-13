import { createSlice } from "@reduxjs/toolkit";
import { getUserListFromAPIThunk } from "./userThunk";
import { UserInterface, UserSliceInitialStateInterface } from '../../interfaces/UserInterface'

const initialState: UserSliceInitialStateInterface = {
    data: [],
    status: 'idle',
    error: undefined
}

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers:{
        getUserById: (state, action): void => {
            state.data.filter((user) =>user.id === action.payload.id)
        },
        addUserElement: (state, action): void => {
            state.data = [action.payload, ...state.data]
        },
        removeUserElement: (state, action): void => {
            state.data = state.data.filter((user) => user.id !== action.payload.id)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUserListFromAPIThunk.fulfilled, (state, action): void => {
            state.status = "fulfilled"
            state.data = action.payload
        })
        .addCase(getUserListFromAPIThunk.rejected, (state, action): void => {
            state.status = "rejected"
            state.error = action.error.message
        })
        .addCase(getUserListFromAPIThunk.pending, (state, action): void => {
            state.status = "pending"
        })
    }
})


export const { addUserElement, removeUserElement } = userSlice.actions;
export const getUserData = (state): UserInterface[] => state.user.data;
export const getUserStatus = (state) => state.user.status;
export const getUserError  = (state) => state.user.error;
export const getUserActive = (state) => state.user.data.filter((user) => user.status === 'ACTIVE')
export const getUserInactive = (state) => state.user.data.filter((user) => user.status === 'INACTIVE')