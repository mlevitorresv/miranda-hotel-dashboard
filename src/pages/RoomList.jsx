import React from 'react'
import { ListStyled } from '../components/ListStyled';
import { ListElementStyled } from '../components/ListElementStyled';
import { SearchBarStyled } from '../components/table/SearchBarStyled.js';
import { TheadStyled } from '../components/table/TheadStyled.js';
import { TrStyled } from '../components/table/TrStyled.js';
import { GuestDiv } from '../components/guest/GuestDiv.jsx';
import { MenuStyled } from '../components/MenuStyled.js';
import { HiDotsVertical } from "react-icons/hi";
import { GuestImageRoom } from '../components/GuestImageRoom.jsx';
import { RoomRate } from '../components/RoomRate.jsx';
import { RoomStatus } from '../components/RoomStatus.jsx';
import { SelectStyled } from '../components/table/SelectStyled.js';
import { TableGuestStyled } from '../components/table/TableGuestStyled.js';
import Rooms from '../../data/rooms.json';

export const RoomList = () => {
  console.log(Rooms);
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


      <TableGuestStyled className='room'>
        <TheadStyled>
          <tr>
              <th>Room Name</th>
              <th>Bed Type</th>
              <th>Facilities</th>
              <th>Price</th>
              <th>Offer Price</th>
              <th>Status</th>
          </tr>
        </TheadStyled>

        <tbody>
        {Rooms.map(room => (
          <TrStyled align={'bottom'} key={room.id}>
            <td>
              <GuestImageRoom img={room.photo} id={room.id} data={room.type}/>
            </td>
            <td>
              <GuestDiv data={room.bed} />
            </td>
            <td>
              <GuestDiv data={room.amenities} />
            </td>
            <td>
              <RoomRate price={room.price} />
            </td>
            <td>
              <RoomRate price={room.price * (room.discount / 100)} />
            </td>
            <td>
              <RoomStatus status={!room.status ? 'Booked' : 'Available'}/>               
            </td>
            <td>
              <GuestDiv data={<HiDotsVertical />} />
            </td>
          </TrStyled>
        ))}
        </tbody>
      </TableGuestStyled>
    </>
  )
}
