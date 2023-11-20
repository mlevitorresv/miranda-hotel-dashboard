import React, { useState } from 'react'
import { DateRangePickerStyled } from './DateRangePickerStyled'

export const DateRangePicker = () => {

    const [startDate, setStartDate]= useState(null);
    const [endDate, setEndDate]= useState(null);

  return (
    <DateRangePickerStyled>
        <div className="datePickerWrapper">
            <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            />
            <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
            />
        </div>
    </DateRangePickerStyled>
  )
}
