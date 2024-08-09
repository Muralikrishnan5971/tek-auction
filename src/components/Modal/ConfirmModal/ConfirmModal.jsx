import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import Warning from '../../../assets/warning.svg';
import './ConfirmModal.css';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, selectedVehicles }) => {
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [duration, setDuration] = useState('');

  const handleConfirm = () => {
    onConfirm({ startDate, startTime, duration});
    onClose();
  };

  if (!isOpen) return null;
    return (
      <div className="modal-container">
            <div className="modal-card">
                <div className="card-header">
                  <h2>Confirmation</h2>
                  <button onClick={onClose} className="icon-close"></button>
                </div>
              <div className="card-content">
                <h4>Please Select the options below for this auction</h4>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px' }}>Start Date</label>
                  <input 
                    type="date" 
                    value={startDate} 
                    onChange={(e) => setStartDate(e.target.value)} 
                    style={{width: '90%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box'}}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', margin: '10px 0 5px 0' }}>Start Time</label>
                  <input 
                    type="time" 
                    value={startTime} 
                    onChange={(e) => setStartTime(e.target.value)} 
                    style={{width: '90%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box'}}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', margin: '10px 0 5px 0' }}>Time Duration for Auction</label>
                  <div className="date-picker">
                    <select className='duration-drop' value={duration} onChange={(e) => setDuration(e.target.value)}>
                      <option value="">Select Duration</option>
                      <option value="1">1 hour</option>
                      <option value="2">2 hours</option>
                      <option value="3">3 hours</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="warning-tip">
                <img src={Warning} alt="warning icon" />
                <p>
                  Note: No car selection changes are allowed after this.
                </p>
              </div>
              <div className='card-footer'>
                <p>{selectedVehicles.length} Vehicles Selected</p>
                <div className='footer-btns'>
                    <button onClick={onClose} className='btn-cancel'>Cancel</button>
                    <button onClick={handleConfirm} className='btn-done'>Done</button>
                </div>    
              </div>
          </div>  
      </div>
    );
  }

export default ConfirmationModal;