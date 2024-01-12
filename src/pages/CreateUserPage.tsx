import React, { useState } from 'react'
import { FormStyled } from '../components/form/FormStyled'
import { ButtonStyled } from '../components/common/ButtonStyled'
import { InputStyled } from '../components/common/InputStyled'
import { SelectStyled } from '../components/table/SelectStyled'
import { H1Styled } from '../components/common/H1Styled'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { UserInterface } from '../interfaces/UserInterface'
import { createUserToAPIThunk } from '../features/user/userThunk'
import { AppDispatch } from '../app/store'

export const CreateUserPage = () => {

    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const [formData, setFormData] = useState<UserInterface>({
        photo: '',
        name: '',
        ocupation: '',
        email: '',
        phone: '',
        date: '',
        description: '',
        status: '',
        password: '',
        _id: undefined,
    });

    const handleAddUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormData((prevData) => ({
            photo: e.currentTarget.photo.value.toString() || '',
            name: (e.currentTarget.elements.namedItem('name') as HTMLInputElement).value.toString() || '',
            ocupation: e.currentTarget.ocupation.value.toString() || '',
            email: e.currentTarget.email.value.toString() || '',
            phone: e.currentTarget.phone.value.toString() || '',
            date: e.currentTarget.date.value.toString() || '',
            description: e.currentTarget.desc.value.toString() || '',
            status: e.currentTarget.active.value.toString() || '',
            password: e.currentTarget.password.value.toString() || '',
            _id: undefined,
        }))
    }

    useEffect(() => {
        if (Object.keys(formData).length > 0) {
            console.log('Antes de dispatch: ' + JSON.stringify(formData));
            dispatch(createUserToAPIThunk(formData));
            console.log('Después de dispatch: ' + JSON.stringify(formData));
        }
    }, [formData, dispatch])

    return (
        <FormStyled onSubmit={handleAddUser}>
            <H1Styled>New User</H1Styled>
            <InputStyled type="text" name="photo" id="photoInput" placeholder='url' />
            <InputStyled type="text" name="name" id="nameInput" placeholder='name'/>
            <SelectStyled type={'secondary'} name="ocupation">
                <option value="manager" selected>Manager</option>
                <option value="reception" >Reception</option>
                <option value="service" >Room Service</option>
            </SelectStyled>
            <InputStyled type="email" name="email" id="emailInput" placeholder='example@example.com' />
            <InputStyled type="number" name="phone" id="phoneInput" placeholder='666666666' />
            <InputStyled type="date" name="date" id="dateInput" placeholder='Start Date' />

            <InputStyled type="text" name="desc" id="descInput" placeholder='descriptions'/>
            <SelectStyled type={'secondary'} name='active'>
                <option value="ACTIVE" selected>Active</option>
                <option value="INACTIVE" >Inactive</option>
            </SelectStyled>

            <InputStyled type="password" name="password" id="passInput" placeholder='password' />
            <ButtonStyled type='submit'>CREATE USER</ButtonStyled>
        </FormStyled>
    )
}
