import React from 'react';
import '/src/pages/OrderLists.css';

export default function OrderLists() {
    return (
        <div className='orderlists-section'>
            <div className='title-box'><h3>Order Lists</h3></div>
            <div className='menu-order'>
                <div className='image-box'><img src="filter.png" alt="" /> </div>
            </div>
        </div>
    );
}