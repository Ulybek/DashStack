import { useState, useEffect, useRef } from 'react';
import data from './data.js';
import './Aside.css';
import { Link } from 'react-router-dom';

export default function Aside() {
  const [activeItem, setActiveItem] = useState(null);
  const asideRef = useRef(null);

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
        const Icon = item.icon;

        return (
          <li key={item.id}>
            <Link
              to={item.path}
              className={isActive ? 'active' : ''}
              onClick={(e) => {
                e.stopPropagation();
                setActiveItem(isActive ? null : item.id);
              }}
            >
              <div className="icon-box">
                <Icon className={`menu-icon ${isActive ? 'active-icon' : ''}`} />
              </div>
              <div>
                <h4 className={isActive ? 'active-text' : ''}>{item.label}</h4>
              </div>
            </Link>
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
              {data.menuItems.map((section, index) => (
                <div key={section.section || index}>
                  {renderMenuSection(section)}
                  {index < data.menuItems.length - 1 && <div className="stick"></div>}
                </div>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
}