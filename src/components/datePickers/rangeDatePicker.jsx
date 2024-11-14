import React, { useState } from 'react';

const RangeDatePicker = ({ highlightColor, selectedDates, onDateChange }) => {
  const [hoveredDate, setHoveredDate] = useState(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [openOption, setOpenOption] = useState('');

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const getMonthDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    return Array.from({ length: daysInMonth }, (_, i) => new Date(currentYear, currentMonth, i + 1));
  };

  const formatDate = (date) => date ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}` : '';

  const handleDateClick = (date) => {
    if (!selectedDates.start || selectedDates.end) {
      onDateChange({ start: date, end: null });
    } else {
      const startDate = selectedDates.start;
      if (date < startDate) {
        onDateChange({ start: date, end: startDate });
      } else {
        onDateChange({ ...selectedDates, end: date });
      }
      setPickerOpen(false);
    }
  };

  const handleMouseEnter = (date) => setHoveredDate(date);
  const handleMouseLeave = () => setHoveredDate(null);

  const isInRange = (day) => {
    if (!selectedDates.start || (!selectedDates.end && !hoveredDate)) return false;
    const endDate = selectedDates.end || hoveredDate;
    return day >= selectedDates.start && day <= endDate;
  };

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleMonthChange = (e) => {
    setCurrentMonth(parseInt(e.target.value));
  };

  const handleYearChange = (e) => {
    const year = parseInt(e.target.value);
    if (year > 1900 && year < 2100) {
      setCurrentYear(year);
      // setOpenOption('')
    }
  };

  const renderDays = () => {
    const days = getMonthDays();
    const daysToRender = Array(42).fill(null);
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const totalDaysInPrevMonth = getDaysInMonth((currentMonth === 0 ? 11 : currentMonth - 1), currentYear);

    const daysFromPrevMonth = firstDayOfMonth === 0 ? 0 : firstDayOfMonth;

    for (let i = 0; i < daysFromPrevMonth; i++) {
      const dayFromPrevMonth = totalDaysInPrevMonth - daysFromPrevMonth + i + 1;
      daysToRender[i] = new Date(currentYear, currentMonth - 1, dayFromPrevMonth);
    }

    days.forEach((day, index) => {
      daysToRender[daysFromPrevMonth + index] = day;
    });

    const weeks = [];
    for (let i = 0; i < daysToRender.length; i += 7) {
      weeks.push(daysToRender.slice(i, i + 7));
    }

    return weeks.map((week, weekIndex) => {
      const hasCurrentMonthDay = week.some(day => day && day.getMonth() === currentMonth);

      if (weekIndex === weeks.length - 1 && !hasCurrentMonthDay) {
        return null;
      }

      return (
        <div key={weekIndex} style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          {week.map((day, index) => {
            const isSelected = day && (day.getTime() === selectedDates.start?.getTime() || day.getTime() === selectedDates.end?.getTime());
            const inRange = day && isInRange(day);
            const isCurrentMonthDay = day && day.getMonth() === currentMonth;

            return (
              <div
                key={index}
                onClick={() => isCurrentMonthDay && handleDateClick(day)}
                onMouseEnter={() => isCurrentMonthDay && handleMouseEnter(day)}
                onMouseLeave={handleMouseLeave}
                style={{
                  padding: '10px',
                  margin: '2px',
                  borderRadius: '50%',
                  cursor: isCurrentMonthDay ? 'pointer' : 'not-allowed',
                  backgroundColor: isSelected || inRange ? highlightColor : 'transparent',
                  color: isSelected || inRange ? 'white' : 'black',
                  border: isSelected ? `2px solid ${highlightColor}` : '1px solid lightgray',
                  width: '5%',
                  height: '30%',
                  textAlign: 'center',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: isCurrentMonthDay ? 1 : 0.5,
                }}
              >
                {day ? day.getDate() : ''}
              </div>
            );
          })}
        </div>
      );
    }).filter(Boolean);
  };

  const renderWeekDays = () => (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      {weekDays.map((day) => (
        <div key={day} style={{ width: '30px', textAlign: 'center' }}>{day}</div>
      ))}
    </div>
  );

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div
        onClick={() => setPickerOpen((prev) => !prev)}
        style={{
          padding: '10px',
          border: '1px solid lightgray',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '100%', // Set width to 100% to fill the parent container
          textAlign: 'center',
          marginBottom: '10px',
        }}
      >
        {selectedDates.start && selectedDates.end
          ? `Selected: ${formatDate(selectedDates.start)} - ${formatDate(selectedDates.end)}`
          : selectedDates.start
            ? `Selected: ${formatDate(selectedDates.start)}`
            : 'Select a range'}
      </div>

      {pickerOpen && (
        <div
          style={{
            position: 'absolute',
            top: '50px',
            zIndex: 10,
            backgroundColor: 'white',
            padding: '10px',
            width: '100%',
            border: '1px solid lightgray',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            fontSize: '12px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <button onClick={goToPreviousMonth} style={{ cursor: 'pointer' }}>←</button>
            <div>
              <span onClick={() => setOpenOption('month')} style={{ cursor: 'pointer' }}>

                {openOption == 'month' ? (
                  <div>
                    <select value={currentMonth} onChange={handleMonthChange}>
                      {months.map((month, index) => (
                        <option key={index} value={index}>{month}</option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <>{months[currentMonth]}</>
                )}
              </span>{' '}
              <span onClick={() => setOpenOption('year')} style={{ cursor: 'pointer' }}>
                {openOption == 'year' ? (
                  <div>
                    <input type="number" value={currentYear} onChange={handleYearChange} />
                  </div>)
                  : (
                    <>{currentYear}</>
                  )}
              </span>
            </div>
            <button onClick={goToNextMonth} style={{ cursor: 'pointer' }}>→</button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span>{formatDate(selectedDates.start)} - {formatDate(selectedDates.end)}</span>
          </div>


          {renderWeekDays()}
          {renderDays()}
        </div>
      )}
    </div>
  );
};

export default RangeDatePicker;
