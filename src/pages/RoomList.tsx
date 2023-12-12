import React, { Dispatch, useEffect, useState } from 'react'
import { ListStyled } from '../components/common/ListStyled.js';
import { ListElementStyled } from '../components/common/ListElementStyled.js';
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
import { ButtonStyled } from '../components/common/ButtonStyled.js'
import { useDispatch, useSelector } from 'react-redux';
import { getAvailableRooms, getBookedRooms, getRoomData, getRoomError, getRoomStatus, removeRoomElement } from '../features/rooms/roomSlice.js';
import { getRoomListFromAPIThunk } from '../features/rooms/roomThunk.js';
import { useNavigate } from 'react-router-dom';
import { DropwdownStyled } from '../components/dropdown/DropwdownStyled.js';
import { Tfooter } from '../components/table/Tfooter.jsx';
import { RoomInterface } from '../interfaces/RoomInterface.js';

export const RoomList = () => {

  const dispatch: Dispatch = useDispatch();
  const roomListData = useSelector<RoomInterface[]>(getRoomData);
  const roomListError = useSelector<string | undefined>(getRoomError);
  const roomListStatus = useSelector<string>(getRoomStatus);
  const bookedRoomList = useSelector<RoomInterface[]>(getBookedRooms);
  const availableRoomList = useSelector<RoomInterface[]>(getAvailableRooms);
  const [spinner, setSpinner] = useState<boolean>(true);
  const [roomList, setRoomList] = useState<RoomInterface[]>([]);
  const [selectedSort, setSelectedSort] = useState<string>('number');
  const [showBooked, setShowBooked] = useState<boolean>(false);
  const [showAvailable, setShowAvailable] = useState<boolean>(false);
  const [activeMenus, setActiveMenus] = useState({})
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  useEffect(() => {
    if (roomListStatus === "idle") {
      dispatch(getRoomListFromAPIThunk())
    }
    else if (roomListStatus === "pending") {
      setSpinner(true);
    }
    else if (roomListStatus === "fulfilled") {
      let components: RoomInterface[] = [];
      const filteredRoomList = showBooked ? bookedRoomList : showAvailable ? availableRoomList : roomListData
      let sortedList = filteredRoomList.slice();

      if (selectedSort === 'number') {
        sortedList.sort((a: RoomInterface[], b: RoomInterface[]) => a.id - b.id)
      }
      else if (selectedSort === 'booked') {
        sortedList.sort((a: RoomInterface[], b: RoomInterface[]) => a.available - b.available)
      }
      else if (selectedSort === 'available') {
        sortedList.sort((a: RoomInterface[], b: RoomInterface[]) => b.available - a.available)
      }
      else if (selectedSort === 'priceLow') {
        sortedList.sort((a: RoomInterface[], b: RoomInterface[]) => a.price - b.price)
      }
      else if (selectedSort === 'priceHigh') {
        sortedList.sort((a: RoomInterface[], b: RoomInterface[]) => b.price - a.price)
      }

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, sortedList.length);

      const paginatedList = sortedList.slice(startIndex, endIndex);
      paginatedList.forEach((room: RoomInterface) => {
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


  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }


  return (
    <>
      <MenuStyled>
        <ListStyled>
          <ListElementStyled
            onClick={() => { setShowBooked(false), setShowAvailable(false) }}
            className={showBooked || showAvailable ? '' : 'active'}
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
