import { InputStyled } from '../components/common/InputStyled'
import { ButtonStyled } from '../components/common/ButtonStyled'
import { Link, useNavigate } from "react-router-dom";
import { FormStyled } from '../components/form/FormStyled';
import { FormPageStyled } from '../components/form/FormPageStyled';
import React, { useState } from 'react';
import { useAuth } from '../context/AuthProvider';


export const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const {login} = useAuth();
  const navigate = useNavigate();

  const handleChangeEmail = (e: React.FormEvent<HTMLInputElement>) =>{
    setEmail(e.currentTarget.value);
  }

  const handleChangePass = (e: React.FormEvent<HTMLInputElement>) =>{
    setPass(e.currentTarget.value);
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(email === 'test@test.com' && pass === 'test1234'){
      const userData = {email: email, password: pass}
      login(userData)
      navigate('/home');
    }else{
      alert('No se inició sesión, usuario o password incorrectos')
    }
  }

  return (
    <>
      <FormPageStyled>
          <FormStyled onSubmit={handleLogin}>
              <Link to='/' className='loginForm__image'><img src="/public/logo.png" alt="Hotel Miranda's logo" /></Link>
              <InputStyled type="email" name="emailInput" id="emailInput" placeholder='example@example.com' onChange={handleChangeEmail}/>
              <InputStyled type="password" name="passInput" id="passInput" placeholder='password'  onChange={handleChangePass}/>
              <ButtonStyled type='submit'>INICIAR SESION</ButtonStyled>
          </FormStyled> 
      </FormPageStyled>
    </>
  )
}
