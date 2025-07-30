import React, { useState } from 'react';
import { FiEdit, FiTrash2, FiSearch } from "react-icons/fi";
import ReactPaginate from "react-paginate";
import data from "../data.js";
import '/src/pages/ProductStock.css';
import "react-paginate/theme/basic/react-paginate.css";

export default function ProductStock({ darkMode, setDarkMode }) {
    // --- Состояния ---
    const [searchTerm, setSearchTerm] = useState("");     // Текст из строки поиска
    const [currentPage, setCurrentPage] = useState(1);    // Текущая страница пагинации
    const rowsPerPage = 5;                                // Количество элементов на странице

    // --- Фильтрация продуктов по имени ---
    const filteredProducts = data.product_stock.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // --- Пагинация ---
    const totalPages = Math.ceil(filteredProducts.length / rowsPerPage); // всего страниц
    const startIndex = (currentPage - 1) * rowsPerPage;                   // индекс первого элемента на странице
    const currentProducts = filteredProducts.slice(startIndex, startIndex + rowsPerPage); // продукты для отображения

    // Диапазон для отображения текста "Showing X–Y of Z"
    const showingFrom = filteredProducts.length === 0 ? 0 : startIndex + 1;
    const showingTo = Math.min(startIndex + rowsPerPage, filteredProducts.length);

    return (
        <div className='productstock-section page-main-section-style'>
            {/* Верхняя панель: заголовок и поиск */}
            <div className='higher-container'>
                <div className="title-box">
                    <h3>Product Stock</h3>
                </div>

                {/* Поиск */}
                <div className='search-box'>
                    <FiSearch
                        color={darkMode ? "rgba(178, 178, 178, 1)" : "rgb(60, 60, 60)"}
                        className='search-icon'
                    />
                    <input
                        id="search-product-stock"
                        type="text"
                        placeholder="Search product name"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1); // при поиске сбрасываем пагинацию на первую страницу
                        }}
                    />
                </div>
            </div>

            {/* Таблица с продуктами */}
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
                        {currentProducts.map((product, index) => (
                            <tr key={index} className="orders-table__row">
                                {/* Картинка товара */}
                                <td className="orders-table__cell">
                                    <img
                                        className='image-productstock'
                                        src={product.image}
                                        alt={product.name}
                                    />
                                </td>

                                {/* Название, категория, цена, количество */}
                                <td className="orders-table__cell">{product.name}</td>
                                <td className="orders-table__cell">{product.category}</td>
                                <td className="orders-table__cell">
                                    ${product.price.toFixed(2)}
                                </td>
                                <td className="orders-table__cell">{product.piece}</td>

                                {/* Доступные цвета */}
                                <td className="orders-table__cell">
                                    <div style={{ display: 'flex', gap: '8px' }} className='colors-box'>
                                        {product.colors.map((color, i) => (
                                            <span
                                                key={i}
                                                style={{
                                                    display: 'inline-block',
                                                    width: '20px',
                                                    height: '20px',
                                                    borderRadius: '100%',
                                                    backgroundColor: color
                                                }}
                                            ></span>
                                        ))}
                                    </div>
                                </td>

                                {/* Действия (редактировать/удалить) */}
                                <td className="orders-table__cell">
                                    <div className='setting-box'>
                                        <button className='setting-btn'>
                                            <FiEdit color={darkMode ? "#fff" : "#000"} 
                                            className='set-btn'/>
                                        </button>
                                        <div className='stick'></div>
                                        <button className='setting-btn'>
                                            <FiTrash2 color="#FF3B30"
                                             className='set-btn' />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}

                        {/* Если товаров нет */}
                        {currentProducts.length === 0 && (
                            <tr>
                                <td
                                    colSpan="7"
                                    style={{ textAlign: 'center', padding: '20px', color: '#888' }}
                                >
                                    No products found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Пагинация (если больше одной страницы) */}
            <div className="pagination-wrapper">
                <div className="pagination-info">
                    Showing {showingFrom}–{showingTo} of {filteredProducts.length}
                </div>
                {totalPages > 1 && (
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
                        forcePage={currentPage - 1} // сохраняем актуальную страницу
                    />
                )}
            </div>
        </div>
    );
}