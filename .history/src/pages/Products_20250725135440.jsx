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
        <div className='products-section'>
            {/* Заголовок страницы */}
            <div className='title-box'><h3>Products</h3></div>

            {/* Слайдер с событиями/рекламными баннерами */}
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

            {/* Слайдеры с группами товаров */}
            <div className='outside-container-product-carousel-wrapper'>
                <div className="product-carousel-wrapper">
                    {groupedProducts.map((group, index) => (
                        <Splide
                            key={index}
                            options={{
                                perPage: 1,             // 1 группа на слайде
                                gap: '1rem',            // отступы
                                arrows: true,           // стрелки
                                pagination: false,      // убираем точки
                                breakpoints: {          // адаптив
                                    1024: { perPage: 1 },
                                },
                            }}
                        >
                            {group.map((product) => {
                                const isFav = favorites.includes(product.id); // проверка, в избранном ли товар

                                return (
                                    <SplideSlide key={product.id}>
                                        <div className="product-card">
                                            {/* Картинка товара */}
                                            <div className="product-image">
                                                <img src={product.image} alt={product.title} />
                                            </div>

                                            {/* Нижняя часть карточки (контент + избранное) */}
                                            <div className='product-down'>
                                                <div className='product-content'>
                                                    {/* Название и цена */}
                                                    <h4 className="product-title">{product.title}</h4>
                                                    <p className="product-price">{product.price}</p>

                                                    {/* Рейтинг (звёзды + количество отзывов) */}
                                                    <div className="product-rating">
                                                        {'★'.repeat(product.rating)}
                                                        {'☆'.repeat(5 - product.rating)}
                                                        <span className="review-count">({product.reviews})</span>
                                                    </div>

                                                    {/* Кнопка редактирования */}
                                                    <button className="edit-button">Edit Product</button>
                                                </div>

                                                {/* Кнопка "избранное" (сердце) */}
                                                <div
                                                    className='fav-btn'
                                                    onClick={() => toggleFavorite(product.id)}
                                                >
                                                    {isFav ? (
                                                        // Если в избранном — заполненное сердце (красное)
                                                        <AiFillHeart size={28} color="#FF4C61" />
                                                    ) : (
                                                        // Если не в избранном — пустое сердце (цвет зависит от темы)
                                                        <AiOutlineHeart size={28} color={darkMode ? "#fff" : "#000"} />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </SplideSlide>
                                );
                            })}
                        </Splide>
                    ))}
                </div>
            </div>
        </div>
    );
}