import React from 'react';
import data from "../data.js";
import '/src/pages/ProductStock.css';

export default function ProductStock() {
    return (
        <div className='productstock-section'>
            <div className='higher-container'>
                <div className="title-box"><h3>Product Stock</h3></div>
                <div className='search-box'>
                    <img src="/images/search-icon.png" alt="search" />
                    <input id="search-product-stock" type="text" placeholder="Search product name" />
                </div>
            </div>
            <div className="box-table">
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
                        {data.product_stock.map((product, index) => (
                            <tr key={index} className="orders-table__row">
                                <td className="orders-table__cell">
                                    <img className='image-productstock' src={product.image} alt={product.name} />
                                </td>
                                <td className="orders-table__cell">{product.name}</td>
                                <td className="orders-table__cell">{product.category}</td>
                                <td className="orders-table__cell">${product.price.toFixed(2)}</td>
                                <td className="orders-table__cell">{product.piece}</td>
                                <td className="orders-table__cell">
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        {product.colors.map((color, i) => (
                                            <span key={i} style={{
                                                display: 'inline-block',
                                                width: '20px',
                                                height: '20px',
                                                borderRadius: '100%',
                                               
                                            }}></span>
                                        ))}
                                    </div>
                                </td>
                                <td className="orders-table__cell">
                                    <div className='setting-box'>
                                        <button className='setting-btn'>
                                            <img src="/images/pencil-write.png" alt="edit" />
                                        </button>
                                        <div className='stick'></div>
                                        <button className='setting-btn'>
                                            <img src="/images/bin.png" alt="delete" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}