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
                        <img src="/images/filter.png" alt="Filter" class="filter-icon" />
                        <span className="filter-label">Filter By</span>
                    </div>
                    <div className='stick'> </div>
                    <div className="filter-item">
                        <span>Date</span>
                        <img src="/images/dropdown.png" alt="Arrow" class="icon-small" />
                    </div>

                    <div className="filter-item">
                        <span>Order Type</span>
                        <img src="/images/dropdown.png" alt="Arrow" class="icon-small" />
                    </div>

                    <div className="filter-item">
                        <span>Order Status</span>
                        <img src="/images/dropdown.png" alt="Arrow" class="icon-small" />
                    </div>

                    <button className="reset-filter-button">
                        <img src="/images/reset-icon.png" alt="Reset" class="icon-small" />
                        Reset Filter
                    </button>
                </div>
            </div>
        </div>

    );
}