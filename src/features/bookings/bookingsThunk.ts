import { createAsyncThunk } from "@reduxjs/toolkit";
import bookings from '../../data/bookings.json'
import { BookingInterface } from "../../interfaces/BookingsInterface";
import { apiRequest } from "../../api/apiCalls";


export const getBookingListFromAPIThunk = createAsyncThunk<BookingInterface[], void, { state: any, rejectValue: string }>("booking/getBookingFromApi",  async (): Promise<BookingInterface[]> => {
    try {
        const token = localStorage.getItem('token');
        const response  = await apiRequest('bookings', 'GET', null, token);
        const responseData = await response.json();
        return responseData.bookings;
    } catch (error) {
        throw new Error('Error al obtener la lista de habitaciones desde la API')
    }
})


export const deleteBookingToAPIThunk = createAsyncThunk<BookingInterface, string, { state: any, rejectValue: string }>("user/deleteBookingToApi", async (id: any): Promise<BookingInterface> => {
    try {
        const token = localStorage.getItem('token');
        const response = await apiRequest(`bookings/${id}`, 'DELETE', null, token);
        const responseData = await response.json();
        return responseData.success;
    } catch (error) {
        throw new Error('Error al eliminar la booking')
    }
})