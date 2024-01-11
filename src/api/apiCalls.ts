const API_URL = 'http://localhost:4000';

export const apiRequest = async (endpoint: string, method: string = 'GET', body: object | null, token: string | null) => {

    try {
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

        const response = await fetch(`${API_URL}/${endpoint}`, requestOptions)
        if(endpoint === 'login')
            return await response.json()
        return response;
    } catch (error) {
        throw new Error('Network Error')
    }

}