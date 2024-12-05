import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Container } from '@mui/material';

export default function CalendarBlock() {
  return (
    <Container>
      <h1>Календарь</h1>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateCalendar />
      </LocalizationProvider>
    </Container>
  );
}
