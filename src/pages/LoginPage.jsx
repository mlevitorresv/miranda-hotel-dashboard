import React, { Fragment } from 'react'
import './LoginPage.css'
import { InputStyled } from '../components/InputStyled'
import { H1Styled } from '../components/H1Styled'
import { ButtonStyled } from '../components/ButtonStyled'

export const LoginPage = () => {
  return (
    <>
    <div className='loginPage'>
        <form className='loginForm'>
            <img src="/src/assets/logo.png" alt="Hotel Miranda's logo" className='loginForm__image'/>
            <InputStyled type="email" name="emailInput" id="emailInput" placeholder='example@example.com' className='loginForm__input'/>
            <InputStyled type="password" name="passInput" id="passInput" placeholder='password' className='loginForm__input'/>
            <ButtonStyled type="submit" className='loginForm__button'>SIGN IN</ButtonStyled>
        </form> 
    </div>
    </>
  )
}
