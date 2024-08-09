import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct hook for v6
import './DealConfirmation.css'; 

const Modal = ({ showModal, handleClose, currentBid }) => {
  const bidAmount = currentBid ? currentBid.toLocaleString() : '0';
  const navigate = useNavigate(); // useNavigate for v6

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        // Redirect to another screen after 20 seconds, passing the latest bid amount as state
        navigate('/buyer/auction/confirmation', { state: { bidAmount: currentBid } });
      }, 5000); // 20 seconds

      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts or showModal changes
    }
  }, [showModal, navigate, currentBid]);

  if (!showModal) {
    return null;
  }

  return (
    <div className="modal-container">
      <div className="modal-card">
        <div className="card-header">
          <h2>We have a Deal!!</h2>
          {/* <button className="icon-closed" onClick={handleClose}></button> */}
        </div>
        <div className="card-content">
          <img
            src={require('../../assets/winning-cup.gif')}
            alt="deal_image"
            className="deal-image"
          />
          <div className="price-amount">${bidAmount}</div>
        </div>
        {/* Removed the card-footer containing the Done button */}
      </div>
    </div>
  );
};

export default Modal;
