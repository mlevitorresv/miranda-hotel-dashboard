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
import { SelectStyled } from '../components/table/SelectStyled.js'
import { useDispatch, useSelector } from 'react-redux';
import { getBookingBooked, getBookingData, getBookingError, getBookingPending, getBookingRefund, getBookingStatus } from '../features/bookings/bookingsSlice';
import { getBookingListFromAPIThunk } from '../features/bookings/bookingsThunk';



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

  useEffect(()=> {
    if(bookingListStatus === "idle"){
      dispatch(getBookingListFromAPIThunk());
    }
    else if(bookingListStatus === "pending"){
      setSpinner(true);
    }
    else if(bookingListStatus === "fulfilled"){
      let components = [];
      let filteredList;
      if(showBookingsBooked){
        filteredList = bookingListBooked;
      }
      else if(showBookingsPending){
        filteredList = bookingListPending;
      }
      else if(showBookingsRefund){
        filteredList = bookingListRefund;
      }
      else{
        filteredList= bookingListData;
      }


      filteredList.forEach(booking => {
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
                <td>
                <GuestDiv data={<HiDotsVertical />} />
                </td>
            </TrStyled>
        )
      });
      setSpinner(false);
      setBookingList(components)
    }

  }, [dispatch, bookingListData, bookingListStatus, showBookingsBooked, showBookingsPending, showBookingsRefund])



  return (
    <>
      <MenuStyled>
        <ListStyled>
          <ListElementStyled
            onClick={() => {setShowBookingsBooked(false),setShowBookingsRefund(false),setShowBookingsPending(false) }}
            className={!showBookingsBooked && !showBookingsPending && !showBookingsRefund ? 'active' : ''}
          >All Bookings</ListElementStyled>
          <ListElementStyled
            onClick={() => {setShowBookingsBooked(true),setShowBookingsRefund(false),setShowBookingsPending(false) }}
            className={showBookingsBooked ? 'active' : ''}
          >Checking in</ListElementStyled>
          <ListElementStyled
            onClick={() => {setShowBookingsBooked(false),setShowBookingsRefund(true),setShowBookingsPending(false) }}
            className={showBookingsRefund ? 'active' : ''}
          >Checking out</ListElementStyled>
          <ListElementStyled
            onClick={() => {setShowBookingsBooked(false),setShowBookingsRefund(false),setShowBookingsPending(true) }}
            className={showBookingsPending ? 'active' : ''}
          >In progress</ListElementStyled>
        </ListStyled>

        <div>
          <SearchBarStyled />
          <SelectStyled>
            <option value="date" selected>Order Date</option>
            <option value="guest">Guest</option>
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
    </>
  )
}
