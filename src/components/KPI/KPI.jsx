import React from 'react'
import { KPIStyled } from './KPIStyled'

export const KPI = (props) => {
  return (
    <KPIStyled>
        <div className='iconContainer'>
            {props.icon}
        </div>
        <div className='dataContainer'>
            <p className='dataContainer__number'>{props.number}</p>
            <p className='dataContainer__text'>{props.text}</p>
        </div>
    </KPIStyled>
  )
}
