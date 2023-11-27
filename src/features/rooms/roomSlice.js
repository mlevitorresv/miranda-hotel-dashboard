import { createSlice } from "@reduxjs/toolkit";
import { getRoomListFromAPIThunk } from "./roomThunk";


export const RoomSlice = createSlice({
    name: "RoomSlice",
    initialState: {
        data: [],
        status: "idle",
        error: null
    },
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(getRoomListFromAPIThunk.fulfilled, (state, action) => {
            state.status = "fulfilled"
            state.data = action.payload
        })
        .addCase(getRoomListFromAPIThunk.rejected, (state, action) => {
            state.status = "rejected"
            state.error = action.error.message
        })
        .addCase(getRoomListFromAPIThunk.pending, (state, action) => {
            state.status = "pending"
        })
    }
})

export const getRoomData = state => state.room.data;
export const getRoomStatus = state => state.room.status;
export const getRoomError  = state => state.room.error;