export interface UserInterface{
    id: number,
    photo: string,
    name: string,
    ocupation: string,
    email: string,
    phone: string,
    date: string,
    desc: string,
    status: string,
    password: string
}


export interface UserSliceInitialStateInterface{
    data: UserInterface[],
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | undefined
}