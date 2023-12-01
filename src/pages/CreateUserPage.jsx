import React, { useState } from 'react'
import { FormStyled } from '../components/form/FormStyled'
import { ButtonStyled } from '../components/common/ButtonStyled'
import { InputStyled } from '../components/common/InputStyled'
import { SelectStyled } from '../components/table/SelectStyled'
import { H1Styled } from '../components/common/H1Styled'
import { useDispatch } from 'react-redux'
import { addUserElement } from '../features/user/userSlice'
import { useNavigate } from 'react-router-dom'

export const CreateUserPage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({});

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prevData) => ({
            ...prevData, [name]: type === 'checkbox' ? { ...prevData[name], [value]: checked } : value,
        }))
    }

    const handleAddUser = (e) => {
        e.preventDefault();
        dispatch(addUserElement(formData));
        navigate('/users')
    }


    return (
        <FormStyled onSubmit={handleAddUser}>
            <H1Styled>New User</H1Styled>
            <ButtonStyled>Upload Photo</ButtonStyled>
            <InputStyled type="text" name="name" id="nameInput" onChange={handleInputChange} />
            <SelectStyled type={'secondary'} name="ocupation" onChange={handleInputChange}>
                <option value="manager" selected>Manager</option>
                <option value="reception" >Reception</option>
                <option value="service" >Room Service</option>
            </SelectStyled>
            <InputStyled type="email" name="email" id="emailInput" placeholder='example@example.com' onChange={handleInputChange} />
            <InputStyled type="number" name="phone" id="phoneInput" placeholder='666666666' onChange={handleInputChange} />
            <InputStyled type="date" name="date" id="dateInput" placeholder='Start Date' onChange={handleInputChange} />

            <InputStyled type="text" name="desc" id="descInput" onChange={handleInputChange} />
            <SelectStyled type={'secondary'} name='active' onChange={handleInputChange}>
                <option value="active" selected>Active</option>
                <option value="inactive" >Inactive</option>
            </SelectStyled>

            <InputStyled type="password" name="password" id="passInput" placeholder='password' onChange={handleInputChange} />
            <ButtonStyled type='submit'>CREATE USER</ButtonStyled>
        </FormStyled>
    )
}
