import React from 'react'
import { GuestCheckStyled } from './GuestCheckStyled'

export const GuestCheck = (props) => {
  return (
    <GuestCheckStyled>
        {props.date} <span>{props.hour}</span>
    </GuestCheckStyled>
  )
}
