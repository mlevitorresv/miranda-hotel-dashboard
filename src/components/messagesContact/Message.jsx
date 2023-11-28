import React, { useState } from 'react'
import { MessageStyled } from './MessageStyled'
import { GuestImage } from '../guest/GuestImage'
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import { MessageContentSyled } from './MessageContentStyled';
import { PopUp } from '../popUp/PopUp';
import { MessageInfo } from './MessageInfo';


export const Message = (props) => {
  
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handlePopUp = () => {
    if(!isPopUpOpen){
      setIsPopUpOpen(true);
    }else{
      setIsPopUpOpen(false);
    }
    
  };

  return (
    <>
      <MessageStyled onClick={handlePopUp}>
          <MessageContentSyled>{props.comment}</MessageContentSyled>
          <div className='bottom'>
              <MessageInfo img={props.img} name={props.name} join={props.join} />
              <div>
                  <CiCircleCheck className='check'/>
                  <CiCircleRemove className='remove'/>
              </div>
          </div>
      </MessageStyled>

      {isPopUpOpen && (
          <PopUp onClose={handlePopUp}>
              <p>Comentario:</p>
              <p>{props.comment}</p>
          </PopUp>
        
      )}
    </>
  )
}
