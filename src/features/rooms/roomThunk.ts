import { createAsyncThunk } from "@reduxjs/toolkit";
import rooms from '../../data/rooms.json'
import { RoomInterface } from "../../interfaces/RoomInterface";
import { apiRequest } from "../../api/apiCalls";


export const getRoomListFromAPIThunk = createAsyncThunk<RoomInterface[], void, { state: any, rejectValue: string }>("room/getRoomFromApi", async (): Promise<RoomInterface[]> => {
    try {
        const token = localStorage.getItem('token');
        const response  = await apiRequest('rooms', 'GET', null, token);
        const responseData = await response.json();
        return responseData.rooms;
    } catch (error) {
        throw new Error('Error al obtener la lista de habitaciones desde la API')
    }
})


export const createRoomToAPIThunk = createAsyncThunk("room/createRoomToApi", async (body: RoomInterface): Promise<RoomInterface[]> => {
    try {
        const token = localStorage.getItem('token');
        const response = await apiRequest('rooms', 'POST', body, token);
        const responseData = await response.json();
        return responseData.rooms;
    } catch (error) {
        throw new Error('Error al crear la habitación')
    }
})


export const deleteRoomToAPIThunk = createAsyncThunk<RoomInterface, string, { state: any, rejectValue: string }>("user/deleteUserToApi", async (id: any): Promise<RoomInterface> => {
    try {
        const token = localStorage.getItem('token');
        const response = await apiRequest(`rooms/${id}`, 'DELETE', null, token);
        const responseData = await response.json();
        return responseData.success;
    } catch (error) {
        throw new Error('Error al eliminar a habitación')
    }
})