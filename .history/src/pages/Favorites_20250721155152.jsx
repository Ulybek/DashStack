import React from 'react';
import data from '/src/data.js';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '/src/pages/Favorites.css'

export default function Favorites() {
    const groupSize = 1;
    const groupedFavourites = [];

    for (let i = 0; i < data.favorites.length; i += groupSize) {
        groupedFavourites.push(data.favorites.slice(i, i + groupSize));
    }
    return (
        <div className='favorite-section'>
            <div className='title-box'><h3>Favorites</h3></div>
            <div className="product-carousel-wrapper">

                {groupedFavourites.map((group, index) => (
                    <Splide
                        key={index}
                        options={{
                            perPage: 1,
                            gap: '1rem',
                            arrows: true,
                            pagination: false,
                            breakpoints: {
                                1024: { perPage: 1 },
                            },
                        }}
                    >
                        {group.map((product) => (
                            <SplideSlide key={product.id}>
                                <div className="product-card">
                                    <div className="product-image">
                                        <img src={product.image} alt={product.title} />
                                    </div>
                                    <div className='product-down'>
                                        <div className='product-content'>
                                            <h4 className="product-title">{product.title}</h4>
                                            <p className="product-price">{product.price}</p>
                                            <div className="product-rating">
                                                {'★'.repeat(product.rating)}
                                                {'☆'.repeat(5 - product.rating)}
                                                <span className="review-count">({product.reviews})</span>
                                            </div>
                                            <button className="edit-button">Edit Product</button>
                                        </div>
                                        <div className='fav-btn'>
                                            <img src="/images/favorites-icon-black.png" alt="fav" />
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                ))}
            </div>
        </div>
    );
}