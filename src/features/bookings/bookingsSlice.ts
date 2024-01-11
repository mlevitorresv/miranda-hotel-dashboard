import { createSlice } from "@reduxjs/toolkit";
import { getBookingListFromAPIThunk } from "./bookingsThunk";
import { BookingInterface, BookingSliceInitialStateInterface } from "../../interfaces/BookingsInterface";
import { RootState } from "../../app/store";

const initialState: BookingSliceInitialStateInterface = {
    data: [],
    status: 'idle',
    error: undefined
}

export const bookingSlice = createSlice({
    name: "booking",
    initialState: initialState,
    reducers:{},
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


export const getBookingData = (state: RootState): BookingInterface[] => state.booking.data;
export const getBookingStatus = (state: RootState): string => state.booking.status;
export const getBookingError  = (state: RootState): string | undefined => state.booking.error;
export const getBookingRefund = (state: RootState): BookingInterface[] => state.booking.data.filter((booking) => booking.status === 'refund')
export const getBookingPending = (state: RootState): BookingInterface[] => state.booking.data.filter((booking) => booking.status === 'pending')
export const getBookingBooked = (state: RootState): BookingInterface[] => state.booking.data.filter((booking) => booking.status === 'booked')