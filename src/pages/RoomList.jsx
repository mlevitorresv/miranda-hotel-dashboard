import React, { useEffect, useState } from 'react'
import { ListStyled } from '../components/common/ListStyled';
import { ListElementStyled } from '../components/common/ListElementStyled';
import { SearchBarStyled } from '../components/table/SearchBarStyled.js';
import { TheadStyled } from '../components/table/TheadStyled.js';
import { TrStyled } from '../components/table/TrStyled.js';
import { GuestDiv } from '../components/guest/GuestDiv.jsx';
import { MenuStyled } from '../components/common/MenuStyled.js';
import { HiDotsVertical } from "react-icons/hi";
import { GuestImageRoom } from '../components/room/GuestImageRoom.jsx';
import { RoomRate } from '../components/room/RoomRate.jsx';
import { RoomStatus } from '../components/room/RoomStatus.jsx';
import { SelectStyled } from '../components/table/SelectStyled.js';
import { TableGuestStyled } from '../components/table/TableGuestStyled.js';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomData, getRoomError, getRoomStatus } from '../features/rooms/roomSlice.js';
import { getRoomListFromAPIThunk } from '../features/rooms/roomThunk.js';

export const RoomList = () => {

  const dispatch = useDispatch();
  const roomListData = useSelector(getRoomData);
  const roomListError = useSelector(getRoomError);
  const roomListStatus = useSelector(getRoomStatus);
  const [spinner, setSpinner] = useState(true);
  const [roomList, setRoomList] = useState([]);
  const [selectedSort, setSelectedSort] = useState('number');

  useEffect(() => {
    if(roomListStatus === "idle"){
      dispatch(getRoomListFromAPIThunk())
    }
    else if(roomListStatus === "pending"){
      setSpinner(true);
    }
    else if(roomListStatus === "fulfilled"){
      let components = [];
      let sortedList = roomListData.slice();
      
      if(selectedSort === 'number'){
        sortedList.sort((a, b) => a.id - b.id)
      }
      else if(selectedSort === 'booked'){
        sortedList.sort((a, b) => a.available - b.available)
      }
      else if(selectedSort === 'available'){
        sortedList.sort((a, b) => b.available - a.available)
      }
      else if(selectedSort === 'priceLow'){
        sortedList.sort((a, b) => a.price - b.price)
      }
      else if(selectedSort === 'priceHigh'){
        sortedList.sort((a, b) => b.price - a.price)
      }
      
      sortedList.forEach(room => {
        components.push(

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
              <RoomStatus status={room.available ? 'Available' : 'Booked'}/>               
            </td>
            <td>
              <GuestDiv data={<HiDotsVertical />} />
            </td>
          </TrStyled>

        )
      });      
      setSpinner(false);
      setRoomList(components)
    }
  }, [dispatch, roomListData, roomListStatus, selectedSort])




  return (
    <>
      <MenuStyled>
        <ListStyled>
          
        </ListStyled>

        <div>
          <SearchBarStyled />
          <SelectStyled onChange={(e) => setSelectedSort(e.target.value)}>
            <option value="number" selected>Room Number</option>
            <option value="available">Available</option>
            <option value="booked">Booked</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
          </SelectStyled>
        </div>
      </MenuStyled>

      {spinner ? <p>Loading...</p> : 
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
            {roomList}
          </tbody>
        </TableGuestStyled>
      }
    </>
  )
}
