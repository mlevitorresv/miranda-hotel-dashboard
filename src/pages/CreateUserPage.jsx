import React from 'react'
import { FormStyled } from '../components/form/FormStyled'
import { ButtonStyled } from '../components/common/ButtonStyled'
import { InputStyled } from '../components/common/InputStyled'
import { SelectStyled } from '../components/table/SelectStyled'
import { H1Styled } from '../components/common/H1Styled'

export const CreateUserPage = () => {


  return (
          <FormStyled>
                <H1Styled>New User</H1Styled>
                <ButtonStyled>Upload Photo</ButtonStyled>
                <InputStyled type="text" name="nameInput" id="nameInput" />
                <SelectStyled type={'secondary'}>
                    <option value="manager" selected>Manager</option>
                    <option value="reception" >Reception</option>
                    <option value="service" >Room Service</option>
                </SelectStyled>
                <InputStyled type="email" name="emailInput" id="emailInput" placeholder='example@example.com'/>
                <InputStyled type="number" name="phoneInput" id="phoneInput" placeholder='666666666'/>
                <InputStyled type="date" name="dateInput" id="dateInput" placeholder='Start Date' />

                <InputStyled type="text" name="descInput" id="descInput" />
                <SelectStyled type={'secondary'}>
                    <option value="active" selected>Active</option>
                    <option value="inactive" >Inactive</option>
                </SelectStyled>

                <InputStyled type="password" name="passInput" id="passInput" placeholder='password'/>
                <ButtonStyled type='submit'>CREATE USER</ButtonStyled>
          </FormStyled>
  )
}
