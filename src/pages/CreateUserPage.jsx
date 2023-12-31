import React, { useState } from 'react'
import { FormStyled } from '../components/form/FormStyled'
import { ButtonStyled } from '../components/common/ButtonStyled'
import { InputStyled } from '../components/common/InputStyled'
import { SelectStyled } from '../components/table/SelectStyled'
import { H1Styled } from '../components/common/H1Styled'
import { useDispatch } from 'react-redux'
import { addUserElement } from '../features/user/userSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const CreateUserPage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({});

    const handleAddUser = (e) => {
        e.preventDefault();
        console.log('antes de dispatch' + JSON.stringify(formData))
        setFormData((prevData) => ({
            name: e.target.name.value,
            ocupation: e.target.ocupation.value,
            description: e.target.desc.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            date: e.target.date.value,
            desc: e.target.desc.value,
            active: e.target.active.value,
            password: e.target.password.value,
        }))
        dispatch(addUserElement(formData));
        console.log('despues de dispatch' + JSON.stringify(formData))

        navigate('/users')
    }

    return (
        <FormStyled onSubmit={handleAddUser}>
            <H1Styled>New User</H1Styled>
            <ButtonStyled>Upload Photo</ButtonStyled>
            <InputStyled type="text" name="name" id="nameInput" />
            <SelectStyled type={'secondary'} name="ocupation">
                <option value="manager" selected>Manager</option>
                <option value="reception" >Reception</option>
                <option value="service" >Room Service</option>
            </SelectStyled>
            <InputStyled type="email" name="email" id="emailInput" placeholder='example@example.com' />
            <InputStyled type="number" name="phone" id="phoneInput" placeholder='666666666' />
            <InputStyled type="date" name="date" id="dateInput" placeholder='Start Date' />

            <InputStyled type="text" name="desc" id="descInput" />
            <SelectStyled type={'secondary'} name='active'>
                <option value="active" selected>Active</option>
                <option value="inactive" >Inactive</option>
            </SelectStyled>

            <InputStyled type="password" name="password" id="passInput" placeholder='password' />
            <ButtonStyled type='submit'>CREATE USER</ButtonStyled>
        </FormStyled>
    )
}
