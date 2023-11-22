import React from 'react'
import { RoomStatusStyled } from './RoomStatusStyled'

export const RoomStatus = (props) => {
    let bgColor;
    if(props.status === 'Available'){
        bgColor = '#5AD07A';
    }else{
        bgColor = '#E23428';
    }
  return (
    <RoomStatusStyled bg={bgColor}>
        {props.status}
    </RoomStatusStyled>
  )
}
