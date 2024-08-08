import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VehiclePage from './pages/Vehiclepage/Vehiclepage.jsx';
import AuctionListPage from "./pages/AuctionListpage/AuctionListpage.jsx";
import Appskeleton from "./components/Appskeleton/Appskeleton.jsx";
import Buyerseller from './pages/Buyerseller.jsx';


{/* <div className="full-width full-height absolute root_globalMenu_base">
      <Appskeleton />
      <main className="app">
          <Inventory totalVehicles={vehicles.length} />
          <VehicleGrid vehicles={vehicles} />
      <VehicleCard 
        image={Vehicle} 
        make="BMW" 
        model="Z3 Convertible" 
        year="2021" 
        type="Sedan" 
        condition="Used" 
        id="123456" 
        price="20,890" 
        mileage="29K" 
        transmission="Auto" 
      />
   
      </main>
    </div> */}


function App() {
  console.log('Rendering App component');

  return (
    
      <div className="full-width full-height absolute root_globalMenu_base">
        <Appskeleton />
        <main className="app">
          <Routes>
            <Route path="/" element={<VehiclePage />} />
            <Route path="/auction-list" element={<AuctionListPage />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;
