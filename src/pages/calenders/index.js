import React, { useState } from 'react'
import { DateRangePicker } from '../../components';
import { Grid2 } from '@mui/material';

const Calendars = () => {
  const [singleSelectedDate, setSingleSelectedDate] = useState(null);
  const [rangeSelectedDates, setRangeSelectedDates] = useState({ start: null, end: null });

  const handleSingleDateChange = (date) => {
    setSingleSelectedDate(date.start);
  };

  const handleRangeDateChange = (dates) => {
    setRangeSelectedDates(dates);
  };
  console.log(singleSelectedDate, 'selectedDates', rangeSelectedDates)
  return (
    <div>
      <dev>
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <h5>Single Date Picker</h5>
            <DateRangePicker
              highlightColor="#ff6347"
              mode="single"
              selectedDates={{ start: singleSelectedDate, end: null }}
              onDateChange={handleSingleDateChange}
            />
          </Grid2>
          <Grid2 size={6}>
            <h2>Date Range Picker</h2>
            <DateRangePicker
              highlightColor="#4caf50"
              mode="range"
              selectedDates={rangeSelectedDates}
              onDateChange={handleRangeDateChange}
            />
          </Grid2>
          <Grid2 size={6}>
            <h2>Date Range Picker</h2>
            <DateRangePicker
              highlightColor="#4caf50"
              mode="range"
              selectedDates={rangeSelectedDates}
              onDateChange={handleRangeDateChange}
            />
          </Grid2>
          <Grid2 size={4}>
            <h2>Date Range Picker</h2>
            <DateRangePicker
              highlightColor="#4caf50"
              mode="range"
              selectedDates={rangeSelectedDates}
              onDateChange={handleRangeDateChange}
            />
          </Grid2>
        </Grid2>
      </dev>
    </div>
  )
}

export default Calendars