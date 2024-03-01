import React, { useState } from 'react'
import { FormLoginStyled } from '../components/form/FormLoginStyled'
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
import { FormUserStyled } from '../components/form/FormElementStyled'
import { PageFormStyled } from '../components/form/PageFormStyled'
import { TextAreaStyled } from '../components/common/TextAreaStyled'
import { LabelStyled } from '../components/common/LabelStyled'

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
            dispatch(createUserToAPIThunk(formData));
    }, [formData, dispatch])

    return (
        <>
            <FormUserStyled onSubmit={handleAddUser}>
                <H1Styled className='title'>New User</H1Styled>
                <InputStyled type="text" name="photo" id="photoInput" placeholder='Photo URL' />
                <InputStyled type="text" name="name" id="nameInput" placeholder='Full Name' />
                <InputStyled type="email" name="email" id="emailInput" placeholder='Email: example@example.com' />
                <InputStyled type="password" name="password" id="passInput" placeholder='password' />
                <InputStyled type="number" name="phone" id="phoneInput" placeholder='Phone Number' />
                <InputStyled type="date" name="date" id="dateInput" placeholder='Start Date' />

                <SelectStyled type={'secondary'} name="ocupation">
                    <option value="manager" selected>Manager</option>
                    <option value="reception" >Reception</option>
                    <option value="service" >Room Service</option>
                </SelectStyled>
                <SelectStyled type={'secondary'} name='active'>
                    <option value="ACTIVE" selected>Active</option>
                    <option value="INACTIVE" >Inactive</option>
                </SelectStyled>

                <TextAreaStyled name="desc" id="descInput" placeholder='description' rows={5}/>

                <ButtonStyled type='submit' center={true}>CREATE USER</ButtonStyled>
            </FormUserStyled>
        </>
    )
}
