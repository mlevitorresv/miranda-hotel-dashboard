import React, { useEffect, useState } from 'react'
import { Dispatch } from '@reduxjs/toolkit';
import { ListStyled } from '../components/common/ListStyled.js';
import { ListElementStyled } from '../components/common/ListElementStyled.js';
import { SearchBarStyled } from '../components/table/SearchBarStyled.js';
import { TheadStyled } from '../components/table/TheadStyled.js';
import { TrStyled } from '../components/table/TrStyled.js';
import { GuestDiv } from '../components/guest/GuestDiv';
import { MenuStyled } from '../components/common/MenuStyled.js';
import { HiDotsVertical } from "react-icons/hi";
import { GuestImageRoom } from '../components/room/GuestImageRoom';
import { RoomRate } from '../components/room/RoomRate';
import { RoomStatus } from '../components/room/RoomStatus';
import { SelectStyled } from '../components/table/SelectStyled.js';
import { TableGuestStyled } from '../components/table/TableGuestStyled.js';
import { ButtonStyled } from '../components/common/ButtonStyled.js'
import { useDispatch, useSelector } from 'react-redux';
import { getAvailableRooms, getBookedRooms, getRoomData, getRoomError, getRoomStatus/*, removeRoomElement*/ } from '../features/rooms/roomSlice.js';
import { deleteRoomToAPIThunk, getRoomListFromAPIThunk } from '../features/rooms/roomThunk.js';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { DropwdownStyled } from '../components/dropdown/DropwdownStyled.js';
import { Tfooter } from '../components/table/Tfooter.jsx';
import { RoomInterface } from '../interfaces/RoomInterface.js';
import { AppDispatch, RootState, useAppSelector } from '../app/store.js';
import { FaTrashAlt } from 'react-icons/fa';

export const RoomList = () => {

  const dispatch: AppDispatch = useDispatch();
  const roomListData = useAppSelector<RoomInterface[]>(getRoomData);
  const roomListError = useAppSelector<string | undefined>(getRoomError);
  const roomListStatus = useAppSelector<string>(getRoomStatus);
  const bookedRoomList = useAppSelector<RoomInterface[]>(getBookedRooms);
  const availableRoomList = useAppSelector<RoomInterface[]>(getAvailableRooms);
  const [spinner, setSpinner] = useState<boolean>(true);
  const [roomList, setRoomList] = useState<React.JSX.Element[]>([]);
  const [selectedSort, setSelectedSort] = useState<string>('number');
  const [showBooked, setShowBooked] = useState<boolean>(false);
  const [showAvailable, setShowAvailable] = useState<boolean>(false);
  const [activeMenus, setActiveMenus] = useState<Record<number, boolean>>({})
  const navigate: NavigateFunction = useNavigate();
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
      let components: React.JSX.Element[] = [];
      const filteredRoomList: RoomInterface[] = showBooked ? bookedRoomList : showAvailable ? availableRoomList : roomListData;
      let sortedList: RoomInterface[] = filteredRoomList.slice();

      if (selectedSort === 'number') {
        sortedList.sort()
      }
      else if (selectedSort === 'booked') {
        sortedList.sort((a: RoomInterface, b: RoomInterface) => {
          if (!a.available && b.available) {
            return -1;
          } else if (a.available && !b.available) {
            return 1;
          } else {
            return 0; 
          }
        })
      }
      else if (selectedSort === 'available') {
        sortedList.sort((a: RoomInterface, b: RoomInterface) => {
          if (a.available && !b.available) {
            return -1;
          } else if (!a.available && b.available) {
            return 1;
          } else {
            return 0;
          } 
        })
      }
      else if (selectedSort === 'priceLow') {
        sortedList.sort((a: RoomInterface, b: RoomInterface) => a.price - b.price)
      }
      else if (selectedSort === 'priceHigh') {
        sortedList.sort((a: RoomInterface, b: RoomInterface) => b.price - a.price)
      }

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, sortedList.length);

      const paginatedList = sortedList.slice(startIndex, endIndex);
      paginatedList.forEach((room: RoomInterface) => {
        components.push(

          <TrStyled key={room._id}>
            <td>
              <GuestImageRoom img={room.photo} id={room._id} data={room.type} />
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
            <td>
              <GuestDiv
                data={<FaTrashAlt onClick={() => dispatch(deleteRoomToAPIThunk(room._id!))}/>}
              />      
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
        items={(roomListData as RoomInterface[]).length}
        itemsPerPage={itemsPerPage}

      />
    </>
  )
}
