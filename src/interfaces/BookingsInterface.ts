

export interface BookingInterface{
    photo:string
    name:string
    id:number
    orderDate:string
    orderTime:string
    checkInDate:string
    checkInTime:string
    checkOut:string
    checkOutTime:string
    notes:string
    room:string
    status:string
}

export interface BookingSliceInitialStateInterface{
    data: BookingInterface[],
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | undefined
}