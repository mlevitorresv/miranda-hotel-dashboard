import React from 'react'
import { GuestDivStyled } from './GuestDivStyled'

export const GuestDiv = (props) => {
  return (
    <GuestDivStyled color={props.color}>
      {props.data}
    </GuestDivStyled>
  )
}
