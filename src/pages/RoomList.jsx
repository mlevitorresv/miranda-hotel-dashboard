import React, { useEffect, useState } from 'react'
import { ListStyled } from '../components/common/ListStyled';
import { ListElementStyled } from '../components/common/ListElementStyled';
import { SearchBarStyled } from '../components/table/SearchBarStyled.ts';
import { TheadStyled } from '../components/table/TheadStyled.ts';
import { TrStyled } from '../components/table/TrStyled.ts';
import { GuestDiv } from '../components/guest/GuestDiv.jsx';
import { MenuStyled } from '../components/common/MenuStyled.ts';
import { HiDotsVertical } from "react-icons/hi";
import { GuestImageRoom } from '../components/room/GuestImageRoom.jsx';
import { RoomRate } from '../components/room/RoomRate.jsx';
import { RoomStatus } from '../components/room/RoomStatus.jsx';
import { SelectStyled } from '../components/table/SelectStyled.ts';
import { TableGuestStyled } from '../components/table/TableGuestStyled.ts';
import { ButtonStyled } from '../components/common/ButtonStyled.ts'
import { useDispatch, useSelector } from 'react-redux';
import { getAvailableRooms, getBookedRooms, getRoomData, getRoomError, getRoomStatus, removeRoomElement } from '../features/rooms/roomSlice.js';
import { getRoomListFromAPIThunk } from '../features/rooms/roomThunk.js';
import { useNavigate } from 'react-router-dom';
import { DropwdownStyled } from '../components/dropdown/DropwdownStyled.ts';
import { Tfooter } from '../components/table/Tfooter.jsx';

export const RoomList = () => {

  const dispatch = useDispatch();
  const roomListData = useSelector(getRoomData);
  const roomListError = useSelector(getRoomError);
  const roomListStatus = useSelector(getRoomStatus);
  const bookedRoomList = useSelector(getBookedRooms);
  const availableRoomList = useSelector(getAvailableRooms);
  const [spinner, setSpinner] = useState(true);
  const [roomList, setRoomList] = useState([]);
  const [selectedSort, setSelectedSort] = useState('number');
  const [showBooked, setShowBooked] = useState(false);
  const [showAvailable, setShowAvailable] = useState(false);
  const [activeMenus, setActiveMenus] = useState({})
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    if (roomListStatus === "idle") {
      dispatch(getRoomListFromAPIThunk())
    }
    else if (roomListStatus === "pending") {
      setSpinner(true);
    }
    else if (roomListStatus === "fulfilled") {
      let components = [];
      const filteredRoomList = showBooked ? bookedRoomList : showAvailable ? availableRoomList : roomListData
      let sortedList = filteredRoomList.slice();

      if (selectedSort === 'number') {
        sortedList.sort((a, b) => a.id - b.id)
      }
      else if (selectedSort === 'booked') {
        sortedList.sort((a, b) => a.available - b.available)
      }
      else if (selectedSort === 'available') {
        sortedList.sort((a, b) => b.available - a.available)
      }
      else if (selectedSort === 'priceLow') {
        sortedList.sort((a, b) => a.price - b.price)
      }
      else if (selectedSort === 'priceHigh') {
        sortedList.sort((a, b) => b.price - a.price)
      }

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, sortedList.length);

      const paginatedList = sortedList.slice(startIndex, endIndex);
      paginatedList.forEach(room => {
        components.push(

          <TrStyled align={'bottom'} key={room.id}>
            <td>
              <GuestImageRoom img={room.photo} id={room.id} data={room.type} />
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
              <RoomStatus status={room.available ? 'Available' : 'Booked'} />
            </td>
            <td onClick={() => {
              setActiveMenus((prevMenus) => ({
                ...prevMenus,
                [room.id]: !prevMenus[room.id],
              }));
            }}>
              <GuestDiv
                data={<HiDotsVertical />}
              />
              {activeMenus[room.id] && (
                <DropwdownStyled>
                  <p>edit</p>
                  <p onClick={() => dispatch(removeRoomElement({id: room.id}))}>delete</p>
                </DropwdownStyled>
              )}
            </td>
          </TrStyled>

        )
      });
      setSpinner(false);
      setRoomList(components)
    }
  }, [dispatch, roomListData, roomListStatus, selectedSort, showBooked, showAvailable, activeMenus, currentPage])


  const handlePageChange = (page) => {
    setCurrentPage(page)
  }


  return (
    <>
      <MenuStyled>
        <ListStyled>
          <ListElementStyled
            onClick={() => { setShowBooked(false), setShowAvailable(false) }}
            className={showBooked | showAvailable ? '' : 'active'}
          >All</ListElementStyled>
          <ListElementStyled
            onClick={() => { setShowBooked(true), setShowAvailable(false) }}
            className={showBooked ? 'active' : ''}
          >Booked</ListElementStyled>
          <ListElementStyled
            onClick={() => { setShowBooked(false), setShowAvailable(true) }}
            className={showAvailable ? 'active' : ''}
          >Available</ListElementStyled>

        </ListStyled>

        <div>
          <ButtonStyled color='white' bg='#135846' onClick={() => navigate('/rooms/create')}>Create room</ButtonStyled>
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
      <Tfooter
        currentPage={currentPage}
        onPageChanged={handlePageChange}
        items={roomListData.length}
        itemsPerPage={itemsPerPage}

      />
    </>
  )
}
