import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './BuyerAuctionListPage.css';
import { useNavigate} from 'react-router-dom';

function BuyerAuctionListPage() {
    const navigate = useNavigate();
    
    const handleBidClick = (auc_id) => {
        navigate('/buyer/auction');
      };
    
    useEffect(() => {
    const fetchData = async () => {
        try {
        const response = await axios.get('http://10.140.10.195:8123/auction/find-all');
        console.log(response.data);
        } catch (err) {
        console.log(err);
        }
    };
    fetchData();
    }, []); 
    return (
        <>
        <div className="auction-list-container">
            <div className="auction-header">
            <h2>Vehicle auction list</h2>
            </div>
            <h3>Live auction</h3>
            <div className="auction-content">
                <div className="live-auction-card">
                    <h3>2000 Make Vehicle Auction 2024 </h3>
                    <button onClick={handleBidClick}>Participate</button>
                </div>
            </div>
            <h3>Upcoming auction</h3>
            <div className="auction-content">
                <div className="upcoming-auction-card">
                    <h3>2015 Make Vehicle Auction 2024</h3>
                    <p>Starts at 15th August 2024</p>
                </div>
                <div className="upcoming-auction-card">
                    <h3>2020 Make Vehicle Auction 2024</h3>
                    <p>Starts at 15th August 2024</p>
                </div>
                <div className="upcoming-auction-card">
                    <h3>2022 Make Vehicle Auction 2024</h3>
                    <p>Starts at 15th August 2024</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default BuyerAuctionListPage;