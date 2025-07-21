import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/todo" element={<ToDo />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/invoice" element={<Invoice />} />
                <Route path="/uielements" element={<UIElements />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </main>
    );
}