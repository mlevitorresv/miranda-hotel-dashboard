import { configureStore } from "@reduxjs/toolkit";
import { roomSlice } from "../features/rooms/roomSlice";
import { userSlice } from "../features/user/userSlice";



export const store = configureStore({
    reducer: {
        room: roomSlice.reducer,
        user: userSlice.reducer
    }
})