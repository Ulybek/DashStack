import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import 'swiper/css';
import 'swiper/css/navigation';
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

      {/* Баннер слайдер */}
      <div className="outside-events-container">
        <div className="events-container">
          <Swiper
            modules={[Navigation]}
            navigation
            loop
            slidesPerView={1}
            className="banner-swiper"
          >
            {data.events.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="slide-content">
                  <p className="date-text">{slide.date}</p>
                  <h2>{slide.title}</h2>
                  <p className="subtitle">{slide.subtitle}</p>
                  <button className="cta-button">{slide.buttonText}</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Продукты (3 карточки в ряд) */}
      <div className="product-carousel-wrapper">
        <Swiper
          modules={[Navigation]}
          navigation
          loop
          spaceBetween={25}
          slidesPerView={1}
          breakpoints={{
            1400: { slidesPerView: 3 },
            1024: { slidesPerView: 2 },
            640: { slidesPerView: 1 }
          }}
          className="products-swiper"
        >
          {data.products.map((product) => {
            const isFav = favorites.includes(product.id);
            return (
              <SwiperSlide key={product.id}>
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
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}