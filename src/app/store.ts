import { configureStore } from "@reduxjs/toolkit";
import { roomSlice } from "../features/rooms/roomSlice";
import { userSlice } from "../features/user/userSlice";
import { bookingSlice } from "../features/bookings/bookingsSlice";
import { contactSlice } from "../features/contact/contactSlice";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";



export const store = configureStore({
    reducer: {
        room: roomSlice.reducer,
        user: userSlice.reducer,
        booking:  bookingSlice.reducer,
        contact: contactSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector