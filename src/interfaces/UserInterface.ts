export interface UserInterface{
    photo: string,
    id: number,
    name: string,
    date: string,
    email: string,
    phone: string,
    description: string,
    status: string
}

export const statusOptions = <const>['idle', 'pending', 'fulfilled', 'rejected']

export interface UserSliceInitialStateInterface{
    data: UserInterface[],
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | undefined
}