import React from 'react'
import { GuestCheckStyled } from './GuestCheckStyled'
import { GuestCheckPropsInterface } from '../../interfaces/componentsInterface'

export const GuestCheck = (props: GuestCheckPropsInterface) => {
  return (
    <GuestCheckStyled>
        {props.date} <span>{props.hour}</span>
    </GuestCheckStyled>
  )
}
