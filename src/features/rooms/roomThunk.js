import { createAsyncThunk } from "@reduxjs/toolkit";
import rooms from '../../data/rooms.json'


export const getRoomListFromAPIThunk = createAsyncThunk("room/getRoomFromApi", async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(rooms);
        }, 2000);
    });
})