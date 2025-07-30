import React from 'react';
import Header from './Header.jsx';
import Dashboard from './Dashboard.jsx';
import { Routes, Route } from 'react-router-dom';
import './Header.css';
import './Main.css';
import Dashboard from './pages/Dashboard.jsx';
import Products from './pages/Products.jsx';
import Favorites from './pages/Favorites.jsx';
import Settings from './pages/Settings.jsx';

export default function Main() {
    return (
        <main className='main'>
            <Header />
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/dashboard" element={<Favorites />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </main>
    );
}