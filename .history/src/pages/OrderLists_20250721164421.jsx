import React from 'react';
import '/src/pages/OrderLists.css';

export default function OrderLists() {
    return (
        <div className="orderlists-section">
            <div className="title-box">
                <h3>Order Lists</h3>
            </div>

            <div class="menu-order">
                <div class="filter-container">
                    <div class="filter-item">
                        <img src="/images/filter.png" alt="Filter" class="filter-icon" />
                        <span class="filter-label">Filter By</span>
                    </div>

                    <div class="filter-item">
                        <span>Date</span>
                        <img src="/images/arrow-down.svg" alt="Arrow" class="icon-small" />
                    </div>

                    <div class="filter-item">
                        <span>Order Type</span>
                        <img src="/images/arrow-down.svg" alt="Arrow" class="icon-small" />
                    </div>

                    <div class="filter-item">
                        <span>Order Status</span>
                        <img src="/images/arrow-down.svg" alt="Arrow" class="icon-small" />
                    </div>

                    <button class="reset-filter-button">
                        <img src="/images/reset-icon.svg" alt="Reset" class="icon-small" />
                        Reset Filter
                    </button>
                </div>
            </div>
        </div>

    );
}