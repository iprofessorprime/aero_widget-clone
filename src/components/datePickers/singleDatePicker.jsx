import React, { useState } from 'react';

const SingleDatePicker = ({ highlightColor, selectedDate, onDateChange }) => {
  const [pickerOpen, setPickerOpen] = useState(false);

  const getCurrentMonthDays = () => {
    const days = [];
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const formatDate = (date) => {
    return date ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}` : '';
  };

  const handleDateClick = (date) => {
    onDateChange(date); 
    setPickerOpen(false); 
  };

  const renderDays = () => {
    const days = getCurrentMonthDays();
    return days.map((day) => {
      const isSelected = selectedDate && day.getDate() === selectedDate.getDate() && day.getMonth() === selectedDate.getMonth() && day.getFullYear() === selectedDate.getFullYear();

      return (
        <div
          key={day.getDate()}
          onClick={() => handleDateClick(day)}
          style={{
            padding: '10px',
            margin: '5px',
            borderRadius: '50%',
            cursor: 'pointer',
            backgroundColor: isSelected ? highlightColor : 'transparent',
            color: isSelected ? 'white' : 'black',
            border: isSelected ? `2px solid ${highlightColor}` : '1px solid lightgray',
            width: '30px',
            textAlign: 'center',
          }}
        >
          {day.getDate()}
        </div>
      );
    });
  };

  return (
    <div>
      <div
        onClick={() => setPickerOpen((prev) => !prev)}
        style={{
          padding: '10px',
          border: '1px solid lightgray',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '200px',
          textAlign: 'center',
          marginBottom: '10px',
        }}
      >
        {selectedDate ? `Selected: ${formatDate(selectedDate)}` : 'Select a date'}
      </div>

      {pickerOpen && (
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '300px', border: '1px solid lightgray', padding: '10px' }}>
          {renderDays()}
        </div>
      )}
    </div>
  );
};

export default SingleDatePicker;
