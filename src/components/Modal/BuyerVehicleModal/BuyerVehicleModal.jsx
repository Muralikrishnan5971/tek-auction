import React from 'react';
import './BuyerVehicleModal.css';
import Slider from '../../ImageSlider/ImageSlider';

const BuyerVehicleModal = ({ vehicle, onClose }) => {
  if (!vehicle) return null;
  return (

    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="vehicle-modal" onClick={(e) => e.stopPropagation()}>
          <div className="vehicle-info-header">
            <h2>2022 Renault Clio V - Quick View</h2>
            <div className="actions">
              <a href="#more">More details</a>
              <button className="bid-now-button">Bid Now</button>
              <button className="close-button" aria-label="Close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                  onClick={onClose}
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          <div className="vehicle-info-tabs">
            <ul>
              <li><a href="#gen" className="active">General</a></li>
              <li><a href="#media">Media</a></li>
              <li><a href="#value">Valuation</a></li>
              <li><a href="#damage">Damages</a></li>
            </ul>
          </div>

          <div className="vehicle-info-content">
            <Slider img={vehicle.imgSrc} />
            <div className="vehicle-info-details">
              <h3>Vehicle Info</h3>
              <div className="info-grid">
                <div>
                  <p><strong>Stock No.</strong> EDA101222A</p>
                  <p><strong>Model</strong> Bolt EV</p>
                  <p><strong>Transmission</strong> Automatic</p>
                </div>
                <div>
                  <p><strong>Body Class</strong> SUV</p>
                  <p><strong>Trim</strong> 2 LT</p>
                  <p><strong>Vehicle Status</strong> Add</p>
                </div>
                <div>
                  <p><strong>Year</strong> 2022</p>
                  <p><strong>Mileage</strong> 1722 KMs</p>
                  <p><strong>VIN</strong> Add</p>
                </div>
                <div>
                  <p><strong>Make</strong> Chevrolet</p>
                  <p><strong>Registration</strong> AB - 1212 - CA</p>
                </div>
              </div>

              <h3>Applicable Warranties</h3>
              <div className="vehicle-info-warranties">
                <table>
                  <thead>
                    <tr>
                      <th>Warranty Name</th>
                      <th>Type</th>
                      <th>Duration</th>
                      <th>Max Mileage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Renew Standard</td>
                      <td>Warranty New</td>
                      <td>6 mo</td>
                      <td>22,500 mi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>


  );
};

export default BuyerVehicleModal;
