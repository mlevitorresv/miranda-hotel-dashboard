import React, { useEffect, useState } from 'react'
import { ListStyled } from '../components/common/ListStyled'
import { ListElementStyled } from '../components/common/ListElementStyled'
import { TableGuestStyled } from '../components/table/TableGuestStyled'
import { SearchBarStyled } from '../components/table/SearchBarStyled'
import { TheadStyled } from '../components/table/TheadStyled'
import { GuestImage } from '../components/guest/GuestImage'
import { TrStyled } from '../components/table/TrStyled'
import { ButtonStyled } from '../components/common/ButtonStyled'
import { GuestDiv } from '../components/guest/GuestDiv'
import { GuestCheck } from '../components/guest/GuestCheck'
import { HiDotsVertical } from "react-icons/hi";
import { MenuStyled } from '../components/common/MenuStyled'
import { InputStyled } from '../components/common/InputStyled'
import { SelectStyled } from '../components/table/SelectStyled'
import { useDispatch, useSelector } from 'react-redux';
import { getBookingBooked, getBookingData, getBookingError, getBookingPending, getBookingRefund, getBookingStatus, removeBookingElement } from '../features/bookings/bookingsSlice';
import { getBookingListFromAPIThunk } from '../features/bookings/bookingsThunk';
import { Tfooter } from '../components/table/Tfooter'
import { DropwdownStyled } from '../components/dropdown/DropwdownStyled'
import { Dispatch } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '../app/store'
import { BookingInterface } from '../interfaces/BookingsInterface'
import { NavigateFunction, useNavigate } from 'react-router-dom'



