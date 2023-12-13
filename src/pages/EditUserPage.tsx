import React from 'react'
import { FormStyled } from '../components/form/FormStyled'
import { ButtonStyled } from '../components/common/ButtonStyled'
import { InputStyled } from '../components/common/InputStyled'
import { SelectStyled } from '../components/table/SelectStyled'
import { H1Styled } from '../components/common/H1Styled'
import { UserInterface } from '../interfaces/UserInterface'

export const EditUserPage = (props: UserInterface) => {


  return (
          <FormStyled>
                <H1Styled>Edit User</H1Styled>
                <ButtonStyled>Change Photo</ButtonStyled>
                <InputStyled type="text" name="nameInput" id="nameInput" placeholder={props.name}/>
                <SelectStyled type={'secondary'}>
                    <option value="manager" selected>Manager</option>
                    <option value="reception" >Reception</option>
                    <option value="service" >Room Service</option>
                </SelectStyled>
                <InputStyled type="email" name="emailInput" id="emailInput" placeholder={props.email}/>
                <InputStyled type="number" name="phoneInput" id="phoneInput" placeholder={props.phone}/>
                <InputStyled type="date" name="dateInput" id="dateInput" placeholder={props.date} />
                <InputStyled type="text" name="descInput" id="descInput" placeholder={props.description} />
                <SelectStyled type={'secondary'}>
                    <option value="active" selected>Active</option>
                    <option value="inactive" >Inactive</option>
                </SelectStyled>

                <InputStyled type="password" name="passInput" id="passInput" placeholder='password'/>
                <ButtonStyled type='submit'>EDIT USER</ButtonStyled>
          </FormStyled>
  )
}
