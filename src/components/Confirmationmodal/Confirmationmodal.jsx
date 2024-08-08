import React, { useState } from 'react';
import styled from 'styled-components';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, selectedVehicles }) => {
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [duration, setDuration] = useState('');

  const handleConfirm = () => {
    onConfirm({ startDate, startTime, duration });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <h2>Confirmation</h2>
        <label>Start Date:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <label>Start Time:</label>
        <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        <label>Duration:</label>
        <select value={duration} onChange={(e) => setDuration(e.target.value)}>
          <option value="">Select Duration</option>
          <option value="1h">1 hour</option>
          <option value="2h">2 hours</option>
          <option value="3h">3 hours</option>
        </select>
        <button onClick={handleConfirm}>Confirm</button>
        <button onClick={onClose}>Cancel</button>
        <p>{selectedVehicles.length} Vehicles Selected</p>
      </ModalContainer>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 90%;
`;

export default ConfirmationModal;
