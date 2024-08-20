import React, { useState, useEffect } from 'react';
import Style from './Slide.module.css';

const Slide = ({ imagem01, imagem02, imagem03, imagem04, imagem05 }) => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    imagem01,
    imagem02,
    imagem03,
    imagem04,
    imagem05,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={Style.slideContainer}>
      {/* <div className={Style.overlay}></div> */}
      <div className={Style.slide}>
        <img
          src={images[currentSlide]}
          alt="imagem do carrossel"
          className={Style.slideImage}
        />
      </div>
    </div>
  )
};

export default Slide;
