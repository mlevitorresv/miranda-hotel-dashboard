

export interface RoomInterface{
    _id: string | undefined,
    photo: string,
    type: string,
    bed: string,
    amenities: string,
    description: string,
    rate: number,
    price: number,
    discount: number,
    available: boolean
}

export interface RoomSliceInitialStateInterface{
    data: RoomInterface[],
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | undefined
}