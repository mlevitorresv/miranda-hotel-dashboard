import React from 'react'
import { FormStyled } from '../components/form/FormStyled'
import { ButtonStyled } from '../components/ButtonStyled'
import { InputStyled } from '../components/InputStyled'
import { SelectStyled } from '../components/table/SelectStyled'
import { H1Styled } from '../components/H1Styled'
import { AmenitiesContainerStyled } from '../components/AmenitiesContainerStyled'
import { AmenityStyled } from '../components/AmenityStyled'

export const CreateRoomPage = () => {


  return (
          <FormStyled>
                <H1Styled>New Room</H1Styled>
                <ButtonStyled>Upload Photos</ButtonStyled>
                <SelectStyled type={'secondary'}>
                    <option value="singleBed" selected>Single Bed</option>
                    <option value="doubleBed">Double Bed</option>
                    <option value="doubleSuper" >Double Super</option>
                    <option value="suite" >Suite</option>
                </SelectStyled>
                <InputStyled type="number" name="roomNumberInput" id="roomNumberInput" placeholder='Room number'/>
                <InputStyled type="text" name="descInput" id="descInput" placeholder='description'/>
                <SelectStyled type={'secondary'}>
                    <option value="noOffer" selected>No offer</option>
                    <option value="Offer">Offer</option>
                </SelectStyled>
                <InputStyled type="number" name="priceInput" id="priceInput" placeholder='price'/>
                <InputStyled type="number" name="discountInput" id="discountInput" placeholder='Discount (%)'/>
                <InputStyled type="text" name="cancellationInput" id="cancellationInput" placeholder='cancellation politics'/>                
                <H1Styled>Amenities</H1Styled>
                <AmenitiesContainerStyled>
                    <AmenityStyled>
                    <input type="checkbox" name="TVInput" id="TVInput" /> <label htmlFor="TVInput">TV</label>
                    </AmenityStyled>
                    <AmenityStyled>
                    <input type="checkbox" name="serviceInput" id="serviceInput" /> <label htmlFor="serviceInput">Room Service</label>
                    </AmenityStyled>
                    <AmenityStyled>
                    <input type="checkbox" name="seaInput" id="seaInput" /> <label htmlFor="seaInput">sea ​​views</label>
                    </AmenityStyled>
                    <AmenityStyled>
                    <input type="checkbox" name="spaInput" id="spaInput" /> <label htmlFor="spaInput">SPA</label>
                    </AmenityStyled>
                    <AmenityStyled>
                    <input type="checkbox" name="jacuzziInput" id="jacuzziInput" /> <label htmlFor="jacuzziInput">Jacuzzi</label>
                    </AmenityStyled>
                </AmenitiesContainerStyled>
                <ButtonStyled type='submit'>CREATE ROOM</ButtonStyled>
          </FormStyled>
  )
}
