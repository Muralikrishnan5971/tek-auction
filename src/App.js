import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import VehicleInventory from './pages/SellerPages/Vehiclepage/Vehiclepage.jsx';
import AuctionListPage from './pages/SellerPages/AuctionListpage/AuctionListpage.jsx';
import AppSkeleton from "./components/Appskeleton/Appskeleton.jsx";
import Buyerseller from './pages/HomePage/Homepage.jsx';
import Login from './pages/LoginPage/Login.jsx';


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
              <Route path="/inventory" element={
                <>
                <AppSkeleton />
                <VehicleInventory />
                </>
                } />
              <Route path="/auction-list" element={
                <>
                <AppSkeleton />
                <AuctionListPage />
                </>
                } />
            </Routes>
          </Router>
      </div>
  );
}

export default App;
