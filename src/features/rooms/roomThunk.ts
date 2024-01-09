import { createAsyncThunk } from "@reduxjs/toolkit";
import rooms from '../../data/rooms.json'
import { RoomInterface } from "../../interfaces/RoomInterface";
import { apiRequest } from "../../api/apiCalls";


export const getRoomListFromAPIThunk = createAsyncThunk<RoomInterface[], void, { state: any, rejectValue: string }>("room/getRoomFromApi", async (): Promise<RoomInterface[]> => {
    try {
        const token = localStorage.getItem('token');
        console.log('token: ', token)
        const response  = await apiRequest('rooms', 'GET', null, token);
        return response;
    } catch (error) {
        throw new Error('Error al obtener la lista de habitaciones desde la API')
    }
})