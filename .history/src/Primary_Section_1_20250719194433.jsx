import React from 'react';
import './Primary_Section_1.css';


export default function Primary_Section_1() {
    return (
        <section className='primary-section-1'>
            <div className='title-box'><h3>Dashboard</h3></div>
            <div className='total-objects'>
                {data.total_objects.map((item) => (
                    <div className="total-card" key={item.id}>
                        <div
                            className="slide-image"
                            style={{ backgroundImage: `url(${item.img})` }}>
                            <h3>{item.text}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>


    );
}