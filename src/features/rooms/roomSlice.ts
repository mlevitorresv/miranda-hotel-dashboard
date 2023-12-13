import { createSlice } from "@reduxjs/toolkit";
import { getRoomListFromAPIThunk } from "./roomThunk";
import { RoomInterface, RoomSliceInitialStateInterface, statusOption } from "../../interfaces/RoomInterface";

const initialState: RoomSliceInitialStateInterface = {
    data: [],
    status: 'idle',
    error: undefined
}

export const roomSlice = createSlice({
    name: "room",
    initialState: initialState,
    reducers:{
        getRoomById: (state, action): void => {
            state.data.filter((room) => room.id === action.payload.id)
        },
        addRoomElement: (state, action): void => {
            state.data = [action.payload, ...state.data]
        },
        removeRoomElement: (state, action): void => {
            state.data = state.data.filter((room) => room.id !== action.payload.id)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getRoomListFromAPIThunk.fulfilled, (state, action): void => {
            state.status = "fulfilled"
            state.data = action.payload
        })
        .addCase(getRoomListFromAPIThunk.rejected, (state, action): void => {
            state.status = "rejected"
            state.error = action.error.message
        })
        .addCase(getRoomListFromAPIThunk.pending, (state, action): void => {
            state.status = "pending"
        })
    }
})


export const { addRoomElement, removeRoomElement } = roomSlice.actions;
export const getRoomData = (state): RoomInterface[] => state.room.data;
export const getRoomStatus = (state) => state.room.status;
export const getRoomError  = (state) => state.room.error;
export const getBookedRooms = (state) => state.room.data.filter((room) => !room.available)
export const getAvailableRooms = (state) => state.room.data.filter((room) => room.available)