import React, { useEffect, useState } from 'react'
import { ListStyled } from '../components/common/ListStyled'
import { ListElementStyled } from '../components/common/ListElementStyled'
import { SearchBarStyled } from '../components/table/SearchBarStyled.js'
import { TheadStyled } from '../components/table/TheadStyled.js'
import { GuestImage } from '../components/guest/GuestImage.jsx'
import { TrStyled } from '../components/table/TrStyled.js'
import { GuestDiv } from '../components/guest/GuestDiv.jsx'
import { ConciergeContact } from '../components/concierge/ConciergeContact.jsx'
import { HiDotsVertical } from "react-icons/hi";
import { MenuStyled } from '../components/common/MenuStyled.js'
import { SelectStyled } from '../components/table/SelectStyled.js'
import { TableGuestStyled } from '../components/table/TableGuestStyled.js'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserActive, getUserData, getUserError, getUserInactive, getUserStatus } from '../features/user/userSlice.js'
import { getUserListFromAPIThunk } from '../features/user/userThunk.js'

export const ConciergeList = () => {

  const dispatch = useDispatch();
  const userListData = useSelector(getUserData);
  const userListError = useSelector(getUserError);
  const userListStatus = useSelector(getUserStatus);
  const userListActive = useSelector(getUserActive);
  const userListInactive = useSelector(getUserInactive);
  const [spinner,setSpinner] =  useState(true);
  const [userList, setUserList] = useState([]);
  const [showActiveUser, setShowActiveUser] = useState(false);
  const [showInactiveUser, setShowInactiveUser] = useState(false);
  const [selectedSort, setSelectedSort] = useState('date');

  
  useEffect(() => {
    if(userListStatus === "idle"){
      dispatch(getUserListFromAPIThunk())
    }
    else if(userListStatus === "pending"){
      setSpinner(true);
    }
    else if(userListStatus === "fulfilled"){
      let components = [];
      let filteredList;
      if(showActiveUser){
        filteredList = userListActive;
      }
      else if(showInactiveUser){
        filteredList = userListInactive;
      }
      else{
        filteredList =userListData;
      }
      let sortedList = filteredList.slice();
      if(selectedSort === 'date'){
        sortedList.sort((a, b) => new Date(b.date) - new Date(a.date))
      }
      else{
        sortedList.sort((a, b) => a.name.localeCompare(b.name))
      }
      sortedList.forEach(user => {
        components.push(
            <TrStyled>
              <td>
                <GuestImage img={user.photo} name={user.name} id={'#' + user.id} join={'joined on: ' + user.date}/>
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
                <GuestDiv data={<HiDotsVertical />} />
              </td>
            </TrStyled>
        )
      });
      setSpinner(false);
      setUserList(components);
    }

  }, [dispatch, userListData, userListStatus, showActiveUser, showInactiveUser, selectedSort])

  return (
    <>
      <MenuStyled>
        <ListStyled>
          <ListElementStyled
            onClick={() => (setShowActiveUser(false), setShowInactiveUser(false) )}
            className={!showInactiveUser && !showActiveUser ? 'active' : ''}
          >All employee</ListElementStyled>
          <ListElementStyled
            onClick={() => (setShowActiveUser(true), setShowInactiveUser(false) )}
            className={showActiveUser ? 'active' : ''}
          >Active employee</ListElementStyled>
          <ListElementStyled
            onClick={() => (setShowActiveUser(false), setShowInactiveUser(true) )}
            className={showInactiveUser ? 'active' : ''}
          >Inactive employee</ListElementStyled>
        </ListStyled>

        <div>
          <SearchBarStyled/>
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
    </>
  )
}
