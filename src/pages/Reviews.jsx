import React, { useDebugValue, useEffect, useState } from 'react'
import { MessageDivStyled } from '../components/messagesContact/MessagesDivStyled'
import { MessagesContainer } from '../components/messagesContact/MessagesContainer'
import { ListStyled } from '../components/common/ListStyled'
import { ListElementStyled } from '../components/common/ListElementStyled'
import { TableGuestStyled } from '../components/table/TableGuestStyled.js'
import { TheadStyled } from '../components/table/TheadStyled.js'
import { TrStyled } from '../components/table/TrStyled.js'
import { ButtonStyled } from '../components/common/ButtonStyled.js'
import { GuestDiv } from '../components/guest/GuestDiv.jsx'
import { MenuStyled } from '../components/common/MenuStyled.js'
import { SelectStyled } from '../components/table/SelectStyled.js'
import { useDispatch, useSelector } from 'react-redux'
import { getContactData, getContactError, getContactStatus } from '../features/contact/contactSlice.js'
import { getContactListFromAPIThunk } from '../features/contact/contactThunk.js'

export const Reviews = () => {

  const dispatch = useDispatch();
  const contactListData = useSelector(getContactData);
  const contactListError = useSelector(getContactError);
  const contactListStatus = useSelector(getContactStatus);
  const [spinner, setSpinner] = useState(true);
  const [contactList, setContactList] = useState([]);

  useEffect(()=> {

    if(contactListStatus === "idle"){
      dispatch(getContactListFromAPIThunk())
    }
    else if(contactListStatus === "pending"){
      setSpinner(true)
    }
    else if(contactListStatus === "fulfilled"){
      let components = [];
      contactListData.forEach(contact => {
        components.push(
          <TrStyled>
            <td>
              <GuestDiv data={'#' + contact.id} />
            </td>
            <td>
              <GuestDiv data={contact.date + ' ' + contact.dateTime} />
            </td>
            <td>
              <GuestDiv data={contact.name} />
            </td>
            <td >
              <GuestDiv className='comment' data={contact.comment} />
            </td>
            <td>
              <ButtonStyled color={'red'} bg={'#FFEDEC'}>Archive</ButtonStyled>
            </td>
          </TrStyled>
        )
      });
      setSpinner(false);
      setContactList(components);
    }


  },[dispatch, contactListData, contactListStatus])

  return (
    <div>
      <MessageDivStyled bg={'transparent'}>
        <MessagesContainer />
      </MessageDivStyled>

      <MenuStyled>
        <ListStyled>
          <ListElementStyled color='#135846'>All Contacts</ListElementStyled>
          <ListElementStyled>Archived</ListElementStyled>
        </ListStyled>

        <div>
          <SelectStyled>
            <option value="date" selected>Date</option>
          </SelectStyled>
        </div>
      </MenuStyled>

      {spinner ? <p>Loading...</p> : 
        <TableGuestStyled className='rev'>
          <TheadStyled>
            <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Comment</th>
            </tr>
          </TheadStyled>

          <tbody>
            {contactList}
          </tbody>
        </TableGuestStyled>
      }
    </div>
  )
}
