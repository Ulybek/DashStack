import React from 'react';
import Header from './Header.jsx';
import Main_Section_1 from './Main_Section_1.jsx';
import './Header.css';
import './Main.css';

export default function Main() {
    return (
        <main className='main'>
           <Header/>
           <Main_Section_1/>
        </main>
    );
}