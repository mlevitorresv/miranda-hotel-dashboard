import React from 'react'
import { GuestImageRoomStyled } from './GuestImageRoomStyled'
import { GuestImageRoomPropsInterface } from '../../interfaces/componentsInterface'

export const GuestImageRoom = (props: GuestImageRoomPropsInterface) => {
  return (
    <GuestImageRoomStyled>
        <img src={props.img} alt="room of hotel" />
        <div>
            <p className='id'>{props.id}</p>
            <p className='data'>{props.data}</p>
        </div>
    </GuestImageRoomStyled>
  )
}
