export interface UserInterface{
    _id: string | undefined
    photo: string,
    name: string,
    ocupation: string,
    email: string,
    phone: string,
    date: string,
    description: string,
    status: string,
    password: string
}


export interface UserSliceInitialStateInterface{
    data: UserInterface[],
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | undefined
}