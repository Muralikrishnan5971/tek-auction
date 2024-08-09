import React, { useState, useEffect } from 'react';
import BuyerVehicleModal from '../../../components/Modal/BuyerVehicleModal/BuyerVehicleModal';
import './BuyerAuctionPage.css';

const Vehicle = () => {
    const [activeTab, setActiveTab] = useState('live');
    const [selectedVehicle, setSelectedVehicle] = useState(null); 
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const vehicles = [
        { id: 1, name: '2022 Mirai XLE', price: '20,890.00', timeLeft: '10:30:00', imgSrc: 'https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg?t=st=1723222608~exp=1723226208~hmac=75e60789082a9647eb9aaf1ad796818b32bb6992aab31070b16fa9c710719b1b&w=996' },
        { id: 2, name: '2022 Camry Limited', price: '20,890.00', timeLeft: '00:00:50', imgSrc: 'https://img.freepik.com/free-photo/front-view-black-luxury-sedan-road_114579-5030.jpg?t=st=1723222441~exp=1723226041~hmac=9eb152b41405d065f1af446cd14ab9e363da3d2262e3b2bf6034540c7f055617&w=996' },
    ];

    // Function to handle countdown timers
    const calculateTimeLeft = (timeString) => {
        const [hours, minutes, seconds] = timeString.split(':').map(Number);
        return { hours, minutes, seconds };
    };

    useEffect(() => {
        const timers = vehicles.map(vehicle => calculateTimeLeft(vehicle.timeLeft));
        const interval = setInterval(() => {
            timers.forEach((timer, index) => {
                if (timer.seconds > 0) {
                    timer.seconds--;
                } else if (timer.minutes > 0) {
                    timer.minutes--;
                    timer.seconds = 59;
                } else if (timer.hours > 0) {
                    timer.hours--;
                    timer.minutes = 59;
                    timer.seconds = 59;
                } else {
                    clearInterval(interval);
                }
                vehicles[index].timeLeft = `${String(timer.hours).padStart(2, '0')}:${String(timer.minutes).padStart(2, '0')}:${String(timer.seconds).padStart(2, '0')}`;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [vehicles]);

    const handleQuickView = (vehicle) => {
        setSelectedVehicle(vehicle);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedVehicle(null);
    };

    return (
        <div className="single-auction-container">
            <div className='single-auction-header'>
                <h1>Vehicle Inventory</h1>
                <p>820 Vehicles Fetched</p>
            </div>
            

            <div className="tabs">
                <div className='tab-container'>
                    <button className={`tab ${activeTab === 'live' ? 'active' : ''}`} onClick={() => setActiveTab('live')}>Live Auctions</button>
                    <button className={`tab ${activeTab === 'upcoming' ? 'active' : ''}`} onClick={() => setActiveTab('upcoming')}>Upcomings</button>
                </div>

                <div className="search-sort mt-5">
                    <select>
                        <option value="recommended">Sort By: Recommended</option>
                    </select>
                </div>
            </div>

            <div className="buy-vehicle-grid">
                {vehicles.map(vehicle => (
                    <div className="buy-vehicle-card" key={vehicle.id}>
                        <div className='vechicle-card-heading'>
                            <p className='toyota-title'>Toyota</p>
                            <div className="vehicle-timer">{vehicle.timeLeft}</div>
                        </div>
                        <h5>{vehicle.name}</h5>
                        <img src={vehicle.imgSrc} alt={vehicle.name} />
                        <div className='price-tag'>
                            <p>${vehicle.price}</p>
                            <p className='quick' onClick={() => handleQuickView(vehicle)}>Quick view</p>
                        </div>
                        <button className="bid-now">Bid Now</button>
                    </div>
                ))}
            </div>

            {/* Render the modal if the state isModalOpen is true */}
            {isModalOpen && <BuyerVehicleModal vehicle={selectedVehicle} onClose={handleCloseModal} />}
        </div>
    );
};

export default Vehicle;
