import React, { useEffect, useState } from 'react'
import { FormStyled } from '../components/form/FormStyled'
import { ButtonStyled } from '../components/common/ButtonStyled'
import { InputStyled } from '../components/common/InputStyled'
import { SelectStyled } from '../components/table/SelectStyled'
import { H1Styled } from '../components/common/H1Styled'
import { AmenitiesContainerStyled } from '../components/amenities/AmenitiesContainerStyled'
import { AmenityStyled } from '../components/amenities/AmenityStyled'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoomInterface } from '../interfaces/RoomInterface'
import { createRoomToAPIThunk } from '../features/rooms/roomThunk'

export const CreateRoomPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState<RoomInterface>({
        _id: undefined,
        photo: '',
        type: '',
        bed: '',
        amenities: '',
        description: '',
        rate: 0,
        price: 0,
        discount: 0,
        available: true
    });


    const handleAddRoom = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormData((prevData) => ({
            _id: undefined,
            photo: e.currentTarget.photo.value || '',
            type: e.currentTarget.roomType.value || '',
            bed: e.currentTarget.roomNumber.value || '',
            amenities: `
                TV: ${e.currentTarget.TV.value},
                Service:  ${e.currentTarget.service.value},
                Sea:  ${e.currentTarget.sea.value},
                spa:  ${e.currentTarget.spa.value},
                jacuzzi:  ${e.currentTarget.jacuzzi.value}
            ` || '',
            description: e.currentTarget.desc.value || '',
            rate: e.currentTarget.rate.value || '',
            price: e.currentTarget.price.value || '',
            discount: e.currentTarget.discount.value || '',
            available: true,
        }))
    }

    useEffect(() => {
        if (Object.keys(formData).length > 0) {
            console.log('Antes de dispatch: ' + JSON.stringify(formData));
            dispatch<any>(createRoomToAPIThunk(formData));
            console.log('Después de dispatch: ' + JSON.stringify(formData));
        }
    }, [formData, dispatch])

    return (
        <FormStyled onSubmit={handleAddRoom}>
            <H1Styled>New Room</H1Styled>
            <InputStyled type="text" name="photo" id="photoInput" placeholder='url' />
            <SelectStyled type={'secondary'} name='roomType' >
                <option value="singleBed" selected>Single Bed</option>
                <option value="doubleBed">Double Bed</option>
                <option value="doubleSuper" >Double Super</option>
                <option value="suite" >Suite</option>
            </SelectStyled>
            <InputStyled type="number" name="roomNumber" id="roomNumberInput" placeholder='Room number' />
            <InputStyled type="text" name="desc" id="descInput" placeholder='description' />
            <InputStyled type="number" name="rate" id="rate" placeholder='rate' />
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
