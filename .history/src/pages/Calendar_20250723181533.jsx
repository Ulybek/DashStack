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
            avatars: ['/images/calendar-avatar-3.png', '/images/calendar-avatar-3.png', '/images/calendar-avatar-3.png'],
            icon: '',
            color: '#6C63FF'
        },
        {
            id: '2',
            title: 'Weekend Festival',
            start: '2025-07-16T17:00:00',
            location: '853 Moore Flats Suite 158, Sweden',
            participants: 20,
            avatars: ['/images/calendar-avatar-1.png', '/images/calendar-avatar-2.png', '/images/calendar-avatar-3.png'],
            color: '#FF6B6B'
        },
        {
            id: '3',
            title: 'Glastonbury Festival',
            start: '2025-07-20',
            end: '2025-07-22',
            location: '646 Walter Road Apt. 571, Turks and Caicos Islands',
            participants: 14,
            avatars: ['/images/calendar-avatar-2.png', '/images/calendar-avatar-3.png'],
            color: '#FFB347'
        },
        {
            id: '4',
            title: 'Ultra Europe 2019',
            start: '2025-07-25T22:00:00',
            location: '506 Satterfield Tunnel Apt. 963, San Marino',
            participants: 42,
            avatars: ['/images/calendar-avatar-3.png', '/images/calendar-avatar-3.png', '/images/calendar-avatar-3.png'],
            color: '#2F80ED'
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
        <div className='calendar-section'> <div className="title-box"><h3>Calendar</h3></div>
            <div className='calendar-wrapper'>

                {/* Левая панель */}
                <div className="calendar-sidebar">
                    <button className="add-event-btn">+ Add New Event</button>
                    <h4 className="sidebar-title">You are going to</h4>
                    <ul className="event-list">
                        {events.map((event, idx) => (
                            <React.Fragment key={event.id}>
                                <li className="event-item">
                                    <div className="event-icon">
                                        {event.avatars[0] ? (
                                            <img src={event.avatars[0]} alt="icon" className="event-main-avatar" />
                                        ) : (
                                            <div className="placeholder-icon"></div>
                                        )}
                                    </div>
                                    <div className="event-info">
                                        <div className="event-title">{event.title}</div>
                                        <div className="event-time">
                                            {new Date(event.start).toLocaleDateString('en-GB', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            })}{' '}
                                            at {new Date(event.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </div>
                                        <div className="event-location">{event.location}</div>
                                        <div className="event-avatars">
                                            {event.avatars.slice(0, 4).map((src, idx) => (
                                                <img key={idx} src={src} alt="avatar" className="avatar" />
                                            ))}
                                            <span className="participants">{event.participants}+</span>
                                        </div>
                                    </div>
                                </li>

                                {/* Разделитель */}
                                {idx < events.length - 1 && <hr className="event-divider" />}
                            </React.Fragment>
                        ))}
                    </ul>
                    <button className="see-more-btn">See More</button>
                </div>

                {/* Основной календарь */}
                <div className='calendar-section'>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        headerToolbar={{
                            left: 'prev,next YToday',
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
        </div>
    );
}