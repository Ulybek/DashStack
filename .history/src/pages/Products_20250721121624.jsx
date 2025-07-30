import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '/src/pages/Products.css';

export default function Products() {
    return (
        <div className='products-section'>
            <div className='title-box'><h3>Products</h3></div>
            <div className="slides-container">
                <Splide
                    options={{
                        type: 'loop',
                        autoplay: true,
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
                            <p className="date-text">August 1–10</p>
                            <h2>Big Summer Sale is Live Now</h2>
                            <p className="subtitle">Up to 50% off on all fashion categories.</p>
                            <button className="cta-button">Shop Now</button>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    );
}