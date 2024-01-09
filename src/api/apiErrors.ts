export const handleApiErrors = async (response: Response) => {
    if(!response.ok){
        const errorData = await response.json();
        throw new Error(errorData.message);
    }
    return response.json();
}