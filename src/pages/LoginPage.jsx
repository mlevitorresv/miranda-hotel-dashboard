import React, { Fragment } from 'react'
import './LoginPage.css'
import { InputStyled } from '../components/InputStyled'
import { H1Styled } from '../components/H1Styled'
import { ButtonStyled } from '../components/ButtonStyled'
import { Link } from "react-router-dom";

export const LoginPage = () => {

  return (
    <>
    <div className='loginPage'>
        <form className='loginForm'>
            <Link to='/' className='loginForm__image'><img src="/public/logo.png" alt="Hotel Miranda's logo" /></Link>
            <InputStyled type="email" name="emailInput" id="emailInput" placeholder='example@example.com' className='loginForm__input' />
            <InputStyled type="password" name="passInput" id="passInput" placeholder='password' className='loginForm__input' />
            <ButtonStyled className='loginForm__button'>SIGN IN</ButtonStyled>
        </form> 
    </div>
    </>
  )
}
