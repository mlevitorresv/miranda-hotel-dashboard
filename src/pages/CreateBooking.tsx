import React, { useState } from 'react'
import { FormStyled } from '../components/form/FormStyled'
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
import { addBookingElement } from '../features/bookings/bookingsSlice'




export const CreateBooking = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const availableRooms = useAppSelector<RoomInterface[]>(getAvailableRooms);
  const [formData, setFormData] = useState<BookingInterface | {}>({});


  const handleAddBooking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('antes de dispatch' + JSON.stringify(formData))
    setFormData((prevData) => ({
      photo: e.currentTarget.photo.value,
      name: e.currentTarget.nameBooking.value,
      orderDate: new Date(),
      orderTime: new Date().getTime(),
      checkInDate: e.currentTarget.checkIn.value,
      checkInTime: '12AM',
      checkOut: e.currentTarget.checkOut.value,
      checkOutTime: '12AM',
      notes: e.currentTarget.notes.value,
      room: e.currentTarget.room.value,
      status: 'booked'
    }))
    dispatch(addBookingElement(formData));
    console.log('despues de dispatch' + JSON.stringify(formData))

    navigate('/bookings')
    console.log(availableRooms)
  }

  return (
    <FormStyled onSubmit={handleAddBooking}>
      <H1Styled>New Booking</H1Styled>
      <InputStyled type="text" name="photo" id="photoInput" placeholder='url' />
      <InputStyled type="text" name="nameBooking" id="nameInput" placeholder='Name' />
      <InputStyled type="date" name="checkIn" id="checkInDate" placeholder='checkIn' />
      <InputStyled type="date" name="checkOut" id="checkOutDate" placeholder='checkOut' />
      <InputStyled type="text" name="notes" id="notesInput" placeholder='notes' />
      <SelectStyled>
        {availableRooms && availableRooms.map((room: RoomInterface) => (
          <option key={room.id} value={room.id}>{room.id}</option>
        ))}
      </SelectStyled>
      <ButtonStyled type='submit'>CREATE BOOKING</ButtonStyled>
    </FormStyled>
  )
}
