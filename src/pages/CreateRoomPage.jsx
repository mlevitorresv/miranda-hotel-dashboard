import React, { useState } from 'react'
import { FormStyled } from '../components/form/FormStyled'
import { ButtonStyled } from '../components/common/ButtonStyled'
import { InputStyled } from '../components/common/InputStyled'
import { SelectStyled } from '../components/table/SelectStyled'
import { H1Styled } from '../components/common/H1Styled'
import { AmenitiesContainerStyled } from '../components/amenities/AmenitiesContainerStyled'
import { AmenityStyled } from '../components/amenities/AmenityStyled'
import { useDispatch } from 'react-redux'
import { addRoomElement } from '../features/rooms/roomSlice'
import { useNavigate } from 'react-router-dom'

export const CreateRoomPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({});


    const handleAddRoom = (e) => {
        e.preventDefault();
        console.log('antes de dispatch' + JSON.stringify(formData))
        setFormData((prevData) => ({
            roomType: e.target.roomType.value,
            number: e.target.roomNumber.value,
            description: e.target.desc.value,
            offer: e.target.offerType.value,
            price: e.target.price.value,
            discount: e.target.discount.value,
            cancellation: e.target.cancellation.value,
            tv: e.target.TV.value,
            service: e.target.service.value,
            sea: e.target.sea.value,
            spa: e.target.spa.value,
            jacuzzi: e.target.jacuzzi.value
        }))
        dispatch(addRoomElement(formData));
        console.log('despues de dispatch' + JSON.stringify(formData))

        navigate('/rooms')
    }

    return (
        <FormStyled onSubmit={handleAddRoom}>
            <H1Styled>New Room</H1Styled>
            <ButtonStyled>Upload Photos</ButtonStyled>
            <SelectStyled type={'secondary'} name='roomType' >
                <option value="singleBed" selected>Single Bed</option>
                <option value="doubleBed">Double Bed</option>
                <option value="doubleSuper" >Double Super</option>
                <option value="suite" >Suite</option>
            </SelectStyled>
            <InputStyled type="number" name="roomNumber" id="roomNumberInput" placeholder='Room number' />
            <InputStyled type="text" name="desc" id="descInput" placeholder='description' />
            <SelectStyled type={'secondary'} name='offerType' >
                <option value="noOffer" selected>No offer</option>
                <option value="Offer">Offer</option>
            </SelectStyled>
            <InputStyled type="number" name="price" id="priceInput" placeholder='price' />
            <InputStyled type="number" name="discount" id="discountInput" placeholder='Discount (%)' />
            <InputStyled type="text" name="cancellation" id="cancellationInput" placeholder='cancellation politics' />
            <H1Styled>Amenities</H1Styled>
            <AmenitiesContainerStyled>
                <AmenityStyled>
                    <input type="checkbox" name="TV" id="TVInput" /> <label htmlFor="TVInput">TV</label>
                </AmenityStyled>
                <AmenityStyled>
                    <input type="checkbox" name="service" id="serviceInput" /> <label htmlFor="serviceInput">Room Service</label>
                </AmenityStyled>
                <AmenityStyled>
                    <input type="checkbox" name="sea" id="seaInput" /> <label htmlFor="seaInput">sea ​​views</label>
                </AmenityStyled>
                <AmenityStyled>
                    <input type="checkbox" name="spa" id="spaInput" /> <label htmlFor="spaInput">SPA</label>
                </AmenityStyled>
                <AmenityStyled>
                    <input type="checkbox" name="jacuzzi" id="jacuzziInput" /> <label htmlFor="jacuzziInput">Jacuzzi</label>
                </AmenityStyled>
            </AmenitiesContainerStyled>
            <ButtonStyled type='submit'>CREATE ROOM</ButtonStyled>
        </FormStyled>
    )
}
