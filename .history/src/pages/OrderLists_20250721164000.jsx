import React from 'react';
import '/src/pages/OrderLists.css';

export default function OrderLists() {
    return (
        <div className="orderlists-section">
            <div className="title-box">
                <h3>Order Lists</h3>
            </div>

            <div className="menu-order">
                <div className="image-box">
                    <img src="filter.png" alt="" />
                </div>
            </div>

            <div className="filter-bar">
                <div className="filter-item">
                    <img src="/images/filter.png" alt="Filter" className="filter-icon" />
                    <span className="filter-label">Filter By</span>
                </div>

                <div className="filter-item">
                    <span>Date</span>
                    <svg className="dropdown-icon" viewBox="0 0 24 24">
                        <path d="M7 10l5 5 5-5H7z" />
                    </svg>
                </div>

                <div className="filter-item">
                    <span>Order Type</span>
                    <svg className="dropdown-icon" viewBox="0 0 24 24">
                        <path d="M7 10l5 5 5-5H7z" />
                    </svg>
                </div>

                <div className="filter-item">
                    <span>Order Status</span>
                    <svg className="dropdown-icon" viewBox="0 0 24 24">
                        <path d="M7 10l5 5 5-5H7z" />
                    </svg>
                </div>

                <button className="reset-button">
                    <svg className="reset-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0zm9 4v-4H8" />
                    </svg>
                    Reset Filter
                </button>
            </div>
        </div>

    );
}