import React from 'react';
import '/src/pages/OrderLists.css';

export default function OrderLists() {
    return (
        <div className='orderlists-section'>
            <div className="bg-green-500 text-white p-4 rounded">
                Tailwind работает!
            </div>
            <div className='title-box'><h3>Order Lists</h3></div>
            <div className='menu-order'>
                <div className='image-box'><img src="filter.png" alt="" /> </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border text-sm">

                <div className="flex items-center gap-2 border-r pr-4">
                    <img src="/images/filter.png" alt="Filter" className="w-5 h-5" />
                    <span className="font-medium">Filter By</span>
                </div>

                <div className="flex items-center gap-2 border-r pr-4">
                    <span>Date</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M7 10l5 5 5-5H7z" />
                    </svg>
                </div>

                <div className="flex items-center gap-2 border-r pr-4">
                    <span>Order Type</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M7 10l5 5 5-5H7z" />
                    </svg>
                </div>

                <div className="flex items-center gap-2 border-r pr-4">
                    <span>Order Status</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M7 10l5 5 5-5H7z" />
                    </svg>
                </div>

                <button className="flex items-center gap-2 text-pink-600 font-medium hover:underline ml-auto">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0zm9 4v-4H8" />
                    </svg>
                    Reset Filter
                </button>
            </div>
        </div>
    );
}