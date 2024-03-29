import React from 'react'
import { GuestDivStyled } from './GuestDivStyled'
import { GuestDivPropsInterface } from '../../interfaces/componentsInterface'

export const GuestDiv = (props: GuestDivPropsInterface) => {
  return (
    <GuestDivStyled color={props.color || '#393939'}>
      {props.data}
    </GuestDivStyled>
  )
}
