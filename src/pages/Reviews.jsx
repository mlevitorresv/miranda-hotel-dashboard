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
import { getContactArchived, getContactData, getContactError, getContactStatus } from '../features/contact/contactSlice.js'
import { getContactListFromAPIThunk } from '../features/contact/contactThunk.js'

export const Reviews = () => {

  const dispatch = useDispatch();
  const contactListData = useSelector(getContactData);
  const contactListError = useSelector(getContactError);
  const contactListStatus = useSelector(getContactStatus);
  const archivedContactList = useSelector(getContactArchived);
  const [showArchived, setShowArchived] = useState(false);
  const [spinner, setSpinner] = useState(true);
  const [contactList, setContactList] = useState([]);
  const [selectedSort, setSelectedSort] = useState('newest');


  useEffect(() => {

    if (contactListStatus === "idle") {
      dispatch(getContactListFromAPIThunk())
    }
    else if (contactListStatus === "pending") {
      setSpinner(true)
    }
    else if (contactListStatus === "fulfilled") {
      let components = [];
      const filteredContactList = showArchived ? archivedContactList : contactListData
      let sortedList = filteredContactList.slice();
      if(selectedSort === 'newest'){
        sortedList.sort((a, b) => new Date(b.date) - new Date(a.date))
      }
      else{
        sortedList.sort((a, b) => new Date(a.date) - new Date(b.date))
      }
      sortedList.forEach(contact => {
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
              {contact.archived ? <ButtonStyled color={'#5AD07A'} bg={'#E8FFEE'}>Archived</ButtonStyled> : <ButtonStyled color={'red'} bg={'#FFEDEC'}>Archive</ButtonStyled>}
            </td>
          </TrStyled>
        )
      });

      setSpinner(false);
      setContactList(components);
    }


  }, [dispatch, contactListData, contactListStatus, showArchived, selectedSort])

  return (
    <div>
      <MessageDivStyled bg={'transparent'}>
        <MessagesContainer />
      </MessageDivStyled>

      <MenuStyled>
        <ListStyled>
          <ListElementStyled
            onClick={() => setShowArchived(false)}
            className={showArchived ? '' : 'active'}
          >All Contacts</ListElementStyled>
          <ListElementStyled
            onClick={() => setShowArchived(true)}
            className={showArchived ? 'active' : ''}
          >Archived</ListElementStyled>
        </ListStyled>

        <div>
          <SelectStyled  onChange={(e) => setSelectedSort(e.target.value)}>
            <option value="newest" selected>Newest</option>
            <option value="oldest" selected>Oldest</option>
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
