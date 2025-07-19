import { useState } from 'react';
import { menuItems } from './data.js';
import './Aside.css';

export default function Aside() {
  const [activeItem, setActiveItem] = useState('dashboard');


  const mainItems = menuItems.filter(item => !item.section);
  const pageItems = menuItems.filter(item => item.section === 'PAGES');
  const settingItems = menuItems.filter(item => item.section === 'SETTINGS');


  const renderSection = (items, showTitle = false, title = '') => (
    <div className='aside-section'>
      {showTitle && <p>{title}</p>}
      {items.map(item => {
        const isActive = activeItem === item.id;
        const iconSrc = `images/${item.icon}-${isActive ? 'white' : 'black'}.png`;

        return (
          <li key={item.id}>
            <a href="#" onClick={() => setActiveItem(item.id)} className={isActive ? 'active-link' : ''}>
              <div className="image-box"><img src={iconSrc} alt={item.label} /></div>
              <div><h4>{item.label}</h4></div>
            </a>
          </li>
        );
      })}
    </div>
  );

  return (
    <aside className='aside'>
      <div className='outer-block-navbar'>
        <div className='logo-heading'>
          <h3><span style={{ color: '#3986FB' }}>Dash</span>Stack</h3>
        </div>
        <div className='navbar-menu-1'>
          <nav className='navbar'>
            <ul className='ul_main'>
              {renderSection(mainItems)}
              <div className='stick'></div>
              {renderSection(pageItems, true, 'PAGES')}
              <div className='stick'></div>
              {renderSection(settingItems)}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
}
