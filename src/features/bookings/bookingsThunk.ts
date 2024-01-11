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