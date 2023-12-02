import React, { useEffect, useState } from 'react'
import { ListStyled } from '../components/common/ListStyled'
import { ListElementStyled } from '../components/common/ListElementStyled'
import { TableGuestStyled } from '../components/table/TableGuestStyled.js'
import { SearchBarStyled } from '../components/table/SearchBarStyled.js'
import { TheadStyled } from '../components/table/TheadStyled.js'
import { GuestImage } from '../components/guest/GuestImage.jsx'
import { TrStyled } from '../components/table/TrStyled.js'
import { ButtonStyled } from '../components/common/ButtonStyled.js'
import { GuestDiv } from '../components/guest/GuestDiv.jsx'
import { GuestCheck } from '../components/guest/GuestCheck.jsx'
import { HiDotsVertical } from "react-icons/hi";
import { MenuStyled } from '../components/common/MenuStyled.js'
import { InputStyled } from '../components/common/InputStyled.js'
import { SelectStyled } from '../components/table/SelectStyled.js'
import { useDispatch, useSelector } from 'react-redux';
import { getBookingBooked, getBookingData, getBookingError, getBookingPending, getBookingRefund, getBookingStatus, removeBookingElement } from '../features/bookings/bookingsSlice';
import { getBookingListFromAPIThunk } from '../features/bookings/bookingsThunk';
import { Tfooter } from '../components/table/Tfooter.jsx'
import { DropwdownStyled } from '../components/dropdown/DropwdownStyled.js'



export const GuestList = () => {


  const dispatch = useDispatch();
  const bookingListData = useSelector(getBookingData)
  const bookingListError = useSelector(getBookingError)
  const bookingListStatus = useSelector(getBookingStatus)
  const bookingListRefund = useSelector(getBookingRefund)
  const bookingListPending = useSelector(getBookingPending)
  const bookingListBooked = useSelector(getBookingBooked)
  const [spinner, setSpinner] = useState(true);
  const [bookingList, setBookingList] = useState([]);
  const [showBookingsRefund, setShowBookingsRefund] = useState(false);
  const [showBookingsPending, setShowBookingsPending] = useState(false);
  const [showBookingsBooked, setShowBookingsBooked] = useState(false);
  const [selectedSort, setSelectedSort] = useState('date');
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [activeMenus, setActiveMenus] = useState({})

  useEffect(() => {
    if (bookingListStatus === "idle") {
      dispatch(getBookingListFromAPIThunk());
    }
    else if (bookingListStatus === "pending") {
      setSpinner(true);
    }
    else if (bookingListStatus === "fulfilled") {
      let components = [];
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
        sortedList.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate))
      }
      else if (selectedSort === 'guest') {
        sortedList.sort((a, b) => a.id - b.id)
      }
      else if (selectedSort === 'checkIn') {
        sortedList.sort((a, b) => new Date(b.checkInDate) - new Date(a.checkInDate))
      }
      else if (selectedSort === 'checkOut') {
        sortedList.sort((a, b) => new Date(b.checkOut) - new Date(a.checkOut))
      }

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, sortedList.length);

      const paginatedList = sortedList.slice(startIndex, endIndex);

      paginatedList.forEach(booking => {
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

  }, [dispatch, bookingListData, bookingListStatus, showBookingsBooked, showBookingsPending, showBookingsRefund, selectedSort, activeMenus])


  //PAGINATION
  const handlePageChange = (page) => {
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
