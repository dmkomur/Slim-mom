import * as css from './DiaryDateCalendar.styled.js';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export function DiaryDateCalendar() {
  const [value, onChange] = useState(new Date());
  const [isCalendarOpen, setCalendarOpen] = useState(false);

  const handleToggleCalendar = () => {
    setCalendarOpen(!isCalendarOpen);
  };

  const handleDateChange = (date) => {
    onChange(date);
    setCalendarOpen(false);
    // onDateChange(date); // ]
  };

  return (
    <div>
    <css.wrapCalendar>
    <css.viewDate>{value.toLocaleDateString()}</css.viewDate>
      <css.buttoncc onClick={handleToggleCalendar}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 9H13V11H15V9Z" fill="#9B9FAA"/>
          <path d="M11 9H9V11H11V9Z" fill="#9B9FAA"/>
          <path d="M7.00002 9H5V11H7.00002V9Z" fill="#9B9FAA"/>
          <path d="M17 2.00001H16V0H14V2.00001H6.00001V0H4V2.00001H3.00001C1.89001 2.00001 1.01003 2.90001 1.01003 4.00003L1 18C1 19.1 1.89001 20 3.00001 20H17C18.1 20 19 19.1 19 18V3.99998C19 2.90001 18.1 2.00001 17 2.00001ZM17 18H3.00001V6.99998H17V18Z" fill="#9B9FAA"/>
        </svg>
      </css.buttoncc>
      {isCalendarOpen && (
        <css.Calendarep>
          <Calendar onChange={handleDateChange} value={value} />
        </css.Calendarep>
      )}
      </css.wrapCalendar>
    </div>
  );
}





export default DiaryDateCalendar;
