import React, { useEffect, useState } from 'react'
import { FormLoginStyled } from '../components/form/FormLoginStyled'
import { ButtonStyled } from '../components/common/ButtonStyled'
import { InputStyled } from '../components/common/InputStyled'
import { SelectStyled } from '../components/table/SelectStyled'
import { H1Styled } from '../components/common/H1Styled'
import { useDispatch } from 'react-redux'
import { getAvailableRooms } from '../features/rooms/roomSlice'
import { useNavigate } from 'react-router-dom'
import { BookingInterface } from '../interfaces/BookingsInterface'
import { RoomInterface } from '../interfaces/RoomInterface'
import { useAppSelector } from '../app/store'
import { createBookingToAPIThunk } from '../features/bookings/bookingsThunk'
import { FormUserStyled } from '../components/form/FormElementStyled'
// import { addBookingElement } from '../features/bookings/bookingsSlice'




export const CreateBooking = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const availableRooms = useAppSelector<RoomInterface[]>(getAvailableRooms);
  const [formData, setFormData] = useState<BookingInterface>({
    _id: undefined,
    photo: '',
    name: '',
    orderDate: '',
    orderTime: '',
    checkInDate: '',
    checkInTime: '',
    checkOut: '',
    checkOutTime: '',
    notes: '',
    room: '',
    status: ''
  });


  const handleAddBooking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData((prevData) => ({
      _id: undefined,
      photo: e.currentTarget.photo.value,
      name: e.currentTarget.nameBooking.value,
      orderDate: new Date().toString(),
      orderTime: new Date().getTime().toString(),
      checkInDate: e.currentTarget.checkIn.value,
      checkInTime: '12AM',
      checkOut: e.currentTarget.checkOut.value,
      checkOutTime: '12AM',
      notes: e.currentTarget.notes.value,
      room: e.currentTarget.room.value,
      status: 'booked'
    }))
    dispatch<any>(createBookingToAPIThunk(formData));
  }

  return (
    <FormUserStyled onSubmit={handleAddBooking}>
      <H1Styled className='title'>New Booking</H1Styled>
      <InputStyled type="text" name="photo" id="photoInput" placeholder='Photo URL' />
      <InputStyled type="text" name="nameBooking" id="nameInput" placeholder='Guest name' />
      <InputStyled type="date" name="checkIn" id="checkInDate" placeholder='checkIn date' />
      <InputStyled type="date" name="checkOut" id="checkOutDate" placeholder='checkOut date' />
      <InputStyled type="text" name="notes" id="notesInput" placeholder='notes' />
      <SelectStyled type='secondary'>
        {availableRooms && availableRooms.map((room: RoomInterface) => (
          <option key={room._id} value={room._id}>{room._id}</option>
        ))}
      </SelectStyled>
      <ButtonStyled type='submit' center={true}>CREATE BOOKING</ButtonStyled>
    </FormUserStyled>
  )
}
