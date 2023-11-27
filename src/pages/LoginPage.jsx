import { InputStyled } from '../components/common/InputStyled'
import { ButtonStyled } from '../components/common/ButtonStyled'
import { Link, useNavigate } from "react-router-dom";
import { FormStyled } from '../components/form/FormStyled';
import { FormPageStyled } from '../components/form/FormPageStyled';
import { useState } from 'react';


export const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const navigate = useNavigate();

  const handleChangeEmail = (e) =>{
    setEmail(e.target.value);
  }

  const handleChangePass = (e) =>{
    setPass(e.target.value);
  }

  const handleLogin = (e) => {
    e.preventDefault();

    if(email === 'test@test.com' && pass === 'test1234'){
      localStorage.setItem('conex', true);
      navigate('/home');
    }else{
      alert('No se inició sesión, usuaario o password incorrectos')
    }
  }

  return (
    <>
      <FormPageStyled>
          <FormStyled onSubmit={handleLogin}>
              <Link to='/' className='loginForm__image'><img src="/public/logo.png" alt="Hotel Miranda's logo" /></Link>
              <InputStyled type="email" name="emailInput" id="emailInput" placeholder='example@example.com' onChange={handleChangeEmail}/>
              <InputStyled type="password" name="passInput" id="passInput" placeholder='password'  onChange={handleChangePass}/>
              <ButtonStyled type='submit'>SIGN IN</ButtonStyled>
          </FormStyled> 
      </FormPageStyled>
    </>
  )
}
