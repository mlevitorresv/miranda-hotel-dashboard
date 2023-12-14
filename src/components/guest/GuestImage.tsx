import React from 'react'
import { GuestImageStyled } from './GuestImageStyled'
import { GuestImagePropsInterface } from '../../interfaces/componentsInterface'

export const GuestImage = (props: GuestImagePropsInterface) => {
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
