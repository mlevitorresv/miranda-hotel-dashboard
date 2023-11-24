import React from 'react'
import { FormStyled } from '../components/form/FormStyled'
import { ButtonStyled } from '../components/ButtonStyled'
import { InputStyled } from '../components/InputStyled'
import { SelectStyled } from '../components/table/SelectStyled'

export const CreateUserPage = () => {
  return (
          <FormStyled>
                <ButtonStyled>Upload Photo</ButtonStyled>
                <InputStyled type="text" name="nameInput" id="nameInput" />
                <SelectStyled>
                    <option value="manager" selected>Manager</option>
                    <option value="reception" selected>Reception</option>
                    <option value="service" selected>Room Service</option>
                </SelectStyled>
                <InputStyled type="email" name="emailInput" id="emailInput" placeholder='example@example.com'/>
                <InputStyled type="number" name="phoneInput" id="phoneInput" placeholder='666666666'/>
                <InputStyled type="date" name="dateInput" id="dateInput" placeholder='Start Date' />

                <InputStyled type="text" name="descInput" id="descInput" />
                <SelectStyled>
                    <option value="active" selected>Active</option>
                    <option value="inactive" selected>Inactive</option>
                </SelectStyled>

                <InputStyled type="password" name="passInput" id="passInput" placeholder='password'/>
                <ButtonStyled type='submit'>CREATE USER</ButtonStyled>
          </FormStyled>
  )
}
