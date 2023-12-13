import { createAsyncThunk } from "@reduxjs/toolkit";
import bookings from '../../data/bookings.json'
import { BookingInterface } from "../../interfaces/BookingsInterface";


export const getBookingListFromAPIThunk = createAsyncThunk<BookingInterface[], void, { state: any, rejectValue: string }>("booking/getBookingFromApi",  async (): Promise<BookingInterface[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(bookings);
        }, 2000);
    });
})