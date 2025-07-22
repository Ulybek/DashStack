import React from 'react';
import '/src/pages/ProductStock.css';

export default function ProductStock() {
    return (
        <div className='productstock-section'>
            <div className='Higher-container'>
                <div className="title-box"><h3>Product Stock</h3></div>
                <div className='search-box'>
                    <img src="/images/search-icon.png" alt="" />
                    <input id="search" type="text" placeholder="Search product name" />
                </div>
            </div>
            {/* <div className="box-table">
                <table className="orders-table">
                    <thead className="orders-table__head">
                        <tr>
                            <th className="orders-table__header">Image</th>
                            <th className="orders-table__header">Product Name</th>
                            <th className="orders-table__header">Category</th>
                            <th className="orders-table__header">Price</th>
                            <th className="orders-table__header">Piece</th>
                            <th className="orders-table__header">Available Color</th>
                            <th className="orders-table__header">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedData.length > 0 ? (
                            displayedData.map((row) => (
                                <tr key={row.id} className="orders-table__row">
                                    <td className="orders-table__cell">{row.id}</td>
                                    <td className="orders-table__cell">{row.name}</td>
                                    <td className="orders-table__cell">{row.address}</td>
                                    <td className="orders-table__cell">{row.date}</td>
                                    <td className="orders-table__cell">{row.type}</td>
                                    <td className="orders-table__cell status-cell">
                                        <span className={getStatusClass(row.status)}>{row.status}</span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="orders-table__empty">
                                    No results found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div> */}
        </div>
    );
}