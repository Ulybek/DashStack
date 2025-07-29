import React, { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import '@splidejs/react-splide/css';
import '/src/pages/Favorites.css';
import data from '/src/data.js';

export default function Favorites({ darkMode, setDarkMode }) {
    // Количество элементов (продуктов) в одной группе (для слайдера)
    const groupSize = 2;

    // Массив группированных данных (каждая группа = 2 продукта)
    const groupedFavourites = [];
    for (let i = 0; i < data.favorites.length; i += groupSize) {
        groupedFavourites.push(data.favorites.slice(i, i + groupSize));
    }

    // Локальное состояние избранных товаров (список ID)
    const [favorites, setFavorites] = useState([]);

    // Переключение состояния "избранного" для товара
    const toggleFavorite = (productId) => {
        setFavorites((prev) =>
            prev.includes(productId)
                ? prev.filter((id) => id !== productId) // если уже в избранном — удалить
                : [...prev, productId]                  // иначе — добавить
        );
    };

    return (
        <div className='favorite-section page-main-section-style'>
            <div className='title-box'>
                <h3>Favorites</h3>
            </div>

            <div className="favorite-carousel-wrapper">
                {/* Перебираем группы товаров для создания отдельных слайдеров */}
                {groupedFavourites.map((group, index) => (
                    <Splide
                        key={index}
                        options={{
                            perPage: 1,          // показываем 1 группу на слайде
                            gap: '1rem',         // отступ между элементами
                            arrows: true,        // стрелки переключения
                            pagination: false,   // без пагинации (точек)
                            breakpoints: {       // адаптив
                                1024: { perPage: 1 },
                            },
                        }}
                    >
                        {/* Каждый товар внутри группы */}
                        {group.map((product) => {
                            const isFav = favorites.includes(product.id); // проверяем, в избранном ли товар

                            return (
                                <SplideSlide key={product.id}>
                                    <div className="product-card">
                                        {/* Картинка товара */}
                                        <div className="product-image">
                                            <img src={product.image} alt={product.title} />
                                        </div>

                                        {/* Блок с информацией и кнопками */}
                                        <div className='product-down'>
                                            <div className='product-content'>
                                                {/* Название, цена */}
                                                <h4 className="product-title">{product.title}</h4>
                                                <p className="product-price">{product.price}</p>

                                                {/* Рейтинг (звёзды) и количество отзывов */}
                                                <div className="product-rating">
                                                    {'★'.repeat(product.rating)}
                                                    {'☆'.repeat(5 - product.rating)}
                                                    <span className="review-count">({product.reviews})</span>
                                                </div>

                                                {/* Кнопка редактирования */}
                                                <button className="edit-button">Edit Product</button>
                                            </div>

                                            {/* Кнопка избранного (сердце) */}
                                            <div
                                                className='fav-btn'
                                                onClick={() => toggleFavorite(product.id)}
                                            >
                                                {isFav ? (
                                                    // Если в избранном — красное сердце
                                                    <AiFillHeart size={28} color="#FF4C61" />
                                                ) : (
                                                    // Если не в избранном — контур сердца
                                                    <AiOutlineHeart
                                                        size={28}
                                                        color={darkMode ? "rgba(249, 60, 101, 1)" : "#000"}
                                                    />
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
    );
}