import React from "react";
import './Inventoryheader.css'

const Inventoryheader = ({ totalVehicles , onStartProcess, isDisabled}) => { 
    return (
      <div className="header">
          <div className='goBackBtn icon-left-arrow-thin'></div>
          <div className="title">Vehicle Inventory</div>
          <div className='line'> | </div>
          <div className="count"> {totalVehicles} Vehicles Fetched</div>
          <button className="process-button" 
                onClick={onStartProcess} 
                disabled={isDisabled}
             >
              Start the Process <span className='icon-right-arrow-filled'></span>
          </button>
      </div>
    );
  };
  
  export default Inventoryheader;