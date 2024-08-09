import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import VehicleInventory from './pages/SellerPages/Vehiclepage/Vehiclepage.jsx';
import SellerAuctionListPage from './pages/SellerPages/AuctionListpage/AuctionListpage.jsx';
import BuyerAuctionListPage from './pages/BuyerPages/BuyerAuctionListPage/BuyerAuctionListPage.jsx';
import BuyerAuctionPage from './pages/BuyerPages/BuyerAuctionPage/BuyerAuctionPage.jsx';
import AppSkeleton from "./components/Appskeleton/Appskeleton.jsx";
import Buyerseller from './pages/HomePage/Homepage.jsx';
import Login from './pages/LoginPage/Login.jsx';
import AuctionVehiclehistory from "./pages/BuyerPages/AuctionVehiclehistory/AuctionVehiclehistory.jsx";
import FinalAuctionhistory from "./pages/BuyerPages/FinalAuctionHistory/FinalAuctionhistory.jsx";


function App() {

  return (
      <div className="full-width full-height absolute root_globalMenu_base">
          <Router>
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={
                <>
                <AppSkeleton />
                <Buyerseller />
                </>
                } />
              <Route path="/seller/inventory" element={
                <>
                <AppSkeleton />
                <VehicleInventory />
                </>
                } />
              <Route path="/seller/auction-list" element={
                <>
                <AppSkeleton />
                <SellerAuctionListPage />
                </>
                } />
              <Route path="/buyer/auction-list" element={
                <>
                <AppSkeleton />
                <BuyerAuctionListPage />
                </>
                } />
              <Route path="/buyer/auction" element={
                <>
                <AppSkeleton />
                <BuyerAuctionPage />
                </>
                } />

                <Route path="/buyer/auction/history" element={
                   <>
                   <AppSkeleton />
                   <AuctionVehiclehistory />
                   </>
                } />

                <Route path="/buyer/auction/confirmation" element={
                   <>
                   <AppSkeleton />
                   <FinalAuctionhistory />
                   </>
                } />
            </Routes>         
          </Router>
          
      </div>
  );
}


export default App;
