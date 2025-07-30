import { useState, useEffect, useRef } from 'react';
import data from './data.js';
import './Aside.css';
import { Link } from 'react-router-dom';

export default function Aside({ darkMode, sidebarOpen, setSidebarOpen }) {
  // --- Состояние активного пункта меню ---
  const [activeItem, setActiveItem] = useState(null);

  // --- Ссылка на Aside (для проверки клика вне области меню) ---
  const asideRef = useRef(null);

  // --- Обработчик клика вне Aside: закрывает активный элемент ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Если кликнули вне Aside, сбрасываем активный пункт
      if (asideRef.current && !asideRef.current.contains(event.target)) {
        setActiveItem(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  /**
   * Рендеринг секции меню
   * @param {Object} section - объект с данными секции (заголовок и элементы)
   */
  const renderMenuSection = (section) => (
    <div className="aside-section" key={section.section}>
      {/* Заголовок секции */}
      {section.title && <p>{section.title}</p>}

      {/* Список элементов секции */}
      {section.items.map((item) => {
        const isActive = activeItem === item.id;  // проверка активного состояния
        const Icon = item.icon;                   // компонент иконки

        return (
          <li key={item.id}>
            <Link
              to={item.path}
              className={isActive ? 'active' : ''}
              onClick={(e) => {
                e.stopPropagation();             // предотвращает всплытие клика
                // Переключаем активность (снимаем или устанавливаем)
                setActiveItem(isActive ? null : item.id);
              }}
            >
              {/* Иконка элемента меню */}
              <div className="icon-box">
                <Icon className={`menu-icon ${isActive ? 'active-icon' : ''}`} />
              </div>

              {/* Название пункта меню */}
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
    <aside className={`aside ${sidebarOpen ? 'open' : ''}`} ref={asideRef}>
      <div className="outer-block-navbar">
        {/* Логотип/название панели */}
        <div className="logo-heading">
          <h3>
            <span style={{ color: '#3986FB' }}>Dash</span>Stack
          </h3>
        </div>

        {/* Меню навигации */}
        <div className="navbar-menu-1">
          <nav className="navbar">
            <ul className="ul_main">
              {data.menuItems.map((section, index) => (
                <div key={section.section || index}>
                  {/* Рендер секции */}
                  {renderMenuSection(section)}

                  {/* Разделительная линия (не ставим после последней секции) */}
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