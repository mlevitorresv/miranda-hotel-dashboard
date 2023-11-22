import React from 'react'
import { ListStyled } from '../components/ListStyled'
import { ListElementStyled } from '../components/ListElementStyled'
import { TableUserStyled } from '../components/TableUserStyled.js'
import { SearchBarStyled } from '../components/SearchBarStyled'
import { TheadStyled } from '../components/TheadStyled'
import { GuestImage } from '../components/guest/GuestImage.jsx'
import { TrStyled } from '../components/TrStyled.js'
import { GuestDiv } from '../components/guest/GuestDiv.jsx'
import { ConciergeContact } from '../components/concierge/ConciergeContact.jsx'
import { HiDotsVertical } from "react-icons/hi";
import { MenuStyled } from '../components/MenuStyled.js'
import { SelectStyled } from '../components/SelectStyled.js'

export const ConciergeList = () => {
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

      <TableUserStyled>
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
          <TrStyled>
              <td>
              <GuestImage img={'../../public/levi.jpeg'} name={'Cahyadi purnomo'} id={'#000123456'} join={'joined on Aug 2th 2017'}/>
              </td>
              <td>
                <GuestDiv data={'levitorres66@gmail.com'} />
              </td>
              <td>
                <GuestDiv data={'Answering guest inquiries, directing phone calls, coordinating travel plans, and more.'} />
              </td>
              <td>
                <ConciergeContact data={'012 334 5512'} />
              </td>
              <td>
                <GuestDiv data={'INACTIVE'} color={'#E23428'} />
              </td>
              <td>
                <GuestDiv data={<HiDotsVertical />} />
              </td>
          </TrStyled>
          <TrStyled>
              <td>
              <GuestImage img={'../../public/levi.jpeg'} name={'Cahyadi purnomo'} id={'#000123456'} join={'joined on Aug 2th 2017'}/>
              </td>
              <td>
                <GuestDiv data={'levitorres66@gmail.com'} />
              </td>
              <td>
                <GuestDiv data={'Answering guest inquiries, directing phone calls, coordinating travel plans, and more.'} />
              </td>
              <td>
                <ConciergeContact data={'012 334 5512'} />
              </td>
              <td>
                <div>
                  <GuestDiv data={'ACTIVE'} color={'#5AD07A'} />
                </div>
              </td>
              <td>
                <GuestDiv data={<HiDotsVertical />} />
              </td>
          </TrStyled>
          <TrStyled>
              <td>
              <GuestImage img={'../../public/levi.jpeg'} name={'Cahyadi purnomo'} id={'#000123456'} join={'joined on Aug 2th 2017'}/>
              </td>
              <td>
                <GuestDiv data={'levitorres66@gmail.com'} />
              </td>
              <td>
                <GuestDiv data={'Answering guest inquiries, directing phone calls, coordinating travel plans, and more.'} />
              </td>
              <td>
                <ConciergeContact data={'012 334 5512'} />
              </td>
              <td>
                <div>
                  <GuestDiv data={'INACTIVE'} color={'#E23428'} />
                </div>
              </td>
              <td>
                <GuestDiv data={<HiDotsVertical />} />
              </td>
          </TrStyled>
          <TrStyled>
              <td>
              <GuestImage img={'../../public/levi.jpeg'} name={'Cahyadi purnomo'} id={'#000123456'} join={'joined on Aug 2th 2017'}/>
              </td>
              <td>
                <GuestDiv data={'levitorres66@gmail.com'} />
              </td>
              <td>
                <GuestDiv data={'Answering guest inquiries, directing phone calls, coordinating travel plans, and more.'} />
              </td>
              <td>
                <ConciergeContact data={'012 334 5512'} />
              </td>
              <td>
                <div>
                  <GuestDiv data={'ACTIVE'} color={'#5AD07A'} />
                </div>
              </td>
              <td>
                <GuestDiv data={<HiDotsVertical />} />
              </td>
          </TrStyled>
        </tbody>
      </TableUserStyled>
    </>
  )
}
