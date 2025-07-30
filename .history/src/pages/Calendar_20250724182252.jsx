import React, { useState, useRef, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { createPopper } from '@popperjs/core';
import '/src/pages/Calendar.css';

export default function Calendar() {
    const [events, setEvents] = useState([
        {
            id: '1',
            title: 'Design Conference',
            start: '2025-07-23T07:19:00',
            location: '56 Davion Mission Suite 157, Meaghanberg',
            participants: 15,
            avatars: ['/images/calendar-avatar-3.png'],
            image: '/images/calendar-event-image.png',
            color: '#6C63FF'
        },
        {
            id: '2',
            title: 'Weekend Festival',
            start: '2025-07-16T17:00:00',
            location: '853 Moore Flats Suite 158, Sweden',
            participants: 20,
            avatars: ['/images/calendar-avatar-1.png', '/images/calendar-avatar-2.png'],
            image: '/images/calendar-event-image.png',
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
            image: '/images/calendar-event-image.png',
            color: '#FFB347'
        },
        {
            id: '4',
            title: 'Ultra Europe 2019',
            start: '2025-07-25T22:00:00',
            location: '506 Satterfield Tunnel Apt. 963, San Marino',
            participants: 42,
            avatars: ['/images/calendar-avatar-3.png'],
            image: '/images/calendar-event-image.png',
            color: '#2F80ED'
        }
    ]);

    const [selectedEvent, setSelectedEvent] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const popperRef = useRef(null);
    const popperInstance = useRef(null);


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newEvent, setNewEvent] = useState({
        title: '',
        location: '',
        date: '',
        time: '',
        imageFile: null,
        imagePreview: '',
        color: '#4CAF50'
    });

    const colors = ['#6C63FF', '#FF6B6B', '#FFB347', '#2F80ED', '#4CAF50', '#9C27B0'];

    // Обработчик выбора файла
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewEvent({
                ...newEvent,
                imageFile: file,
                imagePreview: URL.createObjectURL(file)
            });
        }
    };

    const handleAddEvent = () => {
        if (!newEvent.title || !newEvent.date || !newEvent.time) {
            alert('Please enter title, date and time!');
            return;
        }

        const newEventObj = {
            id: String(events.length + 1),
            title: newEvent.title,
            start: `${newEvent.date}T${newEvent.time}`,
            location: newEvent.location || 'No location specified',
            participants: 1, 
            avatars: ['/images/calendar-avatar-1.png'], 
            image: newEvent.imagePreview || '/images/calendar-event-image.png', 
            color: newEvent.color || '#4CAF50'
        };

       
        setEvents([newEventObj, ...events]);

     
        setIsModalOpen(false);
        setNewEvent({
            title: '',
            location: '',
            date: '',
            time: '',
            imageFile: null,
            imagePreview: '',
            color: '#4CAF50'
        });
    };

    const handleClosePopup = () => {
        setSelectedEvent(null);
        setAnchorEl(null);
    };

    // Popper позиционирование
    useEffect(() => {
        if (anchorEl && popperRef.current) {
            popperInstance.current = createPopper(anchorEl, popperRef.current, {
                placement: 'auto',
                modifiers: [
                    { name: 'flip', options: { fallbackPlacements: ['top', 'right', 'left'] } },
                    { name: 'preventOverflow', options: { boundary: 'viewport' } },
                    { name: 'offset', options: { offset: [0, 10] } }
                ],
            });
        }
        return () => {
            if (popperInstance.current) {
                popperInstance.current.destroy();
                popperInstance.current = null;
            }
        };
    }, [anchorEl]);

    const handleEventClick = (clickInfo) => {
        if (selectedEvent && selectedEvent.id === clickInfo.event.id) {

            handleClosePopup();
        } else {

            setSelectedEvent(clickInfo.event);
            setAnchorEl(clickInfo.el);
        }
    };

    useEffect(() => {
        const handleClickOutside = (e) => {

            if (
                popperRef.current &&
                !popperRef.current.contains(e.target) &&
                (!anchorEl || !anchorEl.contains(e.target))
            ) {
                handleClosePopup();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [anchorEl]);

    return (
        <div className='calendar-section'>
            <div className="title-box"><h3>Calendar</h3></div>
            <div className='calendar-wrapper'>
                {/* Левая панель */}
                <div className="calendar-sidebar">
                    <button className="add-event-btn" onClick={() => setIsModalOpen(true)}>+ Add New Event</button>
                    <h4 className="sidebar-title">You are going to</h4>
                    <div className="event-divider"></div>
                    <ul className="event-list">
                        {events.map((event, idx) => (
                            <li key={event.id} className="event-item">
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
                                        at {new Date(event.start).toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </div>
                                    <div className="event-location">{event.location}</div>
                                    <div className="event-avatars">
                                        {event.avatars.slice(0, 4).map((src, idx) => (
                                            <img key={idx} src={src} alt="avatar" className="avatar" />
                                        ))}
                                        <span className="participants">{event.participants}+</span>
                                    </div>
                                </div>

                                {/* Линия под элементом (кроме последнего) */}
                                {idx < events.length - 1 && <div className="event-divider"></div>}
                            </li>
                        ))}
                    </ul>
                    <button className="see-more-btn">See More</button>
                </div>

                {/* Основной календарь */}
                <div className='calendar'>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={false}
                        events={events}
                        eventClick={handleEventClick}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay'
                        }}
                        buttonText={{
                            today: 'Today',
                            month: 'Month',
                            week: 'Week',
                            day: 'Day'
                        }}
                        eventContent={(arg) => {
                            const colorMap = {
                                '1': '#6C63FF',  // Фиолетовый
                                '2': '#FF6B6B',  // Красный
                                '3': '#FFB347',  // Оранжевый
                                '4': '#2F80ED',  // Синий
                            };
                            const color = colorMap[arg.event.id] || '#487fff';

                            const hexToRgba = (hex, alpha = 0.2) => {
                                const r = parseInt(hex.slice(1, 3), 16);
                                const g = parseInt(hex.slice(3, 5), 16);
                                const b = parseInt(hex.slice(5, 7), 16);
                                return `rgba(${r},${g},${b},${alpha})`;
                            };
                            const darkenColor = (hex, factor = 0.7) => {
                                const r = Math.floor(parseInt(hex.slice(1, 3), 16) * factor);
                                const g = Math.floor(parseInt(hex.slice(3, 5), 16) * factor);
                                const b = Math.floor(parseInt(hex.slice(5, 7), 16) * factor);
                                return `rgb(${r},${g},${b})`;
                            };

                            return (
                                <div
                                    className="custom-event-fc"
                                    style={{
                                        backgroundColor: hexToRgba(color, 0.2),
                                        borderLeft: `4px solid ${color}`,
                                        color: darkenColor(color, 0.8),
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        borderRadius: '0',
                                        padding: '10px 8px',
                                        margin: '0'
                                    }}
                                >
                                    {arg.event.title}
                                </div>
                            );
                        }}
                    />
                    {/* Popup (всплывающее окно) */}
                    {selectedEvent && (
                        <div ref={popperRef} className="event-popup">
                            {selectedEvent.extendedProps.image && (
                                <img
                                    src={selectedEvent.extendedProps.image}
                                    alt="Event"
                                    className="popup-image"
                                />
                            )}
                            <div className="popup-content">
                                <h4>{selectedEvent.title}</h4>
                                <p>
                                    {new Date(selectedEvent.start).toLocaleTimeString([], {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                    })}
                                </p>
                                <p>{selectedEvent.extendedProps.location}</p>
                                <div className="popup-avatars">
                                    {selectedEvent.extendedProps.avatars?.slice(0, 3).map((src, idx) => (
                                        <img key={idx} src={src} alt="avatar" />
                                    ))}
                                    <span>{selectedEvent.extendedProps.participants}+</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* Модалка для добавления события */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Add New Event</h3>
                        <input
                            type="text"
                            placeholder="Event Title"
                            value={newEvent.title}
                            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Location"
                            value={newEvent.location}
                            onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                        />
                        <input
                            type="date"
                            value={newEvent.date}
                            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                        />
                        <input
                            type="time"
                            value={newEvent.time}
                            onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                        />
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                        {newEvent.imagePreview && (
                            <div className="image-preview">
                                <img src={newEvent.imagePreview} alt="Preview" style={{ maxWidth: '100%', borderRadius: '8px', marginTop: '8px' }} />
                            </div>
                        )}
                        <div className="color-picker">
                            <p>Select Event Color:</p>
                            <div className="color-options">
                                {colors.map((clr) => (
                                    <div
                                        key={clr}
                                        className={`color-circle ${newEvent.color === clr ? 'selected' : ''}`}
                                        style={{ backgroundColor: clr }}
                                        onClick={() => setNewEvent({ ...newEvent, color: clr })}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="modal-actions">
                            <button onClick={handleAddEvent}>Add</button>
                            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}