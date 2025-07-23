import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '/src/pages/Calendar.css';

export default function Calendar() {
  const [events, setEvents] = useState([
    {
      id: '1',
      title: 'Design Conference',
      start: '2025-07-23T07:19:00',
      location: '56 Davion Mission Suite 157, Meaghanberg',
      participants: 15,
      avatars: ['/avatars/a1.png', '/avatars/a2.png', '/avatars/a3.png'],
      color: '#6C63FF'
    },
    {
      id: '2',
      title: 'Weekend Festival',
      start: '2025-07-16T17:00:00',
      location: '853 Moore Flats Suite 158, Sweden',
      participants: 20,
      avatars: ['/avatars/a4.png', '/avatars/a5.png', '/avatars/a6.png'],
      color: '#FF6B6B'
    },
    {
      id: '3',
      title: 'Glastonbury Festival',
      start: '2025-07-20',
      end: '2025-07-22',
      location: '646 Walter Road Apt. 571, Turks and Caicos Islands',
      participants: 14,
      avatars: ['/avatars/a7.png', '/avatars/a8.png'],
      color: '#FFB347'
    }
  ]);

  const handleDateSelect = (selectInfo) => {
    const title = prompt('Введите название события:');
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();

    if (title) {
      const newEvent = {
        id: String(events.length + 1),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        participants: 0,
        avatars: [],
        location: '',
        color: '#4CAF50'
      };
      setEvents([...events, newEvent]);
    }
  };

  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Удалить событие "${clickInfo.event.title}"?`)) {
      clickInfo.event.remove();
    }
  };

  return (
    <div className='calendar-wrapper'>
      {/* Левая панель */}
      <div className="calendar-sidebar">
        <button className="add-event-btn">+ Add New Event</button>
        <h4>You are going to</h4>
        <ul className="event-list">
          {events.map(event => (
            <li key={event.id} className="event-item">
              <div className="event-title">{event.title}</div>
              <div className="event-time">
                {new Date(event.start).toLocaleDateString()}{" "}
                {new Date(event.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
              <div className="event-location">{event.location}</div>
              <div className="event-avatars">
                {event.avatars.map((src, idx) => (
                  <img key={idx} src={src} alt="avatar" className="avatar" />
                ))}
                <span className="participants">+{event.participants}</span>
              </div>
            </li>
          ))}
        </ul>
        <button className="see-more-btn">See More</button>
      </div>

      {/* Основной календарь */}
      <div className='calendar-section'>
        <div className="title-box"><h3>Calendar</h3></div>

        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          initialView="dayGridMonth"
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          events={events}
          select={handleDateSelect}
          eventClick={handleEventClick}
          editable={true}
        />
      </div>
    </div>
  );
}