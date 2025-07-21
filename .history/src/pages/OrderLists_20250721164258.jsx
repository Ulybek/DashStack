import React from 'react';
import '/src/pages/OrderLists.css';

export default function OrderLists() {
    return (
        <div className="orderlists-section">
            <div className="title-box">
                <h3>Order Lists</h3>
            </div>

            <div className="menu-order">
                <div className="filter-container">
                    <div className="filter-item">
                        <img src="/images/filter.png" alt="Filter" className="filter-icon" />
                        <span className="filter-label">Filter By</span>
                    </div>

                    <div className="filter-item">
                        <span>Date</span>
                        <img src="/images/arrow-down.svg" alt="Arrow" className="icon-small" />
                    </div>

                    <div className="filter-item">
                        <span>Order Type</span>
                        <img src="/images/arrow-down.svg" alt="Arrow" className="icon-small" />
                    </div>

                    <div className="filter-item">
                        <span>Order Status</span>
                        <img src="/images/arrow-down.svg" alt="Arrow" className="icon-small" />
                    </div>

                    <button className="reset-filter-button">
                        <img src="/images/reset-icon.svg" alt="Reset" className="icon-small" />
                        Reset Filter
                    </button>
                </div>
            </div>

        </div>

    );
}