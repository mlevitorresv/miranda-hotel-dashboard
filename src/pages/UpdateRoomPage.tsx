import React, { useEffect, useState } from 'react'
import { FormUserStyled } from '../components/form/FormElementStyled'
import { H1Styled } from '../components/common/H1Styled'
import { InputStyled } from '../components/common/InputStyled'
import { SelectStyled } from '../components/table/SelectStyled'
import { TextAreaStyled } from '../components/common/TextAreaStyled'
import { ButtonStyled } from '../components/common/ButtonStyled'
import { useNavigate, useParams } from 'react-router-dom'
import { RoomInterface } from '../interfaces/RoomInterface'
import { AppDispatch, useAppSelector } from '../app/store'
import { getRoomData, getRoomError, getRoomStatus } from '../features/rooms/roomSlice'
import { getRoomFromAPIThunk } from '../features/rooms/roomThunk'
import { useDispatch } from 'react-redux'
import { AmenitiesContainerStyled } from '../components/amenities/AmenitiesContainerStyled'
import { AmenityStyled } from '../components/amenities/AmenityStyled'

export const UpdateRoomPage = () => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id

    const roomData = useAppSelector<RoomInterface[]>(getRoomData);
    const roomError = useAppSelector<string | undefined>(getRoomError);
    const roomStatus = useAppSelector<string>(getRoomStatus);
    const [spinner, setSpinner] = useState<boolean>(true)
    const [room, setRoom] = useState<RoomInterface>({
        _id: '',
        photo: '',
        type: '',
        bed: '',
        amenities: '',
        description: '',
        rate: 0,
        price: 0,
        discount: 0,
        available: false
    });

    useEffect(() => {
        if(roomStatus === "idle"){
            dispatch(getRoomFromAPIThunk(id))
        } else if(roomStatus === "pending"){
            setSpinner(true)
        } else if (roomStatus === "fulfilled"){
            setRoom(roomData[0])
            setSpinner(false)
            console.log('ID: ', id)
        }
    }, [dispatch, roomStatus, id])

    return (
        <FormUserStyled>
            <H1Styled className='title'>New Room</H1Styled>
            <InputStyled type="text" name="photo" id="photoInput" value={room.photo} />
            <InputStyled type="number" name="roomNumber" id="roomNumberInput" value={room.bed} />
            <SelectStyled type={'secondary'} name='roomType' value={room.type}>
                <option value="singleBed" selected>Single Bed</option>
                <option value="doubleBed">Double Bed</option>
                <option value="doubleSuper" >Double Super</option>
                <option value="suite" >Suite</option>
            </SelectStyled>
            <InputStyled type="text" name="desc" id="descInput" value={room.description}/>
            <InputStyled type="number" name="rate" id="rate" value={room.rate}/>
            <InputStyled type="number" name="price" id="priceInput" value={room.price}/>
            <InputStyled type="number" name="discount" id="discountInput" value={room.discount}/>
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
            <ButtonStyled type='submit' center={true}>UPDATE ROOM</ButtonStyled>
            <ButtonStyled center={true} onClick={() => navigate('/rooms')}>Return to user's list</ButtonStyled>

        </FormUserStyled>
    )
}