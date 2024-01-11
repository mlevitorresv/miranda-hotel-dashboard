import { createAsyncThunk } from "@reduxjs/toolkit";
import comment from '../../data/comment.json'
import { ContactInterface } from "../../interfaces/ContactInterface";
import { apiRequest } from "../../api/apiCalls";


export const getContactListFromAPIThunk = createAsyncThunk<ContactInterface[], void, { state: any, rejectValue: string }>("contact/getContactFromApi", async (): Promise<ContactInterface[]> => {
    try {
        const token = localStorage.getItem('token');
        const response  = await apiRequest('contacts', 'GET', null, token);
        const responseData = await response.json();
        return responseData.contacts;
    } catch (error) {
        throw new Error('Error al obtener la lista de comentarios desde la API')
    }
})