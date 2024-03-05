import React, { useEffect, useState } from 'react'
import { FormUserStyled } from '../components/form/FormElementStyled'
import { H1Styled } from '../components/common/H1Styled'
import { InputStyled } from '../components/common/InputStyled'
import { SelectStyled } from '../components/table/SelectStyled'
import { TextAreaStyled } from '../components/common/TextAreaStyled'
import { ButtonStyled } from '../components/common/ButtonStyled'
import { useNavigate, useParams } from 'react-router-dom'
import { AppDispatch, useAppSelector } from '../app/store'
import { UserInterface } from '../interfaces/UserInterface'
import { getUserData, getUserError, getUserStatus } from '../features/user/userSlice'
import { useDispatch } from 'react-redux'
import { getUserFromAPIThunk } from '../features/user/userThunk'

export const UpdateUserPage = () => {

  const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id

    const userData = useAppSelector<UserInterface[]>(getUserData);
    const userError = useAppSelector<string | undefined>(getUserError);
    const userStatus = useAppSelector<string>(getUserStatus);
    const [spinner, setSpinner] = useState<boolean>(true)
    const [user, setUser] = useState<UserInterface>({
        _id: '',
        photo: '',
        name: '',
        email: '',
        password: '',
        phone: '',
        date: '',
        ocupation: '',
        status: '',
        description: ''
      });

    useEffect(() => {
        if(userStatus === "idle"){
            dispatch(getUserFromAPIThunk(id))
        } else if(userStatus === "pending"){
            setSpinner(true)
        } else if (userStatus === "fulfilled"){
            setUser(userData[0])
            setSpinner(false)
            console.log('ID: ', id)
        }
    }, [dispatch, userStatus, id])

    return (
        <>
            <FormUserStyled>
                <H1Styled className='title'>Edit: {user.name}</H1Styled>
                <InputStyled type="text" name="photo" id="photoInput" value={user.photo} />
                <InputStyled type="text" name="name" id="nameInput" value={user.name} />
                <InputStyled type="email" name="email" id="emailInput" value={user.email} />
                <InputStyled type="password" name="password" id="passInput" value={user.password} />
                <InputStyled type="number" name="phone" id="phoneInput" value={user.phone} />
                <InputStyled type="date" name="date" id="dateInput" value={user.date} />

                <SelectStyled type={'secondary'} name="ocupation" value={user.ocupation}>
                    <option value="manager" selected>Manager</option>
                    <option value="reception" >Reception</option>
                    <option value="service" >Room Service</option>
                </SelectStyled>
                <SelectStyled type={'secondary'} name='active' value={user.status}>
                    <option value="ACTIVE" selected>Active</option>
                    <option value="INACTIVE" >Inactive</option>
                </SelectStyled>

                <TextAreaStyled name="desc" id="descInput" value={user.description} rows={5} />

                <ButtonStyled type='submit' center={true}>UPDATE USER</ButtonStyled>
                <ButtonStyled center={true} onClick={() => navigate('/users')}>Return to user's list</ButtonStyled>
                
            </FormUserStyled>
        </>
    )
}
