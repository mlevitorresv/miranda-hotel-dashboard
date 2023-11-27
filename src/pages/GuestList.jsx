import React from 'react'
import { ListStyled } from '../components/ListStyled'
import { ListElementStyled } from '../components/ListElementStyled'
import { TableGuestStyled } from '../components/table/TableGuestStyled.js'
import { SearchBarStyled } from '../components/table/SearchBarStyled.js'
import { TheadStyled } from '../components/table/TheadStyled.js'
import { GuestImage } from '../components/guest/GuestImage.jsx'
import { TrStyled } from '../components/table/TrStyled.js'
import { ButtonStyled } from '../components/ButtonStyled.js'
import { GuestDiv } from '../components/guest/GuestDiv.jsx'
import { GuestCheck } from '../components/guest/GuestCheck.jsx'
import { HiDotsVertical } from "react-icons/hi";
import { MenuStyled } from '../components/MenuStyled.js'
import { SelectStyled } from '../components/table/SelectStyled.js'
import { useDispatch, useSelector } from 'react-redux';
import { getBookingData, getBookingError, getBookingStatus } from '../features/bookings/bookingsSlice';
import { getBookingListFromAPIThunk } from '../features/bookings/bookingsThunk';



export const GuestList = () => {


  const dispatch = useDispatch();
  const bookingListData = useSelector(getBookingData)
  const bookingListError = useSelector(getBookingError)
  const bookingListStatus = useSelector(getBookingStatus)
  const [spinner, setSpinner] = useState(true);
  const [bookingList, setBookingList] = useState([]);

  useEffect(()=> {
    if(bookingListStatus === "idle"){
      dispatch(getBookingListFromAPIThunk());
    }
    else if(bookingListStatus === "pending"){
      setSpinner(true);
    }
    else if(bookingListStatus === "fulfilled"){
      let components = [];

      bookingListData.forEach(booking => {
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
                    <ButtonStyled color={'red'} bg={'#FFEDEC'}>{booking.status}</ButtonStyled>
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

  }, [dispatch, bookingListData, bookingListStatus])



  return (
    <>
      <MenuStyled>
        <ListStyled>
          <ListElementStyled color='#135846'>All Bookings</ListElementStyled>
          <ListElementStyled>Checking in</ListElementStyled>
          <ListElementStyled>Checking out</ListElementStyled>
          <ListElementStyled>In progress</ListElementStyled>
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
