import React from 'react'
import { RoomRateStyled } from './RoomRateStyled'
import { RoomRatePropsInterface } from '../../interfaces/componentsInterface'

export const RoomRate = (props: RoomRatePropsInterface) => {
  return (
    <RoomRateStyled>
        <span>${props.price}</span>/Night
    </RoomRateStyled>
  )
}
