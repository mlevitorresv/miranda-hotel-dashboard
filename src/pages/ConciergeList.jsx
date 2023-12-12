import React, { useEffect, useState } from 'react'
import { ListStyled } from '../components/common/ListStyled'
import { ListElementStyled } from '../components/common/ListElementStyled.ts'
import { TheadStyled } from '../components/table/TheadStyled.ts'
import { GuestImage } from '../components/guest/GuestImage.jsx'
import { TrStyled } from '../components/table/TrStyled.ts'
import { GuestDiv } from '../components/guest/GuestDiv.jsx'
import { ConciergeContact } from '../components/concierge/ConciergeContact.jsx'
import { HiDotsVertical } from "react-icons/hi";
import { MenuStyled } from '../components/common/MenuStyled.ts'
import { SelectStyled } from '../components/table/SelectStyled.ts'
import { TableGuestStyled } from '../components/table/TableGuestStyled.ts'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserActive, getUserData, getUserError, getUserInactive, getUserStatus, removeUserElement } from '../features/user/userSlice.js'
import { getUserListFromAPIThunk } from '../features/user/userThunk.js'
import { ButtonStyled } from '../components/common/ButtonStyled.ts'
import { DropwdownStyled } from '../components/dropdown/DropwdownStyled.ts'
import { Tfooter } from '../components/table/Tfooter.jsx'

export const ConciergeList = () => {

  const dispatch = useDispatch();
  const userListData = useSelector(getUserData);
  const userListError = useSelector(getUserError);
  const userListStatus = useSelector(getUserStatus);
  const userListActive = useSelector(getUserActive);
  const userListInactive = useSelector(getUserInactive);
  const [spinner, setSpinner] = useState(true);
  const [userList, setUserList] = useState([]);
  const [showActiveUser, setShowActiveUser] = useState(false);
  const [showInactiveUser, setShowInactiveUser] = useState(false);
  const [selectedSort, setSelectedSort] = useState('date');
  const [activeMenus, setActiveMenus] = useState({})
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10);


  useEffect(() => {
    if (userListStatus === "idle") {
      dispatch(getUserListFromAPIThunk())
    }
    else if (userListStatus === "pending") {
      setSpinner(true);
    }
    else if (userListStatus === "fulfilled") {
      let components = [];
      let filteredList;
      if (showActiveUser) {
        filteredList = userListActive;
      }
      else if (showInactiveUser) {
        filteredList = userListInactive;
      }
      else {
        filteredList = userListData;
      }
      let sortedList = filteredList.slice();
      if (selectedSort === 'date') {
        sortedList.sort((a, b) => new Date(b.date) - new Date(a.date))
      }
      else {
        sortedList.sort((a, b) => a.name.localeCompare(b.name))
      }

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, sortedList.length);

      const paginatedList = sortedList.slice(startIndex, endIndex);
      paginatedList.forEach(user => {
        components.push(
          <TrStyled>
            <td>
              <GuestImage img={user.photo} name={user.name} id={'#' + user.id} join={'joined on: ' + user.date} />
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
            <td onClick={() => {
              setActiveMenus((prevMenus) => ({
                ...prevMenus,
                [user.id]: !prevMenus[user.id],
              }));
            }}>
              <GuestDiv
                data={<HiDotsVertical />}
              />
              {activeMenus[user.id] && (
                <DropwdownStyled>
                  <p>edit</p>
                  <p  onClick={() => dispatch(removeUserElement({id: user.id}))}>delete</p>
                </DropwdownStyled>
              )}
            </td>
          </TrStyled>
        )
      });
      setSpinner(false);
      setUserList(components);
    }

  }, [dispatch, userListData, userListStatus, showActiveUser, showInactiveUser, selectedSort, activeMenus, currentPage])


  const handlePageChange = (page) => {
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

      {spinner ? <p>Loading...</p> :
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
        items={userListData.length}
        itemsPerPage={itemsPerPage}

      />
    </>
  )
}