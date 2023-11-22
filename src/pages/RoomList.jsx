import React from 'react'
import { ListStyled } from '../components/ListStyled'
import { ListElementStyled } from '../components/ListElementStyled'
import { SearchBarStyled } from '../components/SearchBarStyled'
import { TheadStyled } from '../components/TheadStyled'
import { TrStyled } from '../components/TrStyled.js'
import { GuestDiv } from '../components/guest/GuestDiv.jsx'
import { MenuStyled } from '../components/MenuStyled.js'
import { HiDotsVertical } from "react-icons/hi";
import { TableRoomStyled } from '../components/TableRoomStyled.js'
import { GuestImageRoom } from '../components/GuestImageRoom.jsx'
import { RoomRate } from '../components/RoomRate.jsx'
import { RoomStatus } from '../components/RoomStatus.jsx'
import { SelectStyled } from '../components/SelectStyled.js'

export const RoomList = () => {
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
            <option value="number" selected>Room Number</option>
            <option value="Available">Available</option>
            <option value="Booked">Booked</option>
            <option value="Price">Price</option>
          </SelectStyled>
        </div>
      </MenuStyled>


      <TableRoomStyled>
        <TheadStyled>
          <tr>
              <th>Room Name</th>
              <th>Bed Type</th>
              <th>Facilities</th>
              <th>Rate</th>
              <th>Offer Price</th>
              <th>Status</th>
          </tr>
        </TheadStyled>

        <tbody>
          <TrStyled align={'bottom'}>
              <td>
              <GuestImageRoom img={'../../public/room.jpg'} id={'#000123456'} data={'Deluxe A-91234'}/>
              </td>
              <td>
                <GuestDiv data={'Double Bed'} />
              </td>
              <td>
                <GuestDiv data={'AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi'} />
              </td>
              <td>
                <RoomRate price={'145'} />
              </td>
              <td>
                <RoomRate price={'130'} />
              </td>
              <td>
                <RoomStatus status='Available'/>               
              </td>
              <td>
                <GuestDiv data={<HiDotsVertical />} />
              </td>
          </TrStyled>
          <TrStyled align={'bottom'}>
              <td>
              <GuestImageRoom img={'../../public/room.jpg'} id={'#000123456'} data={'Deluxe A-91234'}/>
              </td>
              <td>
                <GuestDiv data={'Double Bed'} />
              </td>
              <td>
                <GuestDiv data={'AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi'} />
              </td>
              <td>
                <RoomRate price={'145'} />
              </td>
              <td>
                <RoomRate price={'130'} />
              </td>
              <td>
                <RoomStatus status='Available'/>               
              </td>
              <td>
                <GuestDiv data={<HiDotsVertical />} />
              </td>
          </TrStyled>
          <TrStyled align={'bottom'}>
              <td>
              <GuestImageRoom img={'../../public/room.jpg'} id={'#000123456'} data={'Deluxe A-91234'}/>
              </td>
              <td>
                <GuestDiv data={'Double Bed'} />
              </td>
              <td>
                <GuestDiv data={'AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi'} />
              </td>
              <td>
                <RoomRate price={'145'} />
              </td>
              <td>
                <RoomRate price={'130'} />
              </td>
              <td>
                <RoomStatus status='Available'/>               
              </td>
              <td>
                <GuestDiv data={<HiDotsVertical />} />
              </td>
          </TrStyled>
          <TrStyled align={'bottom'}>
              <td>
              <GuestImageRoom img={'../../public/room.jpg'} id={'#000123456'} data={'Deluxe A-91234'}/>
              </td>
              <td>
                <GuestDiv data={'Double Bed'} />
              </td>
              <td>
                <GuestDiv data={'AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi'} />
              </td>
              <td>
                <RoomRate price={'145'} />
              </td>
              <td>
                <RoomRate price={'130'} />
              </td>
              <td>
                <RoomStatus status='Booked'/>               
              </td>
              <td>
                <GuestDiv data={<HiDotsVertical />} />
              </td>
          </TrStyled>
        </tbody>
      </TableRoomStyled>
    </>
  )
}
