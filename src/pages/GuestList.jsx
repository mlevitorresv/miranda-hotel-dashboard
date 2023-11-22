import React from 'react'
import { ListStyled } from '../components/ListStyled'
import { ListElementStyled } from '../components/ListElementStyled'
import { TableGuestStyled } from '../components/TableGuestStyled'
import { SearchBarStyled } from '../components/SearchBarStyled'
import { TheadStyled } from '../components/TheadStyled'
import { GuestImage } from '../components/guest/GuestImage.jsx'
import { TrStyled } from '../components/TrStyled.js'
import { ButtonStyled } from '../components/ButtonStyled.js'
import { GuestDiv } from '../components/guest/GuestDiv.jsx'
import { GuestCheck } from '../components/guest/GuestCheck.jsx'
import { HiDotsVertical } from "react-icons/hi";
import { MenuStyled } from '../components/MenuStyled.js'
import { SelectStyled } from '../components/SelectStyled.js'



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
