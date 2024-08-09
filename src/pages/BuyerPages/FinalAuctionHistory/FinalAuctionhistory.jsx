import React from 'react';
import { useLocation } from 'react-router-dom'; // useLocation for accessing the passed state
import './FinalAuctionHistory.css';
import VehicleImg from "../../../assets/vehicle-image2.png";

const FinalAuctionhistory = () => {
  const location = useLocation();
  const { bidAmount } = location.state || { bidAmount: 0 }; // Get the bidAmount from state

  return (
    <div className="auction-conatiner">
      <div className="auction-header">
        <p>Live Action</p>
        <h5>Exit Auction</h5>
      </div>
      <div className="auction-content">
        <div className="top">
          <p>Your vehicle</p>
          <p>Deal ID : K1234687WER</p>
        </div>
        <div className="middle">
          <div className="sec-1">
            <img src={VehicleImg} alt="vehicle_image" />
            <div className="veh-det">
              <p>Toyota</p>
              <p>2022 Mirai XLE</p>
              <p>Base Price $22000</p>
            </div>
          </div>
          <div className="sec-2">
            <button>Start the Deal</button>
            <p>You may start with a few steps</p>
            <p>Congratulations! You have bid for $24800</p>
            <p><b>SOLD OUT !</b></p>
          </div>
        </div>
        <div className="live-section">
          <p>Live Bidding Session</p>
          <p>+30 More</p>
        </div>
        <div className="bottom">
          <div className="bidder-avatar">
            <p>SS</p>
          </div>
          <div className="bidder-info">
            <div className="bidder-name">Sayantani Sarkar:</div>
            <div className="bid-amount">Placed +$1000 more</div>
            <div className="bid-time">Mar 13, 2023 3:39 PM</div>
          </div>
        </div>
      </div>
      <h3>Upcoming Auctions</h3>
      <div className="card-section">
        <div className="auction-card"></div>
        <div className="auction-card"></div>
        <div className="auction-card"></div>
        <div className="auction-card"></div>
      </div>
    </div>
  );
};

export default FinalAuctionhistory;
