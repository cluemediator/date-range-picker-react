import React, { useState } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

function App() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <div className="App">
      <h5 className="mb-3">Date Range Picker in React - <a href="https://www.cluemediator.com">Clue Mediator</a></h5>
      <DateRangePicker
        startDate={startDate}
        startDateId="s_id"
        endDate={endDate}
        endDateId="e_id"
        onDatesChange={({ startDate, endDate }) => { setStartDate(startDate); setEndDate(endDate); }}
        focusedInput={focusedInput}
        onFocusChange={e => setFocusedInput(e)}
        displayFormat="DD/MM/YYYY"
      />
      <div className="mt-3 mb-1">Start Date: {startDate && startDate.format('ll')}</div>
      <div>End Date: {endDate && endDate.format('ll')}</div>
    </div>
  );
}

export default App;
