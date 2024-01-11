export const handleApiErrors = async (response: Response) => {
    if(!response.ok){
        const errorData = await response.json();
        throw new Error(`HTTP Error ${response.status}: ${errorData.message}`);
    }
    return await response.json();
}