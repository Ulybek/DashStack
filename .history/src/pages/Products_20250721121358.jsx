import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '/src/pages/Products.css';

export default function Products() {
    return (
        <div className='products-section'>
            <div className='title-box'><h3>Products</h3></div>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 3000 }}
                loop={true}
                className="hero-swiper"
            >
                <SwiperSlide>
                    <div className="slide-content">
                        <p>September 12–22</p>
                        <h2>Enjoy free home delivery in this summer</h2>
                        <p>Designer Dresses – Pick from trendy Designer Dress.</p>
                        <button className="btn">Get Started</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content">
                        <p>September 12–22</p>
                        <h2>Enjoy free home delivery in this summer</h2>
                        <p>Designer Dresses – Pick from trendy Designer Dress.</p>
                        <button className="btn">Get Started</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}