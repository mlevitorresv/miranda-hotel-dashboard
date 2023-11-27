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
import bookings from '../data/bookings.json'



export const GuestList = () => {
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
          {bookings.map(guest =>(
            <TrStyled>
                <td>
                  <GuestImage img={guest.photo} name={guest.name} id={guest.id} />
                </td>
                <td>
                  <GuestDiv data={guest.orderDate} />
                </td>
                <td>
                  <GuestCheck date={guest.checkInDate} hour={guest.checkInTime} />
                </td>
                <td>
                  <GuestCheck date={guest.checkOut} hour={guest.checkOutTime} />
                </td>
                <td>
                  <ButtonStyled>View Notes</ButtonStyled>
                </td>
                <td>
                  <p>{guest.room}</p>
                </td>
                <td>
                  <div>
                    <ButtonStyled color={'red'} bg={'#FFEDEC'}>{guest.status}</ButtonStyled>
                  </div>
                </td>
                <td>
                <GuestDiv data={<HiDotsVertical />} />
                </td>
            </TrStyled>

          ))}
          
          <TrStyled>
              <td>
              <GuestImage img={'../../public/room.jpg'} name={'Cahyadi purnomo'} id={'#000123456'} />
              </td>
              <td>
                <GuestDiv data={'Oct 30th 2020 09:21 AM'} />
              </td>
              <td>
                <GuestCheck date={'Nov 2th, 2020'} hour={'9.46PM'} />
              </td>
              <td>
                <GuestCheck date={'Nov 4th, 2020'} hour={'6.12PM'} />
              </td>
              <td>
                <ButtonStyled>View Notes</ButtonStyled>
              </td>
              <td>
                <p>Deluxe A - 03</p>
              </td>
              <td>
                <div>
                  <ButtonStyled color={'red'} bg={'#FFEDEC'}>Refund</ButtonStyled>
                </div>
              </td>
              <td>
              <GuestDiv data={<HiDotsVertical />} />
              </td>
          </TrStyled>
          <TrStyled>
              <td>
                <GuestImage img={'../../public/room.jpg'} name={'Cahyadi purnomo'} id={'#000123456'} />
              </td>
              <td>
                <GuestDiv data={'Oct 30th 2020 09:21 AM'} />
              </td>
              <td>
                <GuestCheck date={'Nov 2th, 2020'} hour={'9.46PM'} />
              </td>
              <td>
                <GuestCheck date={'Nov 4th, 2020'} hour={'6.12PM'} />
              </td>
              <td>
                <ButtonStyled>View Notes</ButtonStyled>
              </td>
              <td>
                <p>Deluxe A - 03</p>
              </td>
              <td>
                <div>
                  <ButtonStyled color={'red'} bg={'#FFEDEC'}>Refund</ButtonStyled>
                </div>
              </td>
              <td>
              <GuestDiv data={<HiDotsVertical />} />
              </td>
          </TrStyled>
          <TrStyled>
              <td>
                <GuestImage img={'../../public/room.jpg'} name={'Cahyadi purnomo'} id={'#000123456'} />
              </td>
              <td>
                <GuestDiv data={'Oct 30th 2020 09:21 AM'} />
              </td>
              <td>
                <GuestCheck date={'Nov 2th, 2020'} hour={'9.46PM'} />
              </td>
              <td>
                <GuestCheck date={'Nov 4th, 2020'} hour={'6.12PM'} />
              </td>
              <td>
                <ButtonStyled>View Notes</ButtonStyled>
              </td>
              <td>
                <p>Deluxe A - 03</p>
              </td>
              <td>
                <div>
                  <ButtonStyled color={'red'} bg={'#FFEDEC'}>Refund</ButtonStyled>
                </div>
              </td>
              <td>
              <GuestDiv data={<HiDotsVertical />} />
              </td>
          </TrStyled>
        </tbody>
      </TableGuestStyled>
    </>
  )
}
