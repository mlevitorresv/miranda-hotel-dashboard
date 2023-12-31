import React from 'react'
import { PopUpStyled } from './PopUpStyled'


export const PopUp = ({onClose, children}) => {
  return (
    <PopUpStyled className="popup-content" onClick={onClose}>
      {children}
    </PopUpStyled>
  )
}
