import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { ConciergeContactStyled } from './ConciergeContactStyled';


export const ConciergeContact = (props) => {
  return (
    <ConciergeContactStyled>
      <FaPhoneAlt className='icon'/> {props.data}
    </ConciergeContactStyled>
  )
}
