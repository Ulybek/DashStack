import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import data from './data.js';
import './Aside.css';

export default function Aside() {
  const [activeItem, setActiveItem] = useState(null);
  const asideRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const current = data.menuItems
      .flatMap(section => section.items)
      .find(item => item.path === location.pathname);
    if (current) setActiveItem(current.id);
  }, [location]);

  const renderMenuSection = (section) => (
    <div className="aside-section" key={section.section}>
      {section.title && <p>{section.title}</p>}
      {section.items.map((item) => {
        const isActive = activeItem === item.id;
        const iconPath = `/images/${item.icon}-icon-${isActive ? 'white' : 'black'}.png`;

        return (
          <li key={item.id}>
            <Link
              to={item.path}
              className={isActive ? 'active' : ''}
              onClick={() => setActiveItem(item.id)}
            >
              <div className="image-box">
                <img src={iconPath} alt={item.label} />
              </div>
              <div>
                <h4>{item.label}</h4>
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
          <h3><span style={{ color: '#3986FB' }}>Dash</span>Stack</h3>
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