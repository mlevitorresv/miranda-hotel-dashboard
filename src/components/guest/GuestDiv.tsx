import React from 'react'
import { GuestDivStyled } from './GuestDivStyled'

export const GuestDiv = (props: any) => {
  return (
    <GuestDivStyled color={props.color}>
      {props.data}
    </GuestDivStyled>
  )
}
