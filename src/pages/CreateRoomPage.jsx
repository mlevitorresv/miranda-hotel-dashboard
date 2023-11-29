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

export const CreateRoomPage = () => {

    const dispatch = useDispatch();

    const [formData ,setFormData] = useState({});


    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prevData) => ({
            ...prevData, [name]: type === 'checkbox' ? {...prevData[name], [value]:checked}  : value,
        }))
        
        console.log('handle change: ' + JSON.stringify(formData));
    }

    const handleAddRoom = (e) => {
        e.preventDefault();
        console.log('antes de dispatch' + JSON.stringify(formData))
        dispatch(addRoomElement(formData));
        console.log('despues de dispatch' + JSON.stringify(formData))
        setFormData({
            roomType: '',
            roomNumber: '',
            desc: '',
            offerType: '',
            price: '',
            discount: '',
            cancellation: '',
            amenities: {
              TV: false,
              service: false,
              sea: false,
              spa: false,
              jacuzzi: false,
            },
          });
    }

  return (
          <FormStyled onSubmit={handleAddRoom}>
                <H1Styled>New Room</H1Styled>
                <ButtonStyled>Upload Photos</ButtonStyled>
                <SelectStyled type={'secondary'} name='roomType' onChange={handleInputChange}>
                    <option value="singleBed" selected>Single Bed</option>
                    <option value="doubleBed">Double Bed</option>
                    <option value="doubleSuper" >Double Super</option>
                    <option value="suite" >Suite</option>
                </SelectStyled>
                <InputStyled type="number" name="roomNumber" id="roomNumberInput" placeholder='Room number' onChange={handleInputChange}/>
                <InputStyled type="text" name="desc" id="descInput" placeholder='description'onChange={handleInputChange}/>
                <SelectStyled type={'secondary'} name='offerType' onChange={handleInputChange}>
                    <option value="noOffer" selected>No offer</option>
                    <option value="Offer">Offer</option>
                </SelectStyled>
                <InputStyled type="number" name="price" id="priceInput" placeholder='price' onChange={handleInputChange}/>
                <InputStyled type="number" name="discount" id="discountInput" placeholder='Discount (%)' onChange={handleInputChange}/>
                <InputStyled type="text" name="cancellations" id="cancellationInput" placeholder='cancellation politics' onChange={handleInputChange}/>                
                <H1Styled>Amenities</H1Styled>
                <AmenitiesContainerStyled>
                    <AmenityStyled>
                    <input type="checkbox" name="TV" id="TVInput" onChange={handleInputChange}/> <label htmlFor="TVInput">TV</label>
                    </AmenityStyled>
                    <AmenityStyled>
                    <input type="checkbox" name="service" id="serviceInput" onChange={handleInputChange}/> <label htmlFor="serviceInput">Room Service</label>
                    </AmenityStyled>
                    <AmenityStyled>
                    <input type="checkbox" name="sea" id="seaInput" onChange={handleInputChange} /> <label htmlFor="seaInput">sea ​​views</label>
                    </AmenityStyled>
                    <AmenityStyled>
                    <input type="checkbox" name="spa" id="spaInput" onChange={handleInputChange}/> <label htmlFor="spaInput">SPA</label>
                    </AmenityStyled>
                    <AmenityStyled>
                    <input type="checkbox" name="jacuzzi" id="jacuzziInput" onChange={handleInputChange}/> <label htmlFor="jacuzziInput">Jacuzzi</label>
                    </AmenityStyled>
                </AmenitiesContainerStyled>
                <ButtonStyled type='submit'>CREATE ROOM</ButtonStyled>
          </FormStyled>
  )
}
