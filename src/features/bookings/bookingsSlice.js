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
        getElementyId: (state, action) => {
            state.data.filter((booking) => booking.id === action.payload.id)
        },
        addBookingElement: (state, action) => {
            state.data = [action.payload, ...state.data]
        },
        removeBookingElement: (state, action) => {
            state.data = state.filter((booking) => booking.id !== action.payload.id)
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


export const { addBookingElement, removeBookingElement } = bookingSlice.actions;
export const getBookingData = state => state.booking.data;
export const getBookingStatus = state => state.booking.status;
export const getBookingError  = state => state.booking.error;
export const getBookingRefund = state => state.booking.data.filter(booking => booking.status === 'refund')
export const getBookingPending = state => state.booking.data.filter(booking => booking.status === 'pending')
export const getBookingBooked = state => state.booking.data.filter(booking => booking.status === 'booked')