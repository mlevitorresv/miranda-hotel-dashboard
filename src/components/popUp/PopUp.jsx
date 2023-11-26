import React from 'react'
import { PopUpStyled } from './PopUpStyled'
import { PopUpContainerStyled } from './PopUpContainerStyled'


export const PopUp = ({onClose, children}) => {
  return (
    <PopUpContainerStyled onClick={onClose}>
        <PopUpStyled>
            <div className="popup-content">
                {children}
            </div>
        </PopUpStyled>
    </PopUpContainerStyled>
  )
}
