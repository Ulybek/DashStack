import React from 'react';
import Header from './Header.jsx';
import { Routes, Route } from 'react-router-dom';
import './Header.css';
import './Main.css';
import Dashboard from './pages/Dashboard.jsx';
import Products from './pages/Products.jsx';
import Favorites from './pages/Favorites.jsx';
import OrderLists from './pages/OrderLists.jsx';
import ProductStock from './pages/ProductStock.jsx';
import Pricing from './pages/Pricing.jsx';
import Settings from './pages/Settings.jsx';

export default function Main() {
    return (
        <main className='main'>
            <Header />
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/orderlists" element={<OrderLists />} />
                <Route path="/productstock" element={<ProductStock />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/orderlists" element={<OrderLists />} />
            </Routes>
        </main>
    );
}