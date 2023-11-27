import { createAsyncThunk } from "@reduxjs/toolkit";
import bookings from '../../data/bookings.json'


export const getBookingListFromAPIThunk = createAsyncThunk("booking/getBookingFromApi", async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(bookings);
        }, 2000);
    });
})