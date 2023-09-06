"use client";

import React, { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";

interface ImageProps {
  src: StaticImageData;
  alt: string;
  backgroundColor: string;
  cursorColor: string;
}

const Carousel = ({ images }: { images: ImageProps[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    resetTimer();
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1,
    );
    resetTimer();
  };

  const containerStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    transition: "transform 0.5s ease",
  };

  // Function to change slide automatically every 5 seconds
  const autoChangeSlide = () => {
    nextSlide();
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(autoChangeSlide, 5000);
  };

  useEffect(() => {
    resetTimer();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div
      className="w-screen relative"
      style={{
        height: "40rem",
        overflow: "hidden",
      }}
    >
      <button
        onClick={prevSlide}
        className={`absolute z-10 left-4 top-1/2 transform -translate-y-1/2 text-3xl ${
          images[currentSlide]["cursorColor"] === "black"
            ? "text-black"
            : "text-white"
        }`}
      >
        &#8249;
      </button>
      <div
        className="carousel-container"
        // @ts-ignore
        style={{
          ...containerStyle,
          transform: `translateX(-${currentSlide * 100}%)`, // Adjust for slide position
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="carousel-image"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: image.backgroundColor,
              left: `${index * 100}%`,
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill={true}
              sizes={"100%"}
              style={{
                objectFit: "contain",
              }}
              priority={true}
            />
          </div>
        ))}
      </div>
      <button
        onClick={nextSlide}
        className={`absolute z-10 right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl ${
          images[currentSlide]["cursorColor"] === "black"
            ? "text-black"
            : "text-white"
        }`}
      >
        &#8250;
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${
              currentSlide === index ? "bg-pink-600" : "bg-gray-300"
            }`}
            onClick={() => {
              setCurrentSlide(index);
              resetTimer();
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default Carousel;
