import React, { useState } from 'react';
import './Buyerseller.css';
import buyCarImage from '../assets/Car-Buyer.png'; // Make sure this path is correct
import sellCarImage from '../assets/Car-Seller.png'; // Replace with your image path

function Buyerseller() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="landing-page">
      <div className="options-container">
        <div
          className={`option ${selectedOption === 'buy' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('buy')}
        >
          <img src={buyCarImage} alt="Buy Car" className="option-image" />
          <h3 className='bottom-text_old'>Buyer</h3>
        </div>
        <div
          className={`option ${selectedOption === 'sell' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('sell')}
        >
          <img src={sellCarImage} alt="Sell Car" className="option-image" />
          <h3 className='bottom-text'>Seller</h3>
        </div>
      </div>
    </div>
    
  );
}

export default Buyerseller;
