import { useState, useEffect, useRef } from 'react';
import { menuItems } from './data.js';
import './Aside.css';

export default function Aside() {
  const [activeItem, setActiveItem] = useState(null);
  const asideRef = useRef(null); // ссылка на Aside

  // 💡 Сброс активного пункта при клике вне aside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (asideRef.current && !asideRef.current.contains(event.target)) {
        setActiveItem(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const renderMenuSection = (section) => (
    <div className="aside-section" key={section.section}>
      {section.title && <p>{section.title}</p>}
      {section.items.map((item) => {
        const isActive = activeItem === item.id;
        const iconPath = `/images/${item.icon}-icon-${isActive ? 'white' : 'black'}.png`;

        return (
          <li key={item.id}>
            <a
              href="#"
              className={isActive ? 'active' : ''}
              onClick={(e) => {
                e.stopPropagation(); // ⛔️ остановить всплытие (чтобы не сработал общий reset)
                if (isActive) {
                  setActiveItem(null);
                } else {
                  setActiveItem(item.id);
                }
              }}
            >
              <div className="image-box">
                <img src={iconPath} alt={item.label} />
              </div>
              <div>
                <h4>{item.label}</h4>
              </div>
            </a>
          </li>
        );
      })}
    </div>
  );

  return (
    <aside className="aside" ref={asideRef}>
      <div className="outer-block-navbar">
        <div className="logo-heading">
          <h3>
            <span style={{ color: '#3986FB' }}>Dash</span>Stack
          </h3>
        </div>
        <div className="navbar-menu-1">
          <nav className="navbar">
            <ul className="ul_main">
              {menuItems.map((section, index) => (
                <div key={section.section || index}>
                  {renderMenuSection(section)}
                  {index < menuItems.length - 1 && <div className="stick"></div>}
                </div>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
}
