import { configureStore } from "@reduxjs/toolkit";
import { RoomSlice } from "../features/rooms/roomSlice";



export const store = configureStore({
    reducer: {
        room: RoomSlice.reducer
    }
})