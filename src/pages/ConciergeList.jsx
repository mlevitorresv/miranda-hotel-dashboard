import React from 'react'
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
import users from '../data/users.json'
import { Link } from 'react-router-dom'

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
          {users.map(user => (
            // <Link to={'/users/edit'}>
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
          // </Link>
          ))}

          <TrStyled>
              <td>
              <GuestImage img={'../../public/levi.jpeg'} name={'Cahyadi purnomo'} id={'#000123456'} join={'joined on Aug 2th 2017'}/>
              </td>
              <td>
                <GuestDiv data={'levitorres66@gmail.com'} />
              </td>
              <td>
                <GuestDiv data={'Answering guest inquiries, directing phone calls, coordinating travel plans, and more.Answering guest inquiries, directing phone calls, coordinating travel plans, and moreAnswering guest inquiries, directing phone calls, coordinating travel plans, and moreAnswering guest inquiries, directing phone calls, coordinating travel plans, and more'} />
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
      </TableGuestStyled>
    </>
  )
}
