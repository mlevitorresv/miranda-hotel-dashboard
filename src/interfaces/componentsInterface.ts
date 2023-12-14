import React, { MouseEventHandler } from "react"

export interface ConciergeContactPropsInterface{
    data: string
}

export interface GuestCheckPropsInterface{
    date: string
    hour: string
}

export interface GuestDivPropsInterface{
    color?: string
    data: React.JSX.Element | string
}

export interface GuestImagePropsInterface{
    img: string
    name: string
    id: number | string
    join?: string
}

export interface HeaderPropsInterface{
    title: string
}

export interface AsideNavPropsInterface{
    id: string
}

export interface KPIPropsInterface{
    icon: React.JSX.Element
    number: string
    text: string
}

export interface MessagePropsInterface{
    comment: string
    img: string
    name: string
    join: string
}

export interface MessageInfoPropsInterface{
    img: string
    name: string
    id?: string
    join: string
}

export interface PopUpPropsInterface{
    onClose: MouseEventHandler<HTMLDivElement>;
    children: React.JSX.Element[]
}

export interface GuestImageRoomPropsInterface{
    img: string
    id: number
    data: string
}

export interface RoomRatePropsInterface{
    price: number
}

export interface RoomStatusPropsInterface{
    status: string
}

export interface TfooterPropsInterface{
    currentPage: number
    items: number
    itemsPerPage: number
    onPageChanged: Function
}