import React, { useDebugValue, useEffect, useState } from 'react'
import { MessageDivStyled } from '../components/messagesContact/MessagesDivStyled'
import { MessagesContainer } from '../components/messagesContact/MessagesContainer'
import { ListStyled } from '../components/common/ListStyled'
import { ListElementStyled } from '../components/common/ListElementStyled'
import { TableGuestStyled } from '../components/table/TableGuestStyled'
import { TheadStyled } from '../components/table/TheadStyled'
import { TrStyled } from '../components/table/TrStyled'
import { ButtonStyled } from '../components/common/ButtonStyled'
import { GuestDiv } from '../components/guest/GuestDiv'
import { MenuStyled } from '../components/common/MenuStyled'
import { SelectStyled } from '../components/table/SelectStyled'
import { useDispatch, useSelector } from 'react-redux'
import { getContactArchived, getContactData, getContactError, getContactStatus } from '../features/contact/contactSlice.js'
import { getContactListFromAPIThunk } from '../features/contact/contactThunk.js'
import { Tfooter } from '../components/table/Tfooter'
import { RootState } from '../app/store'
import { ContactInterface } from '../interfaces/ContactInterface'

export const Reviews = () => {

  const dispatch = useDispatch();
  const contactListData = useSelector<RootState>(getContactData);
  const contactListError = useSelector<RootState>(getContactError);
  const contactListStatus = useSelector<RootState>(getContactStatus);
  const archivedContactList = useSelector<RootState>(getContactArchived);
  const [showArchived, setShowArchived] = useState<boolean>(false);
  const [spinner, setSpinner] = useState<boolean>(true);
  const [contactList, setContactList] = useState<ContactInterface[]>([]);
  const [selectedSort, setSelectedSort] = useState<string>('newest');
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);


  useEffect(() => {

    if (contactListStatus === "idle") {
      dispatch(getContactListFromAPIThunk())
    }
    else if (contactListStatus === "pending") {
      setSpinner(true)
    }
    else if (contactListStatus === "fulfilled") {
      let components: React.JSX.Element[] = [];
      const filteredContactList = showArchived ? archivedContactList : contactListData
      let sortedList = filteredContactList.slice();
      if(selectedSort === 'newest'){
        sortedList.sort((a: ContactInterface, b: ContactInterface) => new Date(b.date).getTime() - new Date(a.date).getTime())
      }
      else{
        sortedList.sort((a: ContactInterface, b: ContactInterface) => new Date(a.date).getTime() - new Date(b.date).getTime())
      }
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, sortedList.length);

      const paginatedList = sortedList.slice(startIndex, endIndex);
      paginatedList.forEach((contact: ContactInterface) => {
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


  }, [dispatch, contactListData, contactListStatus, showArchived, selectedSort, currentPage])


  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

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
      <Tfooter
        currentPage={currentPage}
        onPageChanged={handlePageChange}
        items={contactListData.length}
        itemsPerPage={itemsPerPage}

      />
    </div>
  )
}
