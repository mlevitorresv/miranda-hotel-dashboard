import React from 'react'
import { GuestImageStyled } from './GuestImageStyled'

export const GuestImage = (props: any) => {
  return (
    <GuestImageStyled>
        <img src={props.img} alt="room of hotel" />
        <div>
            <p className='name'>{props.name}</p>
            <p className='id'>{props.id}</p>
            <p className='join'>{props.join}</p>
        </div>
    </GuestImageStyled>
  )
}
