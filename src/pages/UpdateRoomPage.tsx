import React from 'react'
import { FormUserStyled } from '../components/form/FormElementStyled'
import { H1Styled } from '../components/common/H1Styled'
import { InputStyled } from '../components/common/InputStyled'
import { SelectStyled } from '../components/table/SelectStyled'
import { TextAreaStyled } from '../components/common/TextAreaStyled'
import { ButtonStyled } from '../components/common/ButtonStyled'
import { useNavigate, useParams } from 'react-router-dom'

export const UpdateRoomPage = () => {
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id

    return (
        <FormUserStyled>
            <H1Styled className='title'>Edit: </H1Styled>
            <InputStyled type="text" name="photo" id="photoInput"  />
            <InputStyled type="text" name="name" id="nameInput"  />
            <InputStyled type="email" name="email" id="emailInput"  />
            <InputStyled type="password" name="password" id="passInput"  />
            <InputStyled type="number" name="phone" id="phoneInput" />
            <InputStyled type="date" name="date" id="dateInput"  />

            <SelectStyled type={'secondary'} name="ocupation" >
                <option value="manager" selected>Manager</option>
                <option value="reception" >Reception</option>
                <option value="service" >Room Service</option>
            </SelectStyled>
            <SelectStyled type={'secondary'} name='active' >
                <option value="ACTIVE" selected>Active</option>
                <option value="INACTIVE" >Inactive</option>
            </SelectStyled>

            <TextAreaStyled name="desc" id="descInput" rows={5} />

            <ButtonStyled type='submit' center={true}>UPDATE ROOM</ButtonStyled>
            <ButtonStyled center={true} onClick={() => navigate('/rooms')}>Return to room's list</ButtonStyled>

        </FormUserStyled>
    )
}