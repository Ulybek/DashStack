import { useState } from 'react';
import './Aside.css';
function Sidebar() {
    const [active, setActive] = useState('dashboard');

export default function Aside() {
    return (
        <aside className='aside'>
            <div className='outer-block-navbar'>
                <div className='logo-heading'>
                    <h3><span style={{ color: '#3986FB' }}>Dash</span>Stack</h3>
                </div>
                <div className='navbar-menu-1'>
                    <nav className='navbar'>
                        <ul className='ul_main'>
                        <div className='aside-section'>
                                <li>
                                    <a href="#" className="">
                                        <div className="image-box"><img src="images/dashboard-icon-black.png" alt="" /></div>
                                        <div className=""><h4>Dashboard</h4></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="">
                                        <div className="image-box"><img src="images/products-icon-black.png" alt="" /></div>
                                        <div className=""> <h4>Products</h4></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="">
                                        <div className="image-box"><img src="images/favorites-icon-black.png" alt="" /></div>
                                        <div className=""> <h4>Favorites</h4></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="">
                                        <div className="image-box"><img src="images/inbox-icon-black.png" alt="" /></div>
                                        <div className=""> <h4>Inbox</h4></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="">
                                        <div className="image-box"><img src="images/orderlists-icon-black.png" alt="" /></div>
                                        <div className=""> <h4>Order Lists</h4></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="">
                                        <div className="image-box"><img src="images/productstock-icon-black.png" alt="" /></div>
                                        <div className=""> <h4>Product Stock</h4></div>
                                    </a>
                                </li>
                            </div>
                            <div className='stick'></div>
                            <div className='aside-section'>
                                <p>PAGES</p>
                                <li>
                                    <a href="#" className="">
                                        <div className="image-box"><img src="images/pricing-icon-black.png" alt="" /></div>
                                        <div className=""> <h4>Pricing</h4></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="">
                                        <div className=""><img src="images/calendar-icon-black.png" alt="" /></div>
                                        <div className=""> <h4>Calendar</h4></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="">
                                        <div className="image-box"><img src="images/to-do-icon-black.png" alt="" /></div>
                                        <div className=""> <h4>To-Do</h4></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="">
                                        <div className="image-box"><img src="images/contact-icon-black.png" alt="" /></div>
                                        <div className=""> <h4>Contact</h4></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="">
                                        <div className="image-box"><img src="images/invoice-icon-black.png" alt="" /></div>
                                        <div className=""> <h4>Invoice</h4></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="">
                                        <div className="image-box"><img src="images/UIElements-icon-black.png" alt="" /></div>
                                        <div className=""> <h4>UI Elements</h4></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="">
                                        <div className="image-box"><img src="images/team-icon-black.png" alt="" /></div>
                                        <div className=""> <h4>Team</h4></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="">
                                        <div className="image-box"><img src="images/table-icon-black.png" alt="" /></div>
                                        <div className=""> <h4>Table</h4></div>
                                    </a>
                                </li>
                            </div>
                            <div className='stick'></div>
                            <div className='aside-section'>
                                <li>
                                    <a href="#" className="">
                                        <div className="image-box"><img src="images/settings-icon-black.png" alt="" /></div>
                                        <div className=""> <h4>Settings</h4></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="">
                                        <div className="image-box"><img src="images/logout-icon-black.png" alt="" /></div>
                                        <div className="image-box"><h4>Logout</h4></div>
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    );
}