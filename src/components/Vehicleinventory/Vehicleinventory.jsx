import React from 'react';
import './Vehicleinventory.css';
// import { useNavigate } from 'react-router';

// function redirectInventory() {
//     return useNavigate("/inventory");
// }

const inventoryHeader = ({ totalVehicles }) => { 
  return (
    <div className="header">
        <div className='goBackBtn icon-left-arrow-thin'></div>
        <div className="title">Vehicle Inventory</div>
        <div className='line'> | </div>
        <div className="count"> {totalVehicles} Vehicles Fetched</div>
        <button className="process-button">
            Start the Process <span className='icon-right-arrow-filled'></span>
        </button>
    </div>
  );
};

export default inventoryHeader;