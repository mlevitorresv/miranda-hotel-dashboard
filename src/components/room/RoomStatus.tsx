import React from 'react'
import { RoomStatusStyled } from './RoomStatusStyled'
import { RoomStatusPropsInterface } from '../../interfaces/componentsInterface';

export const RoomStatus = (props: RoomStatusPropsInterface) => {
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
