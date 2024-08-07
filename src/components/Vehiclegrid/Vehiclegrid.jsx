import React, { useState } from 'react';
import VehicleCard from '../Vehiclecard/Vehiclecard.jsx';
import './Vehiclegrid.css';

const VehicleGrid = ({ vehicles }) => {
  const [selectedVehicles, setSelectedVehicles] = useState([]);

  const handleCheck = (id) => {
    setSelectedVehicles(prevState =>
      prevState.includes(id) ? prevState.filter(vid => vid !== id) : [...prevState, id]
    );
  };

  return (
    <div className='vehicle-grids'>
        <div className="vehicle-grid">
      {vehicles.map(vehicle => (
        <VehicleCard
          key={vehicle.id}
          {...vehicle}
          checked={selectedVehicles.includes(vehicle.id)}
          onCheck={() => handleCheck(vehicle.id)}
        />
      ))}
    </div>
    </div>
    
  );
};

export default VehicleGrid;
