import Image from 'next/image';
import React, { useState } from 'react';

const images = [
  'https://via.placeholder.com/600x400?text=Slide+1',
  'https://via.placeholder.com/600x400?text=Slide+2',
  'https://via.placeholder.com/600x400?text=Slide+3',
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((imageUrl, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Image width={100} height={100} src={imageUrl} alt={`Slide ${index + 1}`} className="w-full" />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 focus:outline-none"
      >
        <button className="h-6 w-6" >btn1</button>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 focus:outline-none"
      >
        <button className="h-6 w-6" >btn2</button>
     
      </button>
    </div>
  );
};

export default Carousel;
