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

      {/* Разделитель между событиями */}
      {idx < events.length - 1 && <div className="event-divider"></div>}
    </React.Fragment>
  ))}
</ul>