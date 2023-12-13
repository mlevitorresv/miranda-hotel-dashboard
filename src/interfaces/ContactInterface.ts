
export interface ContactInterface{
    photo: string
    id: number
    name: string
    email: string
    phone: string
    comment: string
    date: string
    dateTime: string
    archived: boolean
}


export interface ContactSliceInitialStateInterface{
    data: ContactInterface[],
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | undefined
}