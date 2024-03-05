import React, { useEffect, useState } from 'react'
import { ListStyled } from '../components/common/ListStyled'
import { ListElementStyled } from '../components/common/ListElementStyled'
import { TheadStyled } from '../components/table/TheadStyled'
import { GuestImage } from '../components/guest/GuestImage'
import { TrStyled } from '../components/table/TrStyled'
import { GuestDiv } from '../components/guest/GuestDiv.js'
import { ConciergeContact } from '../components/concierge/ConciergeContact'
import { FaTrashAlt } from "react-icons/fa";
import { MenuStyled } from '../components/common/MenuStyled'
import { SelectStyled } from '../components/table/SelectStyled'
import { TableGuestStyled } from '../components/table/TableGuestStyled'
import { Link, NavigateFunction, Navigator, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserActive, getUserData, getUserError, getUserInactive, getUserStatus } from '../features/user/userSlice'
import { deleteUserToAPIThunk, getUserListFromAPIThunk } from '../features/user/userThunk'
import { ButtonStyled } from '../components/common/ButtonStyled'
import { DropwdownStyled } from '../components/dropdown/DropwdownStyled'
import { Tfooter } from '../components/table/Tfooter'
import { UserInterface } from '../interfaces/UserInterface'
import { Dispatch } from '@reduxjs/toolkit'
import { AppDispatch, RootState, useAppSelector } from '../app/store'

export const ConciergeList = () => {

  const dispatch: AppDispatch = useDispatch();
  const userListData = useAppSelector<UserInterface[]>(getUserData);
  const userListError = useAppSelector<string | undefined>(getUserError);
  const userListStatus = useAppSelector<string>(getUserStatus);
  const userListActive = useAppSelector<UserInterface[]>(getUserActive);
  const userListInactive = useAppSelector<UserInterface[]>(getUserInactive);
  const [spinner, setSpinner] = useState<boolean>(true);
  const [userList, setUserList] = useState<React.JSX.Element[]>([]);
  const [showActiveUser, setShowActiveUser] = useState<boolean>(false);
  const [showInactiveUser, setShowInactiveUser] = useState<boolean>(false);
  const [selectedSort, setSelectedSort] = useState<string>('date');
  const [activeMenus, setActiveMenus] = useState<Record<number, boolean>>({})
  const navigate: NavigateFunction = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  useEffect(() => {
    if (userListStatus === "idle") {
      dispatch(getUserListFromAPIThunk())
    }
    else if (userListStatus === "pending") {
      setSpinner(true);
    }
    else if (userListStatus === "fulfilled") {
      let components: React.JSX.Element[] = [];
      let filteredList: UserInterface[];
      if (showActiveUser) {
        filteredList = userListActive;
      }
      else if (showInactiveUser) {
        filteredList = userListInactive;
      }
      else {
        filteredList = userListData;
      }
      let sortedList: UserInterface[] = filteredList.slice();
      if (selectedSort === 'date') {
        sortedList.sort((a: UserInterface, b: UserInterface) => new Date(b.date).getTime() - new Date(a.date).getTime())
      }
      else {
        sortedList.sort((a: UserInterface, b: UserInterface) => a.name.localeCompare(b.name))
      }

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, sortedList.length);

      const paginatedList = sortedList.slice(startIndex, endIndex);
      paginatedList.forEach((user: UserInterface) => {
        components.push(
          <TrStyled onClick={() => navigate(`/users/${user._id}`)}>
            <td>
              <GuestImage img={user.photo} name={user.name} id={'#' + user._id} join={'joined on: ' + user.date} />
            </td>
            <td>
              <GuestDiv data={user.email} />
            </td>
            <td>
              <GuestDiv data={user.description} />
            </td>
            <td>
              <ConciergeContact data={user.phone} />
            </td>
            <td>
              <GuestDiv data={user.status} color={user.status === 'INACTIVE' ? '#E23428' : '#5AD07A'} />
            </td>
            <td>
              <GuestDiv
                data={<FaTrashAlt onClick={() => handleDeleteUser(user._id!)}/>}
              />      
            </td>
          </TrStyled>
        )
      });
      setSpinner(false);
      setUserList(components);
    }

  }, [dispatch, userListData, userListStatus, showActiveUser, showInactiveUser, selectedSort, activeMenus, currentPage])


  const handleDeleteUser = async (userId: string) => {
    try {
      await dispatch(deleteUserToAPIThunk(userId));
      setSpinner(true);
      await dispatch(getUserListFromAPIThunk());
    } catch (error) {
      console.error('Error al eliminar la habitación:', error);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }


  return (
    <>
      <MenuStyled>
        <ListStyled>
          <ListElementStyled
            onClick={() => (setShowActiveUser(false), setShowInactiveUser(false))}
            className={!showInactiveUser && !showActiveUser ? 'active' : ''}
          >All employee</ListElementStyled>
          <ListElementStyled
            onClick={() => (setShowActiveUser(true), setShowInactiveUser(false))}
            className={showActiveUser ? 'active' : ''}
          >Active employee</ListElementStyled>
          <ListElementStyled
            onClick={() => (setShowActiveUser(false), setShowInactiveUser(true))}
            className={showInactiveUser ? 'active' : ''}
          >Inactive employee</ListElementStyled>
        </ListStyled>

        <div>
          <ButtonStyled color='white' bg='#135846' onClick={() => navigate('/users/create')}>Create user</ButtonStyled>
          <SelectStyled onChange={(e) => setSelectedSort(e.target.value)}>
            <option value="date" selected>Joined Date</option>
            <option value="name">name</option>
          </SelectStyled>
        </div>
      </MenuStyled>

      {spinner ? <p>Loading... {userListStatus}</p> :
        <TableGuestStyled className='user'>
          <TheadStyled>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Job Desk</th>
              <th>Contact</th>
              <th>Status</th>
            </tr>
          </TheadStyled>

          <tbody>
            {userList}
          </tbody>
        </TableGuestStyled>
      }
      <Tfooter
        currentPage={currentPage}
        onPageChanged={handlePageChange}
        items={(userListData as UserInterface[]).length}
        itemsPerPage={itemsPerPage}

      />
    </>
  )
}