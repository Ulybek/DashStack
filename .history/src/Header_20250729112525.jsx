import React from 'react';
import { FaMoon, FaSun, FaBars, FaBell, FaChevronDown } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import './Header.css';

export default function Header({ darkMode, setDarkMode, setSidebarOpen }) {
    return (
        <header className='header'>
            <div className='navbar-menu-2'>
                <div className='box-1'>
                    <div className='toggle-button' onClick={(e) => {
                        e.stopPropagation(); 
                        setSidebarOpen(prev => !prev);}}>
                        <FaBars className="burger-icon" />
                    </div>
                    <div className='search'>
                        <FiSearch className="search-icon" />
                        <input id="search" type="text" placeholder='Search' />
                    </div>
                </div>
                <div className='box-2'>
                    {/* Анимированный переключатель темы */}
                    <div
                        className={`theme-switch ${darkMode ? 'dark' : 'light'}`}
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        <div className="switch-circle">
                            {darkMode ? <FaMoon /> : <FaSun />}
                        </div>
                    </div>

                    {/* Уведомления */}
                    <div className='message-button'>
                        <FaBell className="message-icon" />
                    </div>

                    {/* Язык */}
                    <div className='language-button-box'>
                        <img src="images/language-icon.png" alt="flag" />
                        <div className='language-button'>
                            <p className="language-text">English</p>
                            <FaChevronDown className="dropdown-icon" />
                        </div>
                    </div>

                    {/* Профиль */}
                    <div className='profile-button-box'>
                        <img src="images/profile-icon.png" alt="profile" />
                        <div className='profile-button'>
                            <div className='text'>
                                <h4 className="profile-name">Moni Roy</h4>
                                <p className="profile-role">Admin</p>
                            </div>
                            <FaChevronDown className="dropdown-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}