import React, { Component } from "react";
import "./AuctionVehiclehistory.css";
import Modal from "../../../BuyerComponents/DealConfirmation/DealConfirmation";
import VehicleImg from "../../../assets/vehicle-image2.png";

class dummy extends Component {
    constructor(props) {
        super(props);
        this.state = {
          secondsRemaining: 5, 
          showModal:false,
          basePrice : 20000,
          currentBid: 20800,
        };
      }
    
      componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState(prevState => {
                if (prevState.secondsRemaining > 0) {
                    return { secondsRemaining: prevState.secondsRemaining - 1 , basePrice:  prevState.basePrice + 500};
                } else {
                    clearInterval(this.timerId);
                    return { secondsRemaining: 0, showModal: true }; 
                }
            });
        }, 1000);
    }
    
      componentWillUnmount() {
        clearInterval(this.timerId); 
      }

      handleBidNow = () => {
        this.setState(prevState => ({
            currentBid: prevState.currentBid + 500,
            basePrice: prevState.currentBid 
        }));
    }
  render() {
    const { secondsRemaining ,showModal ,currentBid, basePrice} = this.state;
    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;
    return (
      <>
        <div className="auction-conatiner">
          <div className="auction-header">
           <p>Live Action</p>
            <h5>Exit Auction</h5>
          </div>
          <div className="auction-content">
            
            <div className="top">
            
              <p>Your vehicle</p>
              <p> {minutes} min {seconds < 10 ? `0${seconds}` : seconds} secs</p>
            </div>
            <div className="middle">
              <div className="sec-1">
                <img src={VehicleImg} alt="vehicle_image" />
                <div className="veh-det">
                  <p>Toyota</p>
                  <p>2022 Mirai XLE</p>
                  <p>Base Price at ${basePrice}</p>
                </div>
              </div>
              <div className="sec-2">
              <button onClick={this.handleBidNow}>Bid Now for ${currentBid}</button>
                <p>Refreshing in 2s</p>
              </div>
            </div>
            <div className="live-section">
              <p>Live Bidding Session</p>
              <p>+30 More</p>
            </div>
            <div className="bottom">
            <div className="bidder-avatar">
            <p>SS</p></div>
          <div className="bidder-info">
            <div className="bidder-name">Sayantani Sarkar:</div>
            <div className="bid-amount">Placed +$1000 more</div>
            <div className="bid-time">Mar 13, 2023 3:39 PM</div>
          </div>
          
            </div>
          </div>
          <h3>Upcomng Auctions</h3>
          <div className="card-section">
            <div className="auction-card"></div>
            <div className="auction-card"></div>
            <div className="auction-card"></div>
            <div className="auction-card"></div>
          </div>
        </div>
            <Modal showModal={showModal} handleClose={this.handleCloseModal} currentBid={currentBid} />
      </>
    );
  }
}
export default dummy;