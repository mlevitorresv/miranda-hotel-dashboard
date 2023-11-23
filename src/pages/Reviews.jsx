import React from 'react'
import { MessageDivStyled } from '../components/MessagesDivStyled'
import { MessagesContainer } from '../components/messagesContact/MessagesContainer'
import { ListStyled } from '../components/ListStyled'
import { ListElementStyled } from '../components/ListElementStyled'
import { TableGuestStyled } from '../components/TableGuestStyled'
import { TheadStyled } from '../components/TheadStyled'
import { TrStyled } from '../components/TrStyled.js'
import { ButtonStyled } from '../components/ButtonStyled.js'
import { GuestDiv } from '../components/guest/GuestDiv.jsx'
import { MenuStyled } from '../components/MenuStyled.js'
import { SelectStyled } from '../components/SelectStyled.js'

export const Reviews = () => {
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
          <TrStyled>
              <td>
                <GuestDiv data={'#000123456'} />
              </td>
              <td>
                <GuestDiv data={'Nov 21th 2020 09:21 AM'} />
              </td>
              <td>
                <GuestDiv data={'James Sitepu'} />
              </td>
              <td >
                <GuestDiv className='comment' data={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'} />
              </td>
              <td>
              <ButtonStyled color={'red'} bg={'#FFEDEC'}>Archive</ButtonStyled>
              </td>
          </TrStyled>
        </tbody>
      </TableGuestStyled>
    </div>
  )
}
