import React from 'react'
import { MessageStyled } from './MessageStyled'
import { GuestImage } from '../guest/GuestImage'
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";


export const Message = (props) => {
  

  const handlerPopUp = (e) =>{

  }


  return (
    <MessageStyled onClick={handlerPopUp}>
        <p className='comment'>{props.comment}</p>
        <div className='bottom'>
            <GuestImage img={props.img} name={props.name} join={props.join} />
            <div>
                <CiCircleCheck className='check'/>
                <CiCircleRemove className='remove'/>
            </div>
        </div>
    </MessageStyled>
  )
}
