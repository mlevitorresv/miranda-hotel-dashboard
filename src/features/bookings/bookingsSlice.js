import { createSlice } from "@reduxjs/toolkit";
import { getBookingListFromAPIThunk } from "./bookingsThunk";


export const bookingSlice = createSlice({
    name: "booking",
    initialState: {
        data: [],
        status: "idle",
        error: null
    },
    reducers:{
        addBookingElement: (state, action) => {
            state.data = [action.payload, ...state.data]
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBookingListFromAPIThunk.fulfilled, (state, action) => {
            state.status = "fulfilled"
            state.data = action.payload
        })
        .addCase(getBookingListFromAPIThunk.rejected, (state, action) => {
            state.status = "rejected"
            state.error = action.error.message
        })
        .addCase(getBookingListFromAPIThunk.pending, (state, action) => {
            state.status = "pending"
        })
    }
})


export const getBookingData = state => state.booking.data;
export const getBookingStatus = state => state.booking.status;
export const getBookingError  = state => state.booking.error;