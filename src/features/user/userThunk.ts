import { createAsyncThunk } from "@reduxjs/toolkit";
import users from '../../data/users.json'
import { UserInterface } from "../../interfaces/UserInterface";
import { apiRequest } from "../../api/apiCalls";



export const getUserListFromAPIThunk = createAsyncThunk<UserInterface[], void, { state: any, rejectValue: string }>("user/getUsersFromApi", async (): Promise<UserInterface[]> => {
    try {
        const token = localStorage.getItem('token');
        const response = await apiRequest('users', 'GET', null, token);
        console.log('Response:', response);

        const responseData = await response.json();
        console.log('Response Data:', responseData);


        return responseData.users;
    } catch (error) {
        throw new Error('Error al obtener la lista de usuarios desde la API')
    }
})


export const getUserFromAPIThunk = createAsyncThunk<UserInterface[], string | undefined, { state: any, rejectValue: string }>("user/getUserFromApi", async (id): Promise<UserInterface[]> => {
    try {
        const token = localStorage.getItem('token');
        const response = await apiRequest(`users/${id}`, 'GET', null, token);
        const responseData = await response.json();
        return responseData.user;
    } catch (error) {
        throw new Error('Error al obtener el usuario desde la API')
    }
})


export const createUserToAPIThunk = createAsyncThunk("user/createUserToApi", async (body: UserInterface): Promise<UserInterface[]> => {
    try {
        const token = localStorage.getItem('token');
        const response = await apiRequest('users', 'POST', body, token);
        const responseData = await response.json();
        return responseData.users;
    } catch (error) {
        throw new Error('Error al crear el usuario')
    }
})



// export const updateUserToAPIThunk = createAsyncThunk<UserInterface[], object, { state: any, rejectValue: string }>("user/getUserFromApi", async (id, body): Promise<UserInterface[]> => {
//     try {
//         const token = localStorage.getItem('token');
//         const response = await apiRequest('users', 'POST', body, token);
//         const responseData = response.json();
//         return responseData.users;
//     } catch (error) {
//         throw new Error('Error al crear el usuario')
//     }
// })



export const deleteUserToAPIThunk = createAsyncThunk<UserInterface, string, { state: any, rejectValue: string }>("user/deleteUserToApi", async (id: any): Promise<UserInterface> => {
    try {
        const token = localStorage.getItem('token');
        const response = await apiRequest(`users/${id}`, 'DELETE', null, token);
        const responseData = await response.json();
        return responseData.success;
    } catch (error) {
        throw new Error('Error al eliminar el usuario')
    }
})