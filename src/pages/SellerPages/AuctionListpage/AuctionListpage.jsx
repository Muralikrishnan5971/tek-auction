import React from 'react';
import { useLocation } from 'react-router-dom';
import './AuctionListpage.css';

const AuctionListPage = () => {
  const location = useLocation();
  const { selectedVehicles } = location.state || { selectedVehicles: [] };

  return (
    <div className="auction-list-container">
      <header>
        <h4>Auction Vehicle List</h4>
        <p className='line-seperator'> | </p>
        <span className='selected-vehicle'>{selectedVehicles.length} Vehicle(s) Selected</span>
        <div className="auction-timer">
          Auction Starts in: 13 hr 20 min 56 Seconds
        </div>
      </header>
      <p className='price-change-txt'>Please change the Pricing before the auction start</p>
      <table className="vehicle-table">
        <thead>
          <tr>
            <th>Stock No.</th>
            <th>VIN</th>
            <th>Status</th>
            <th>Vehicle</th>
            <th>Model No.</th>
            <th>Model Type</th>
            <th>Body Class</th>
            <th>Retail Price</th>
          </tr>
        </thead>
        <tbody>
          {selectedVehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>{vehicle.stockID}</td>
              <td>{vehicle.vin}</td>
              <td>
                <span className="status-indicator" /> {vehicle.status}
              </td>
              <td>
                <img src={vehicle.image} alt={vehicle.model} className="vehicle-image" /> {vehicle.year} {vehicle.make} {vehicle.model}
              </td>
              <td>{vehicle.mfrModelCode ?? `M${Math.floor(Math.random() * 1000)}`}</td>
              <td>{vehicle.trimDetails?.bodyType?.trim() || "Sedan"}</td>
              <td>{vehicle.trimDetails?.bodyClass?.trim() || "Car"}</td>
              <td>{vehicle.pricingDetails?.retailPrice ?? 20000}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuctionListPage;
