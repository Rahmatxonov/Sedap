import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

const Calendar = ({ isDarkMode }) => {
  return (
    <div
      className={`mt-5 p-5 rounded-lg shadow-md ${
        isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-900'
      }`}
    >
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        events={[
          {
            title: 'Spicy Nugget',
            date: '2021-04-02',
            backgroundColor: '#f87171',
          },
          {
            title: 'Pizza la Piazza',
            date: '2021-04-02',
            backgroundColor: '#facc15',
          },
          {
            title: 'New Event',
            start: '2021-04-07T08:04:00',
            end: '2021-04-07T10:23:00',
            backgroundColor: '#34d399',
          },
        ]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        height="auto"
        eventContent={(eventInfo) => (
          <div
            className={`px-2 py-1 text-sm font-medium rounded-md ${
              isDarkMode ? 'text-gray-900' : 'text-white'
            }`}
            style={{ backgroundColor: eventInfo.event.backgroundColor }}
          >
            {eventInfo.event.title}
          </div>
        )}
        dayHeaderClassNames={`${
          isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
        }`}
        dayCellClassNames={`${
          isDarkMode ? 'border-gray-600' : 'border-gray-300'
        }`}
      />
    </div>
  );
};

export default Calendar;
