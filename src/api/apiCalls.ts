import { handleApiErrors } from "./apiErrors";


const API_URL = process.env.REACT_APP_API_URL;

const apiRequest = async (endpoint: string, method: string = 'GET', body: object, token: string) => {

    const headers: Record<string, string> = {
        'Content-Type': 'application/json'
    };

    if (token)
        headers['Authorization'] = `Bearer ${token}`

    const requestOptions = {
        method,
        headers,
        body: body ? JSON.stringify(body) : null
    }

    try {
        const response = await fetch(`${API_URL}/${endpoint}`, requestOptions)
        const data = await handleApiErrors(response)
        return data;
    } catch (error) {
        throw new Error ('Network Error')
    }

}