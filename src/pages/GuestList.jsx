import React from 'react'
import { ListStyled } from '../components/ListStyled'
import { ListElementStyled } from '../components/ListElementStyled'
import { TableStyled } from '../components/TableStyled'
import { DateRangePicker } from '../components/dateRange/DateRangePicker'

export const GuestList = () => {
  return (
    <>
      <ListStyled>
        <ListElementStyled color='#13584'>All Guest</ListElementStyled>
        <ListElementStyled>Pending</ListElementStyled>
        <ListElementStyled>Booked</ListElementStyled>
        <ListElementStyled>Refund</ListElementStyled>
      </ListStyled>
      <DateRangePicker></DateRangePicker>

      <TableStyled>
        <tr>
            <th><input type="checkbox"/></th>
            <th>Guest</th>
            <th>Order Date</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Special Request</th>
            <th>Room Type</th>
            <th>Status</th>
        </tr>
        <tr>
            <td><input type="checkbox"/></td>
            <td>Cahyadi Purnomo</td>
            <td>Oct 30th 2020 09:21 AM</td>
            <td>Nov 2th, 2020 <br /> 9.46 PM</td>
            <td>Nov 4th, 2020 <br /> 6.12 PM</td>
            <td></td>
            <td>Deluxe A - 03</td>
            <td></td>
        </tr>
      </TableStyled>
    </>
  )
}
