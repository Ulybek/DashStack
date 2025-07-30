import React, { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import '@splidejs/react-splide/css';
import '/src/pages/Products.css';
import data from '/src/data.js';

export default function Products({ darkMode }) {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (id) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    return (
        <div className="products-section">
            <div className="title-box"><h3>Products</h3></div>

            {/* Баннер-слайдер (events) */}
            <div className="outside-events-container">
                <div className="events-container">
                    <Splide
                        options={{
                            type: 'loop',
                            arrows: true,
                            pagination: false,
                            autoplay: false,
                            gap: '1rem',
                        }}
                        className="hero-splide"
                    >
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

            {/* Один Splide для всех продуктов */}
            <div className="product-carousel-wrapper">
                <Splide
                    options={{
                        type: 'loop',
                        perPage: 2,
                        perMove: 1,
                        gap: '25px',
                        arrows: true,
                        pagination: false,
                        breakpoints: {
                            1024: { perPage: 2 },
                            640: { perPage: 1 }
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
                                            <h4 className="product-title">{product.title}</h4>
                                            <p className="product-price">{product.price}</p>
                                            <div className="product-rating">
                                                {'★'.repeat(product.rating)}
                                                {'☆'.repeat(5 - product.rating)}
                                                <span className="review-count">({product.reviews})</span>
                                            </div>
                                            <button className="edit-button">Edit Product</button>
                                        </div>
                                        <div className="fav-btn" onClick={() => toggleFavorite(product.id)}>
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