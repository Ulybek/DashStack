import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header.jsx';
import './Header.css';
import './Main.css';
import Dashboard from './pages/Dashboard.jsx';
import Products from './pages/Products.jsx';
import Favorites from './pages/Favorites.jsx';
import OrderLists from './pages/OrderLists.jsx';
import ProductStock from './pages/ProductStock.jsx';
import Pricing from './pages/Pricing.jsx';
import Calendar from './pages/Calendar.jsx';
import ToDo from './pages/ToDo.jsx';
import Contact from './pages/Contact.jsx';
import Invoice from './pages/Invoice.jsx';
import UIElements from './pages/UIElements.jsx';
import Team from './pages/Team.jsx';
import Table from './pages/Table.jsx';
import Settings from './pages/Settings.jsx';
import Logout from './pages/Logout.jsx';

export default function Main({ darkMode, setDarkMode, setSidebarOpen, mainRef }) {
    return (
        <main className="main" ref={mainRef}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} setSidebarOpen={setSidebarOpen} />
            <div className="main-content">
                <Routes>
                    <Route path="*" element={<Navigate to="/dashboard" />} />
                    <Route path="/dashboard" element={<Dashboard darkMode={darkMode} setDarkMode={setDarkMode} />} />
                    <Route path="/products" element={<Products darkMode={darkMode} setDarkMode={setDarkMode} />} />
                    <Route path="/favorites" element={<Favorites darkMode={darkMode} setDarkMode={setDarkMode} />} />
                    <Route path="/orderlists" element={<OrderLists darkMode={darkMode} setDarkMode={setDarkMode} />} />
                    <Route path="/productstock" element={<ProductStock darkMode={darkMode} setDarkMode={setDarkMode} />} />
                    <Route path="/pricing" element={<Pricing darkMode={darkMode} setDarkMode={setDarkMode} />} />
                    <Route path="/calendar" element={<Calendar darkMode={darkMode} setDarkMode={setDarkMode} />} />
                    <Route path="/todo" element={<ToDo darkMode={darkMode} setDarkMode={setDarkMode} />} />
                    <Route path="/contact" element={<Contact darkMode={darkMode} setDarkMode={setDarkMode} />} />
                    <Route path="/invoice" element={<Invoice darkMode={darkMode} setDarkMode={setDarkMode} />} />
                    <Route path="/uielements" element={<UIElements darkMode={darkMode} setDarkMode={setDarkMode} />} />
                    <Route path="/team" element={<Team darkMode={darkMode} setDarkMode={setDarkMode} />} />
                    <Route path="/table" element={<Table darkMode={darkMode} setDarkMode={setDarkMode} />} />
                    <Route path="/settings" element={<Settings darkMode={darkMode} setDarkMode={setDarkMode} />} />
                    <Route path="/logout" element={<Logout darkMode={darkMode} setDarkMode={setDarkMode} />} />
                </Routes>
            </div>
        </main>
    );
}