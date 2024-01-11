import { createSlice } from "@reduxjs/toolkit";
import { /*createUserToAPIThunk, deleteUserToAPIThunk, getUserFromAPIThunk,*/ getUserListFromAPIThunk } from "./userThunk";
import { UserInterface, UserSliceInitialStateInterface } from '../../interfaces/UserInterface'
import { RootState } from "../../app/store";

const initialState: UserSliceInitialStateInterface = {
    data: [],
    status: 'idle',
    error: undefined
}

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(getUserListFromAPIThunk.fulfilled, (state, action): void => {
            state.status = "fulfilled"
            state.data = action.payload
        })
        .addCase(getUserListFromAPIThunk.rejected, (state, action): void => {
            state.status = "rejected"
            state.error = action.error.message
            console.log("Error fetching user list:", action.error)
        })
        .addCase(getUserListFromAPIThunk.pending, (state, action): void => {
            state.status = "pending"
        })


        // .addCase(getUserFromAPIThunk.fulfilled, (state, action): void => {
        //     state.status = "fulfilled"
        //     state.data = action.payload
        // })
        // .addCase(getUserFromAPIThunk.rejected, (state, action): void => {
        //     state.status = "rejected"
        //     state.error = action.error.message
        // })
        // .addCase(getUserFromAPIThunk.pending, (state, action): void => {
        //     state.status = "pending"
        // })


        // .addCase(createUserToAPIThunk.fulfilled, (state, action): void => {
        //     state.status = "fulfilled"
        //     state.data = action.payload
        // })
        // .addCase(createUserToAPIThunk.rejected, (state, action): void => {
        //     state.status = "rejected"
        //     state.error = action.error.message
        // })
        // .addCase(createUserToAPIThunk.pending, (state, action): void => {
        //     state.status = "pending"
        // })


        // .addCase(deleteUserToAPIThunk.fulfilled, (state, action): void => {
        //     state.status = "fulfilled"
        //     state.data = action.payload
        // })
        // .addCase(deleteUserToAPIThunk.rejected, (state, action): void => {
        //     state.status = "rejected"
        //     state.error = action.error.message
        // })
        // .addCase(deleteUserToAPIThunk.pending, (state, action): void => {
        //     state.status = "pending"
        // })


        // .addCase(updateUserToAPIThunk.fulfilled, (state, action): void => {
        //     state.status = "fulfilled"
        //     state.data = action.payload
        // })
        // .addCase(updateUserToAPIThunk.rejected, (state, action): void => {
        //     state.status = "rejected"
        //     state.error = action.error.message
        // })
        // .addCase(updateUserToAPIThunk.pending, (state, action): void => {
        //     state.status = "pending"
        // })




    }
})



export const getUserData = (state: RootState): UserInterface[] => state.user.data;
export const getUserStatus = (state: RootState): string => state.user.status;
export const getUserError  = (state: RootState): string | undefined => state.user.error;
export const getUserActive = (state: RootState): UserInterface[] => state.user.data.filter((user) => user.status === 'ACTIVE')
export const getUserInactive = (state: RootState): UserInterface[] => state.user.data.filter((user) => user.status === 'INACTIVE')