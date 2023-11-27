import React from 'react'
import { MessageInfoStyled } from './MessageInfoStyled'

export const MessageInfo = (props) => {
  return (
    <MessageInfoStyled>
        <img src={props.img} alt="room of hotel" />
        <div>
            <p className='name'>{props.name}</p>
            <p className='id'>{props.id}</p>
            <p className='join'>Joined At: {props.join}</p>
        </div>
    </MessageInfoStyled>
  )
}
