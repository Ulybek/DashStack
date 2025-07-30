import { useState } from 'react';
import { menuItems } from './data';
import './Aside.css';

export default function Aside() {
  const [activeItem, setActiveItem] = useState('dashboard');

  const renderMenuSection = (section) => (
    <div className="aside-section" key={section.section}>
      {section.title && <p>{section.title}</p>}
      {section.items.map((item) => {
        const isActive = activeItem === item.id;
        const iconSrc = `images/${item.icon}-${isActive ? '-black' : '-white'}.png`;

        return (
          <li key={item.id}>
            <a
              href="#"
              className={isActive ? 'active' : ''}
              onClick={() => setActiveItem(item.id)}
            >
              <div className="image-box">
                <img src={iconSrc} alt={item.label} />
              </div>
              <div className="">
                <h4>{item.label}</h4>
              </div>
            </a>
          </li>
        );
      })}
    </div>
  );

  return (
    <aside className="aside">
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
                <>
                  {renderMenuSection(section)}
                  {index < menuItems.length - 1 && <div className="stick"></div>}
                </>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
}