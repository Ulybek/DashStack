import React from 'react';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';

import './Header.css';


export default function Header({ darkMode, setDarkMode }) {
    return (
        <header className='header'>
            <div className='navbar-menu-2'>
                <div className='box-1'>
                    <div className='toggle-button'><img src="images/navbar-burger.png" alt="" /></div>
                    <div className='search'>
                        <img src="images/search-icon.png" alt="" />
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
                    <div className='message-button'>
                        <img src="images/message-icon.png" alt="" />
                    </div>
                    <div className='language-button-box'>
                        <img src="images/language-icon.png" alt="" />
                        <div className='language-button'>
                            <p>English</p>
                            <img className='dropdown-img' src="images/dropdown.png" alt="" />
                        </div>
                    </div>
                    <div className='profile-button-box'>
                        <img src="images/profile-icon.png" alt="" />
                        <div className='profile-button'>
                            <div className='text'>
                                <h4>Moni Roy</h4>
                                <p>Admin</p>
                            </div>
                            <img className='dropdown-img' src="images/circle-dropdown.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}