import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm.jsx';
import * as css from './DiaryDateCalendar.styled.js';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { RightSideBar } from 'components/RightSideBar/RightSideBar.jsx';
import DiaryProductList from 'components/DiaryProductList/DiaryProductList.jsx';
import { BsCalendarEvent } from 'react-icons/bs';

export function DiaryDateCalendar() {
  const [value, onChange] = useState(new Date());
  const [isCalendarOpen, setCalendarOpen] = useState(false);

  const exportDate = value => {
    const date = value.getDate().toString().padStart(2, '0');
    const month = (value.getMonth() + 1).toString().padStart(2, '0');
    const year = value.getFullYear();
    return `${year}-${month}-${date}`;
  };

  const handleToggleCalendar = () => {
    setCalendarOpen(!isCalendarOpen);
  };

  const handleDateChange = date => {
    onChange(date);
    setCalendarOpen(false);
  };

  return (
    <>
      <div>
        <css.wrapCalendar>
          <css.viewDate>{value.toLocaleDateString()}</css.viewDate>
          <css.buttoncc onClick={handleToggleCalendar}>
            <BsCalendarEvent />
          </css.buttoncc>
          {isCalendarOpen && (
            <css.Calendarep>
              <Calendar
                onChange={handleDateChange}
                value={value}
                maxDate={
                  new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
                }
                locale="en-EN"
              />
            </css.Calendarep>
          )}
        </css.wrapCalendar>
        <DiaryAddProductForm valueDate={exportDate(value)} />
        <DiaryProductList valueDate={exportDate(value)} />
      </div>
      <RightSideBar selectedDate={value} />
    </>
  );
}

export default DiaryDateCalendar;
