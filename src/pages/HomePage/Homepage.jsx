import React, { useState } from 'react';
import './Homepage.css';
import { useNavigate} from 'react-router-dom';
import buyCarImage from '../../assets/Car-Buyer.png';
import sellCarImage from '../../assets/Car-Seller.png';

function HomePage() {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if(option === 'sell') {
      navigate('/seller/inventory');
    }
    else if(option === 'buy') {
      navigate('/buyer/auction-list');
    }
  };

  return (
    <div className="home-container">
            <h3 className="home-title">What's up?</h3>
            <div className="options-container">
                <div className={`option ${selectedOption === 'buy' ? 'selected' : ''}`}>
                    <img src={buyCarImage} alt="I want to Buy" className="option-image" />
                    <h2>I want to Buy</h2>
                    <button onClick={() => handleOptionClick('buy')} className="option-button">See Vehicle Listing →</button>
                </div>
                <div className={`option ${selectedOption === 'sell' ? 'selected' : ''}`}>
                    <img src={sellCarImage} alt="I want to Sell" className="option-image" />
                    <h2>I want to Sell</h2>
                    <button onClick={() => handleOptionClick('sell')} className="option-button">List your Vehicle →</button>
                </div>
            </div>
        </div>
    
  );
}

export default HomePage;
