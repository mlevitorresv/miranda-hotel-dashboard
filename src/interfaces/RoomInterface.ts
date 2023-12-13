

export interface RoomInterface{
    photo: string,
    id: number,
    type: string,
    bed: string,
    amenities: string,
    description: string,
    rate: number,
    price: number,
    discount: number,
    available: boolean
}


export const statusOption = <const>['idle', 'pending', 'fulfilled', 'rejected']
export interface RoomSliceInitialStateInterface{
    data: RoomInterface[],
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | undefined
}