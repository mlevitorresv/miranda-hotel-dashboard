import React, { useEffect, useState } from 'react'
import { FormUserStyled } from '../components/form/FormElementStyled'
import { H1Styled } from '../components/common/H1Styled'
import { InputStyled } from '../components/common/InputStyled'
import { SelectStyled } from '../components/table/SelectStyled'
import { TextAreaStyled } from '../components/common/TextAreaStyled'
import { ButtonStyled } from '../components/common/ButtonStyled'
import { useNavigate, useParams } from 'react-router-dom'
import { RoomInterface } from '../interfaces/RoomInterface'
import { AppDispatch, RootState, useAppSelector } from '../app/store'
import { getRoomById, getRoomData, getRoomError, getRoomStatus } from '../features/rooms/roomSlice'
import { getRoomFromAPIThunk } from '../features/rooms/roomThunk'
import { useDispatch } from 'react-redux'
import { AmenitiesContainerStyled } from '../components/amenities/AmenitiesContainerStyled'
import { AmenityStyled } from '../components/amenities/AmenityStyled'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

export const UpdateRoomPage = () => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id

    let roomData: RoomInterface | undefined;
    const state = useSelector((state: RootState) => state);
    if(id) {
        roomData = getRoomById(state, id);
    }
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
        if (roomStatus === "idle") {
            dispatch(getRoomFromAPIThunk(id))
        } else if (roomStatus === "pending") {
            setSpinner(true)
        } else if (roomStatus === "fulfilled" && roomData) {
            setRoom(roomData)
            setSpinner(false)
        }
    }, [dispatch, roomStatus, id])

    const handleUpdateRoom = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast.info('No dejo actualizar los datos por la seguridad de la app :\\', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
        navigate('/rooms')
    }

    return (
        <FormUserStyled onSubmit={handleUpdateRoom}>
            <H1Styled className='title'>New Room</H1Styled>
            <InputStyled type="text" name="photo" id="photoInput" value={room.photo} />
            <InputStyled type="number" name="roomNumber" id="roomNumberInput" value={room.bed} />
            <SelectStyled type={'secondary'} name='roomType' value={room.type}>
                <option value="singleBed" selected>Single Bed</option>
                <option value="doubleBed">Double Bed</option>
                <option value="doubleSuper" >Double Super</option>
                <option value="suite" >Suite</option>
            </SelectStyled>
            <InputStyled type="text" name="desc" id="descInput" value={room.description} />
            <InputStyled type="number" name="rate" id="rate" value={room.rate} />
            <InputStyled type="number" name="price" id="priceInput" value={room.price} />
            <InputStyled type="number" name="discount" id="discountInput" value={room.discount} />
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