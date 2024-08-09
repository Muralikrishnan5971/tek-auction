import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({img}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    img,
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="vehicle-info-card flex">
      <img
        src={images[currentImageIndex]}
        alt={`Vehicle ${currentImageIndex + 1}`}
        className="main-image"
      />
      <div className="thumbnail-wrapper">
        <button onClick={prevImage} className="arrow-button arrow-up">▲</button>
        <div className="vehicle-info-thumbnails">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
        <button onClick={nextImage} className="arrow-button arrow-down">▼</button>
      </div>
    </div>
  );
};

export default ImageSlider;