export const GuestList = () => {


  const dispatch: AppDispatch= useDispatch();
  const bookingListData = useSelector<RootState>(getBookingData)
  const bookingListError = useSelector<RootState>(getBookingError)
  const bookingListStatus = useSelector<RootState>(getBookingStatus)
  const bookingListRefund = useSelector<RootState>(getBookingRefund)
  const bookingListPending = useSelector<RootState>(getBookingPending)
  const bookingListBooked = useSelector<RootState>(getBookingBooked)
  const [spinner, setSpinner] = useState<boolean>(true);
  const [bookingList, setBookingList] = useState<React.JSX.Element[]>([]);
  const [showBookingsRefund, setShowBookingsRefund] = useState<boolean>(false);
  const [showBookingsPending, setShowBookingsPending] = useState<boolean>(false);
  const [showBookingsBooked, setShowBookingsBooked] = useState<boolean>(false);
  const [selectedSort, setSelectedSort] = useState<string>('date');
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [activeMenus, setActiveMenus] = useState<Record<number, boolean>>({})
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    if (bookingListStatus === "idle") {
      dispatch(getBookingListFromAPIThunk());
    }
    else if (bookingListStatus === "pending") {
      setSpinner(true);
    }
    else if (bookingListStatus === "fulfilled") {
      let components: React.JSX.Element[] = [];
      let filteredList;
      if (showBookingsBooked) {
        filteredList = bookingListBooked;
      }
      else if (showBookingsPending) {
        filteredList = bookingListPending;
      }
      else if (showBookingsRefund) {
        filteredList = bookingListRefund;
      }
      else {
        filteredList = bookingListData;
      }

      let sortedList = filteredList.slice();
      if (selectedSort === 'date') {
        sortedList.sort((a: BookingInterface, b: BookingInterface) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime())
      }
      else if (selectedSort === 'guest') {
        sortedList.sort((a: BookingInterface, b: BookingInterface) => a.id - b.id)
      }
      else if (selectedSort === 'checkIn') {
        sortedList.sort((a: BookingInterface, b: BookingInterface) => new Date(b.checkInDate).getTime() - new Date(a.checkInDate).getTime())
      }
      else if (selectedSort === 'checkOut') {
        sortedList.sort((a: BookingInterface, b: BookingInterface) => new Date(b.checkOut).getTime() - new Date(a.checkOut).getTime())
      }

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, sortedList.length);

      const paginatedList = sortedList.slice(startIndex, endIndex);

      paginatedList.forEach((booking: BookingInterface) => {
        components.push(
          <TrStyled>
            <td>
              <GuestImage img={booking.photo} name={booking.name} id={booking.id} />
            </td>
            <td>
              <GuestDiv data={booking.orderDate} />
            </td>
            <td>
              <GuestCheck date={booking.checkInDate} hour={booking.checkInTime} />
            </td>
            <td>
              <GuestCheck date={booking.checkOut} hour={booking.checkOutTime} />
            </td>
            <td>
              <ButtonStyled>View Notes</ButtonStyled>
            </td>
            <td>
              <p>{booking.room}</p>
            </td>
            <td>
              <div>
                {booking.status === 'refund' ? (
                  <ButtonStyled color={'red'} bg={'#FFEDEC'}>{booking.status}</ButtonStyled>
                ) : booking.status === 'pending' ? (
                  <ButtonStyled color={'#6D6D6D'} bg={'#E2E2E2'}>{booking.status}</ButtonStyled>
                ) : (
                  <ButtonStyled color={'#5AD07A'} bg={'#E8FFEE'}>{booking.status}</ButtonStyled>
                )}

              </div>
            </td>
            <td onClick={() => {
              setActiveMenus((prevMenus) => ({
                ...prevMenus,
                [booking.id]: !prevMenus[booking.id],
              }));
            }}>
              <GuestDiv
                data={<HiDotsVertical />}
              />
              {activeMenus[booking.id] && (
                <DropwdownStyled>
                  <p>edit</p>
                  <p  onClick={() => dispatch(removeBookingElement({id: booking.id}))}>delete</p>
                </DropwdownStyled>
              )}
            </td>
          </TrStyled>
        )
      });
      setSpinner(false);
      setBookingList(components)
    }

  }, [dispatch, bookingListData, bookingListStatus, showBookingsBooked, showBookingsPending, showBookingsRefund, selectedSort, activeMenus, currentPage])


  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <>
      <MenuStyled>
        <ListStyled>
          <ListElementStyled
            onClick={() => { setShowBookingsBooked(false), setShowBookingsRefund(false), setShowBookingsPending(false) }}
            className={!showBookingsBooked && !showBookingsPending && !showBookingsRefund ? 'active' : ''}
          >All Bookings</ListElementStyled>
          <ListElementStyled
            onClick={() => { setShowBookingsBooked(true), setShowBookingsRefund(false), setShowBookingsPending(false) }}
            className={showBookingsBooked ? 'active' : ''}
          >Checking in</ListElementStyled>
          <ListElementStyled
            onClick={() => { setShowBookingsBooked(false), setShowBookingsRefund(true), setShowBookingsPending(false) }}
            className={showBookingsRefund ? 'active' : ''}
          >Checking out</ListElementStyled>
          <ListElementStyled
            onClick={() => { setShowBookingsBooked(false), setShowBookingsRefund(false), setShowBookingsPending(true) }}
            className={showBookingsPending ? 'active' : ''}
          >In progress</ListElementStyled>
        </ListStyled>

        <div>
          <InputStyled
            type='secondary'
            placeholder='Find by user'
          ></InputStyled>
          <ButtonStyled color='white' bg='#135846' onClick={() => navigate('/bookings/create')}>Create booking</ButtonStyled>
          <SelectStyled onChange={(e) => setSelectedSort(e.target.value)}>
            <option value="date" selected>Order Date</option>
            <option value="guest">Guest(ID)</option>
            <option value="checkIn">Check in</option>
            <option value="checkOut">Check out</option>
          </SelectStyled>
        </div>
      </MenuStyled>

      {spinner ? <p>Loading...</p> :
        <TableGuestStyled>
          <TheadStyled>
            <tr>
              <th>Guest</th>
              <th>Order Date</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Special Request</th>
              <th>Room Type</th>
              <th>Status</th>
            </tr>
          </TheadStyled>

          <tbody>
            {bookingList}
          </tbody>
        </TableGuestStyled>
      }
      <Tfooter
        currentPage={currentPage}
        onPageChanged={handlePageChange}
        items={bookingListData.length}
        itemsPerPage={itemsPerPage}

      />
    </>
  )
}
