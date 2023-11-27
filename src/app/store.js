import { configureStore } from "@reduxjs/toolkit";
import { roomSlice } from "../features/rooms/roomSlice";
import { userSlice } from "../features/user/userSlice";
import { bookingSlice } from "../features/bookings/bookingsSlice";
import { contactSlice } from "../features/contact/contactSlice";



export const store = configureStore({
    reducer: {
        room: roomSlice.reducer,
        user: userSlice.reducer,
        booking:  bookingSlice.reducer,
        contact: contactSlice.reducer
    }
})