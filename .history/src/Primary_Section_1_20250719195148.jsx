import React from 'react';
import data from './data.js';
import './Primary_Section_1.css';


export default function Primary_Section_1() {
    return (
        <section className='primary-section-1'>
            <div className='title-box'><h3>Dashboard</h3></div>
            <div className='total-objects'>
                {data.total_objects.map((item) => (
                    <div className="card" key={item.id}>
                        <div className=''>
                            <div className='text-box'>
                                <h4>{item.label}</h4>
                                <h2>{item.number}</h2>
                            </div>
                            <img src={item.img} alt={item.label} />
                        </div>
                    </div>
                ))}
            </div>
        </section>


    );
}