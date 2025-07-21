import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '/src/pages/Products.css';
import data from '/src/data.js'

export default function Products() {
    return (
        <div className='products-section'>
            <div className='title-box'><h3>Products</h3></div>
            <div className="slides-container">
                <Splide
                    options={{
                        type: 'loop',
                        autoplay: false,
                        interval: 4000,
                        pauseOnHover: true,
                        arrows: true,
                        pagination: false,
                    }}
                    className="hero-splide"
                >
                    <SplideSlide>
                        <div className="slide-content">
                            <p className="date-text">September 12–22</p>
                            <h2>Enjoy free home delivery in this summer</h2>
                            <p className="subtitle">Designer Dresses – Pick from trendy Designer Dress.</p>
                            <button className="cta-button">Get Started</button>
                        </div>
                    </SplideSlide>

                    <SplideSlide>
                        <div className="slide-content">
                            <p className="date-text">September 12–22</p>
                            <h2>Enjoy free home delivery in this summer</h2>
                            <p className="subtitle">Designer Dresses – Pick from trendy Designer Dress.</p>
                            <button className="cta-button">Get Started</button>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
            <div className="product-carousel-wrapper">
                <Splide
                    options={{
                        perPage: 3,
                        gap: '1rem',
                        arrows: true,
                        pagination: false,
                        breakpoints: {
                            1024: { perPage: 2 },
                            640: { perPage: 1 },
                        },
                    }}
                >
                    {data.products.map((product) => (
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
                                    <div className='fav-btn'><img src="/images/favorites-icon-black.png" /></div>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
                <Splide
                    options={{
                        perPage: 3,
                        gap: '1rem',
                        arrows: true,
                        pagination: false,
                        breakpoints: {
                            1024: { perPage: 2 },
                            640: { perPage: 1 },
                        },
                    }}
                >
                    {data.products.map((product) => (
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
                                    <div className='fav-btn'><img src="/images/favorites-icon-black.png" /></div>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
                <Splide
                    options={{
                        perPage: 3,
                        gap: '1rem',
                        arrows: true,
                        pagination: false,
                        breakpoints: {
                            1024: { perPage: 2 },
                            640: { perPage: 1 },
                        },
                    }}
                >
                    {data.products.map((product) => (
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
                                    <div className='fav-btn'><img src="/images/favorites-icon-black.png" /></div>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
}