import React from 'react'
import { ListStyled } from '../components/ListStyled'
import { ListElementStyled } from '../components/ListElementStyled'
import { TableStyled } from '../components/TableStyled'
import { SearchBarStyled } from '../components/SearchBarStyled'
import { TheadStyled } from '../components/TheadStyled'
import { GuestImage } from '../components/guest/GuestImage.jsx'
import { TrStyled } from '../components/TrStyled.js'
import { ButtonStyled } from '../components/ButtonStyled.js'
import { GuestDiv } from '../components/guest/GuestOrderDate.jsx'
import { GuestCheck } from '../components/guest/GuestCheck.jsx'
import { HiDotsVertical } from "react-icons/hi";

export const ConciergeList = () => {
  return (
    <>
      <ListStyled>
        <ListElementStyled color='#135846'>All Guest</ListElementStyled>
        <ListElementStyled>Pending</ListElementStyled>
        <ListElementStyled>Booked</ListElementStyled>
        <ListElementStyled>Refund</ListElementStyled>
      </ListStyled>

      <SearchBarStyled />

      <TableStyled>
        <TheadStyled>
          <tr>
              <th>Guest</th>
              <th>Order Date</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Special Request</th>
              <th>Room Type</th>
              <th>Status</th>
          </tr>
        </TheadStyled>

        <tbody>
          <TrStyled>
              <td>
                <GuestImage />
              </td>
              <td>
                <GuestDiv data={'Oct 30th 2020 09:21 AM'} />
              </td>
              <td>
                <GuestCheck date={'Nov 2th, 2020'} hour={'9.46PM'} />
              </td>
              <td>
                <GuestCheck date={'Nov 4th, 2020'} hour={'6.12PM'} />
              </td>
              <td>
                <ButtonStyled>View Notes</ButtonStyled>
              </td>
              <td>
                <p>Deluxe A - 03</p>
              </td>
              <td>
                <div>
                  <ButtonStyled color={'red'} bg={'#FFEDEC'}>Refund</ButtonStyled>
                </div>
              </td>
              <td>
              <GuestDiv data={<HiDotsVertical />} />
              </td>
          </TrStyled>
          <TrStyled>
              <td>
                <GuestImage />
              </td>
              <td>
                <GuestDiv data={'Oct 30th 2020 09:21 AM'} />
              </td>
              <td>
                <GuestCheck date={'Nov 2th, 2020'} hour={'9.46PM'} />
              </td>
              <td>
                <GuestCheck date={'Nov 4th, 2020'} hour={'6.12PM'} />
              </td>
              <td>
                <ButtonStyled>View Notes</ButtonStyled>
              </td>
              <td>
                <p>Deluxe A - 03</p>
              </td>
              <td>
                <div>
                  <ButtonStyled color={'red'} bg={'#FFEDEC'}>Refund</ButtonStyled>
                </div>
              </td>
              <td>
              <GuestDiv data={<HiDotsVertical />} />
              </td>
          </TrStyled>
          <TrStyled>
              <td>
                <GuestImage />
              </td>
              <td>
                <GuestDiv data={'Oct 30th 2020 09:21 AM'} />
              </td>
              <td>
                <GuestCheck date={'Nov 2th, 2020'} hour={'9.46PM'} />
              </td>
              <td>
                <GuestCheck date={'Nov 4th, 2020'} hour={'6.12PM'} />
              </td>
              <td>
                <ButtonStyled>View Notes</ButtonStyled>
              </td>
              <td>
                <p>Deluxe A - 03</p>
              </td>
              <td>
                <div>
                  <ButtonStyled color={'red'} bg={'#FFEDEC'}>Refund</ButtonStyled>
                </div>
              </td>
              <td>
              <GuestDiv data={<HiDotsVertical />} />
              </td>
          </TrStyled>
          <TrStyled>
              <td>
                <GuestImage />
              </td>
              <td>
                <GuestDiv data={'Oct 30th 2020 09:21 AM'} />
              </td>
              <td>
                <GuestCheck date={'Nov 2th, 2020'} hour={'9.46PM'} />
              </td>
              <td>
                <GuestCheck date={'Nov 4th, 2020'} hour={'6.12PM'} />
              </td>
              <td>
                <ButtonStyled>View Notes</ButtonStyled>
              </td>
              <td>
                <p>Deluxe A - 03</p>
              </td>
              <td>
                <div>
                  <ButtonStyled color={'red'} bg={'#FFEDEC'}>Refund</ButtonStyled>
                </div>
              </td>
              <td>
              <GuestDiv data={<HiDotsVertical />} />
              </td>
          </TrStyled>
        </tbody>
      </TableStyled>
    </>
  )
}
