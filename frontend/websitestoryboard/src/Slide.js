import React, { useState } from 'react';
import './Slide.css'; // Import your CSS file for styling

const Slide = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="slide-container">
      <button onClick={prevSlide} className="slide-button">
        Prev
      </button>
      <div className="slide">
        <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      </div>
      <button onClick={nextSlide} className="slide-button">
        Next
      </button>
    </div>
  );
};

export default Slide;
