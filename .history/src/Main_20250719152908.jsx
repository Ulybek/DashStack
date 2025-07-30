import React from 'react';
import Header from './Header.jsx';
import Main-Section-1 from './Main-Section-1';
import './Header.css';
import './Main.css';


export default function Main() {
    return (
        <main className='main'>
           <Header/>
           <Main-Section-1/>
        </main>
    );
}