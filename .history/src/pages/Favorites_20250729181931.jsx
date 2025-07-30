import React, { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import '@splidejs/react-splide/css';
import '/src/pages/Favorites.css';
import data from '/src/data.js';

export default function Favorites({ darkMode, setDarkMode }) {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (productId) => {
        setFavorites((prev) =>
            prev.includes(productId)
                ? prev.filter((id) => id !== productId)
                : [...prev, productId]
        );
    };

    return (
        <div className='favorite-section page-main-section-style'>
            <div className='title-box'>
                <h3>Favorites</h3>
            </div>

            <div className="favorite-carousel-wrapper">
                <Splide
                    options={{
                        type: 'loop',
                        perPage: 3,
                        gap: '1rem',
                        arrows: true,
                        pagination: false,
                        breakpoints: {
                            1024: { perPage: 3 },
                            700: { perPage: 2 },
                        }
                    }}
                >
                    {data.favorites.map((product) => {
                        const isFav = favorites.includes(product.id);

                        return (
                            <SplideSlide key={product.id}>
                                <div className="product-card">
                                    <div className="product-image">
                                        <img src={product.image} alt={product.title} />
                                    </div>
                                    <div className="product-down">
                                        <div className="product-content">
                                            <h4 className="product-title">{product.title}</h4>
                                            <p className="product-price">{product.price}</p>
                                            <div className="product-rating">
                                                {'★'.repeat(product.rating)}
                                                {'☆'.repeat(5 - product.rating)}
                                                <span className="review-count">({product.reviews})</span>
                                            </div>
                                            <button className="edit-button">Edit Product</button>
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