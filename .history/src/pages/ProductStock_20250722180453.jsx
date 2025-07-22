import React, { useState } from 'react';
import ReactPaginate from "react-paginate";
import data from "../data.js";
import '/src/pages/ProductStock.css';
import "react-paginate/theme/basic/react-paginate.css";

export default function ProductStock() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = data.product_stock.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='productstock-section'>
            <div className='higher-container'>
                <div className="title-box"><h3>Product Stock</h3></div>
                <div className='search-box'>
                    <img src="/images/search-icon.png" alt="search" />
                    <input
                        id="search-product-stock"
                        type="text"
                        placeholder="Search product name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
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
                        {filteredProducts.map((product, index) => (
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
                                                backgroundColor: color
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
                        {filteredProducts.length === 0 && (
                            <tr>
                                <td colSpan="7" style={{ textAlign: 'center', padding: '20px', color: '#888' }}>
                                    No products found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
             {/* Пагинация + индикатор */}
             <div className="pagination-wrapper">
                <div className="pagination-info">
                    Showing {showingFrom}–{showingTo} of {filteredData.length}
                </div>
                {filteredData.length > rowsPerPage && (
                    <ReactPaginate
                        previousLabel={"←"}
                        nextLabel={"→"}
                        breakLabel={"..."}
                        pageCount={totalPages}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={3}
                        onPageChange={({ selected }) => setCurrentPage(selected + 1)}
                        containerClassName={"pagination"}
                        activeClassName={"active"}
                        previousClassName={"page-item"}
                        nextClassName={"page-item"}
                        pageClassName={"page-item"}
                        breakClassName={"page-item"}
                        disabledClassName={"disabled"}
                        forcePage={currentPage - 1}
                    />
                )}
            </div>
        </div>
    );
}