import React, { useEffect, useState } from 'react'
import { ListStyled } from '../components/ListStyled'
import { ListElementStyled } from '../components/ListElementStyled'
import { SearchBarStyled } from '../components/table/SearchBarStyled.js'
import { TheadStyled } from '../components/table/TheadStyled.js'
import { GuestImage } from '../components/guest/GuestImage.jsx'
import { TrStyled } from '../components/table/TrStyled.js'
import { GuestDiv } from '../components/guest/GuestDiv.jsx'
import { ConciergeContact } from '../components/concierge/ConciergeContact.jsx'
import { HiDotsVertical } from "react-icons/hi";
import { MenuStyled } from '../components/MenuStyled.js'
import { SelectStyled } from '../components/table/SelectStyled.js'
import { TableGuestStyled } from '../components/table/TableGuestStyled.js'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData, getUserError, getUserStatus } from '../features/user/userSlice.js'
import { getUserListFromAPIThunk } from '../features/user/userThunk.js'

export const ConciergeList = () => {

  const dispatch = useDispatch();
  const userListData = useSelector(getUserData);
  const userListError = useSelector(getUserError);
  const userListStatus = useSelector(getUserStatus);
  const [spinner,setSpinner] =  useState(true);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    if(userListStatus === "idle"){
      dispatch(getUserListFromAPIThunk())
    }
    else if(userListStatus === "pending"){
      setSpinner(true);
    }
    else if(userListStatus === "fulfilled"){
      let components = [];
      userListData.forEach(user => {
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

  }, [dispatch, userListData, userListStatus])

  return (
    <>
      <MenuStyled>
        <ListStyled>
          <ListElementStyled color='#135846'>All employee</ListElementStyled>
          <ListElementStyled>Active employee</ListElementStyled>
          <ListElementStyled>Inactive employee</ListElementStyled>
        </ListStyled>

        <div>
          <SearchBarStyled />
          <SelectStyled>
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
