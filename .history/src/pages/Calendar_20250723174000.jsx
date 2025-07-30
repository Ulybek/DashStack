import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '/src/pages/Calendar.css';

export default function Calendar({ darkMode, setDarkMode }) {
    const [events, setEvents] = useState([
        {
            id: '1',
            title: 'Design Conference',
            start: '2025-07-23T07:00:00',
            end: '2025-07-23T09:00:00',
            color: '#6C63FF'
        },
        {
            id: '2',
            title: 'Weekend Festival',
            start: '2025-07-16T17:00:00',
            color: '#FF6B6B'
        },
        {
            id: '3',
            title: 'Glastonbury Festival',
            start: '2025-07-20',
            end: '2025-07-22',
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
        <div className='calendar-section'>
            <div className="title-box"><h3>Calendar</h3></div>

        </div>
    );
}