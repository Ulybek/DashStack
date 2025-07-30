import React from 'react';
import Header from './Header.jsx';
import Primary_Section_1 from './Primary_Section_1.jsx';
import './Header.css';
import './Main.css';

export default function Main() {
    return (
        <main className='main'>
           <Header/>
           <Primary_Section_1/>
        </main>
    );
}