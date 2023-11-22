import React from 'react'
import { GuestImageStyled } from './GuestImageStyled'

export const GuestImage = (props) => {
  return (
    <GuestImageStyled>
        <img src={props.img} alt="room of hotel" />
        <div>
            <p className='name'>{props.name}</p>
            <p className='number'>{props.number}</p>
        </div>
    </GuestImageStyled>
  )
}
