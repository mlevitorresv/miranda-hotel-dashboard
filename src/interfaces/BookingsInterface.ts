

export interface BookingInterface{
    _id:string
    photo:string
    name:string
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