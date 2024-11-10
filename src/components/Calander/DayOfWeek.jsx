import React from 'react';

function DayOfWeek() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();
  const dayName = daysOfWeek[today];

  return (
    <div>
      <p>Today is {dayName}.</p>
    </div>
  );
}

export default DayOfWeek;
