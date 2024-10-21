import React, { useState } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

function CalendarComponent() {
  const [events, setEvents] = useState([
    // ... your initial events
  ]);

  const handleEventSelect = (event) => {
    // Handle event selection (e.g., show details)
    console.log(event);
  };

  return (
    <BigCalendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      titleAccessor="title"
      view="month"
      selectable={true}
      onSelectEvent={handleEventSelect}
      eventPropGetter={(event) => ({
        style: {
          backgroundColor: event.color,
        },
      })}
    />
  );
}

export default CalendarComponent