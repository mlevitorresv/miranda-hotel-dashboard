import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { ConciergeContactStyled } from './ConciergeContactStyled';
import { ConciergeContactPropsInterface } from '../../interfaces/componentsInterface';


export const ConciergeContact = (props: ConciergeContactPropsInterface) => {
  return (
    <ConciergeContactStyled>
      <FaPhoneAlt className='icon'/> {props.data}
    </ConciergeContactStyled>
  )
}
