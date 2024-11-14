import RangeDatePicker from "./rangeDatePicker";
import SingleDatePicker from "./singleDatePicker";

const DateRangePicker = ({ highlightColor, mode, selectedDates, onDateChange }) => {
  return (
    <div>
      {mode === 'single' ? (
        <SingleDatePicker
          highlightColor={highlightColor}
          selectedDate={selectedDates.start}
          onDateChange={(date) => onDateChange({ start: date, end: null })}
        />
      ) : (
        <RangeDatePicker
          highlightColor={highlightColor}
          selectedDates={selectedDates}
          onDateChange={onDateChange}
        />
      )}
    </div>
  );
};
export default DateRangePicker;