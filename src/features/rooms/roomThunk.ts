import { createAsyncThunk } from "@reduxjs/toolkit";
import rooms from '../../data/rooms.json'
import { RoomInterface } from "../../interfaces/RoomInterface";


export const getRoomListFromAPIThunk = createAsyncThunk<RoomInterface[], void, { state: any, rejectValue: string }>("room/getRoomFromApi", async (): Promise<RoomInterface[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(rooms);
        }, 2000);
    });
})