import React, { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import '@splidejs/react-splide/css';
import '/src/pages/Products.css';
import data from '/src/data.js';

export default function Products({ darkMode, setDarkMode }) {
    // --- Группировка товаров для слайдера ---
    const groupSize = 3; // количество товаров в одном слайде
    const groupedProducts = [];
    for (let i = 0; i < data.products.length; i += groupSize) {
        groupedProducts.push(data.products.slice(i, i + groupSize));
    }

    // --- Состояние для избранных товаров ---
    const [favorites, setFavorites] = useState([]);

    // --- Обработчик добавления/удаления товара в избранное ---
    const toggleFavorite = (productId) => {
        setFavorites((prev) =>
            prev.includes(productId)
                ? prev.filter((id) => id !== productId) // удаляем, если уже в избранном
                : [...prev, productId]                 // добавляем, если ещё нет
        );
    };

    return (
        <div className='products-section page-main-section-style'>
            {/* Заголовок страницы */}
            <div className='title-box'><h3>Products</h3></div>

            {/* Слайдер с событиями/рекламными баннерами */}
            <div className='outside-events-container'>
                <div className="events-container">
                    <Splide
                        options={{
                            type: 'loop',           // бесконечный цикл
                            autoplay: false,        // автоматическая прокрутка (выключена)
                            interval: 4000,         // интервал автоплей (если включить)
                            pauseOnHover: true,     // пауза при наведении
                            arrows: true,           // стрелки переключения
                            pagination: false,      // убираем точки
                        }}
                        className="hero-splide"
                    >
                        {/* Перебор данных events для слайдов */}
                        {data.events.map((slide) => (
                            <SplideSlide key={slide.id}>
                                <div className="slide-content">
                                    <p className="date-text">{slide.date}</p>
                                    <h2>{slide.title}</h2>
                                    <p className="subtitle">{slide.subtitle}</p>
                                    <button className="cta-button">{slide.buttonText}</button>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>

            {/* Слайдеры с группами товаров */}
            {/* Слайдер с товарами (один, без дублирования) */}
            <div className="product-carousel-wrapper">
                <Splide
                    options={{
                        type: 'loop',
                        perPage: 4,
                        perMove: 1,
                        gap: '25px',
                        arrows: true,
                        pagination: false,
                        breakpoints: {
                            1440: { perPage: 4 },
                            1024: { perPage: 3 },
                            700: { perPage: 2 },
                            479: { perPage: 1 }
                        }
                    }}
                >
                    {data.products.map((product) => {
                        const isFav = favorites.includes(product.id);
                        return (
                            <SplideSlide key={product.id}>
                                <div className="product-card">
                                    <div className="product-image">
                                        <img src={product.image} alt={product.title} />
                                    </div>
                                    <div className="product-down">
                                        <div className="product-content">
                                            <div className='style-position-up'>
                                                <h4 className="product-title">{product.title}</h4>
                                                <p className="product-price">{product.price}</p>
                                            </div>
                                            <div className='style-position-down'>
                                                <div className="product-rating">
                                                    {'★'.repeat(product.rating)}
                                                    {'☆'.repeat(5 - product.rating)}
                                                    <span className="review-count">({product.reviews})</span>
                                                </div>
                                                <button className="edit-button">Edit Product</button>
                                            </div>
                                        </div>
                                        <div
                                            className="fav-btn"
                                            onClick={() => toggleFavorite(product.id)}
                                        >
                                            {isFav
                                                ? <AiFillHeart size={28} color="#FF4C61" />
                                                : <AiOutlineHeart size={28} color={darkMode ? '#fff' : '#000'} />}
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </div>

        </div>
    );
}
