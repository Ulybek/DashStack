import React from 'react';
import data from './data.js';
import './Primary_Section_1.css';


export default function Primary_Section_1() {
    return (
        <section className='primary-section-1'>
            <div className='title-box'><h3>Dashboard</h3></div>
            <div className='total-objects'>
                {data.total_objects.map((items) => (
                    <div className="card" key={items.id}>
                        <div className=''>
                            <div className='text-box'>
                                <h4>{items.label}</h4>
                                <h2>{items.number}</h2>
                            </div>
                            <img src={items.img} alt={items.label} />
                        </div>
                    </div>
                ))}
            </div>
        </section>


    );
}