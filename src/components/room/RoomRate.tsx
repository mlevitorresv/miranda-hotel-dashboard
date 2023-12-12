import React from 'react'
import { RoomRateStyled } from './RoomRateStyled'

export const RoomRate = (props: any) => {
  return (
    <RoomRateStyled>
        <span>${props.price}</span>/Night
    </RoomRateStyled>
  )
}
