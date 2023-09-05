"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/geekbro-logo.png";
const Carousel = ({ images, carouselHeight }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1,
    );
  };

  const carouselStyle = {
    height: carouselHeight || "400px", // Вы можете настроить высоту здесь
  };

  return (
    <div className="w-screen relative" style={carouselStyle}>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
      >
        &#8249;
      </button>
      <Image
        src={images[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        className="w-full max-h-full object-cover"
      />
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
      >
        &#8250;
      </button>
    </div>
  );
};
export default Carousel;
