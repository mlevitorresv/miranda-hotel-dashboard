import React, { useEffect } from 'react';
import { DivKPI } from '../components/KPI/DivKPI';
import { MessagesContainer } from '../components/messagesContact/MessagesContainer';
import { MessageDivStyled } from '../components/messagesContact/MessagesDivStyled';

export const Dashboard =() => {

  return (
    <div>
        <DivKPI />
        <MessageDivStyled>
          <h1 className='messages__title'>Latest review by customers</h1>
          <MessagesContainer />
        </MessageDivStyled>
    </div>
  )
}
