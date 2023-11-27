import React from 'react'
import { RoomRateStyled } from './RoomRateStyled'

export const RoomRate = (props) => {
  return (
    <RoomRateStyled>
        <span>${props.price}</span>/Night
    </RoomRateStyled>
  )
}
