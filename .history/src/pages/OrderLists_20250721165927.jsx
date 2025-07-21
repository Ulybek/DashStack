import React from 'react';
import '/src/pages/OrderLists.css';

export default function OrderLists() {
    return (
        <div className="orderlists-section">
            <div className="title-box">
                <h3>Order Lists</h3>
            </div>

            <div class="menu-order">
                <table class="filter-table">
                    <tr>
                        <td className='filter-cell'>
                            <img src="/images/filter.png" alt="Filter" class="filter-icon" />
                        </td>
                        <td class="filter-cell">
                            <span class="filter-label">Filter By</span>
                        </td>
                        <td class="filter-cell">
                            <span>Date</span>
                            <img src="/images/dropdown.png" alt="Arrow" class="icon-small" />
                        </td>
                        <td class="filter-cell">
                            <span>Order Type</span>
                            <img src="/images/dropdown.png" alt="Arrow" class="icon-small" />
                        </td>
                        <td class="filter-cell">
                            <span>Order Status</span>
                            <img src="/images/dropdown.png" alt="Arrow" class="icon-small" />
                        </td>
                        <td class="filter-cell reset-cell">
                            <button class="reset-filter-button">
                                <img src="/images/reset-icon.png" alt="Reset" class="icon-small" />
                                Reset Filter
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>

    );
}