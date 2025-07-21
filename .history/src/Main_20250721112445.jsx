import React from 'react';
import Header from './Header.jsx';
import Dashboard from './Dashboard.jsx';
import './Header.css';
import './Main.css';

export default function Main() {
    return (
        <main className='main'>
            <Header />
            <Dashboard />
        </main>
    );
}