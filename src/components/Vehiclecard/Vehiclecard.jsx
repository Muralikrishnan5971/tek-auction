import React from 'react';
import vehicle from '../../assets/vehicle-profile.png';
import box from '../../assets/used-box.svg';
import './Vehiclecard.css';

const VehicleCard = ({ image, make, model, year, type, condition, id, price, mileage, transmission,isSelected, onSelect }) => {
  return (
    <div className="vehicle-card">
      <div className="vehicle-details">
        <div className="vehicle-header">
        <img src={image} alt={`${make} ${model}`} className="vehicle-image" />
        <div className='ymm'>
        <h3>{make}</h3>
        <h4>{year} {model}</h4>
        </div>
        </div>
        <div className="vehicle-info">
          <span className="vehicle-type"><img className='vehicle-img' src={vehicle} alt='Vehicle'/> {type}</span>
          <span className="vehicle-condition"><img className='used-img' src={box} alt='Unused box'/> {condition} • #{id}</span>
        </div>
      </div>
      <div className="vehicle-checkbox">
        <input type="checkbox" id={`vehicle-${id}`}
          checked={isSelected}
          onChange={onSelect} />
      </div>
      <div className='miles-price'>
            <div className="vehicle-price">
            <span>${price}</span>
            </div>
            <div className="vehicle-misc">
            <span>{mileage} Miles • {transmission}</span>
            </div>
        </div>
    </div>
  );
};

export default VehicleCard;
