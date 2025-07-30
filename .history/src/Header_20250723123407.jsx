import React from 'react';
import { FaMoon, FaSun, FaBars, FaSearch, FaBell, FaChevronDown } from 'react-icons/fa';
import './Header.css';

export default function Header({ darkMode, setDarkMode }) {
    return (
        <header className='header'>
            <div className='navbar-menu-2'>
                <div className='box-1'>
                    <div className='toggle-button'>
                        <FaBars className="burger-icon" />
                    </div>
                    <div className='search'>
                        <FaSearch className="search-icon" />
                        <input id="search" type="text" placeholder='Search' />
                    </div>
                </div>
                <div className='box-2'>
                    <button
                        className="theme-toggle-btn"
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
                    </button>

                    {/* Уведомления */}
                    <div className='message-button'>
                        <FaBell className="message-icon" />
                    </div>

                    {/* Язык */}
                    <div className='language-button-box'>
                        <img src="images/flag.png" alt="flag" />
                        <div className='language-button'>
                            <p>English</p>
                            <FaChevronDown className="dropdown-icon" />
                        </div>
                    </div>

                    {/* Профиль */}
                    <div className='profile-button-box'>
                        <img src="images/profile-icon.png" alt="profile" />
                        <div className='profile-button'>
                            <div className='text'>
                                <h4>Moni Roy</h4>
                                <p>Admin</p>
                            </div>
                            <FaChevronDown className="dropdown-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}