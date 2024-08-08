import chryslerLogo from "./assets/crysler.png";
// import vehicle from './assets/vehicle-image.png'
import Appskeleton from "./components/Appskeleton/Appskeleton.jsx";
// import VehicleCard from "./components/Vehiclecard/Vehiclecard.jsx";
import React from "react";
import "./App.css";
import Login from "./pages/Login.jsx";
import Buyerseller from './pages/Buyerseller.jsx';

function App() {
  return (
    <div className="full-width full-height absolute root_globalMenu_base">
      <Appskeleton />
      {/* <Login /> */}
      <div className="main-content">
        <Buyerseller/>
      </div>
      {/* <main className="main-content">
        <div className="home-logo">
          <div className="app"> */}
      {/* <VehicleCard 
        image={vehicle} 
        make="BMW" 
        model="Z3 Convertible" 
        year="2021" 
        type="Sedan" 
        condition="Used" 
        id="123456" 
        price="20,890" 
        mileage="29K" 
        transmission="Auto" 
      /> */}
    {/* </div>
          <img src={chryslerLogo} alt="Chrysler" className="centre-logo" />
        </div>
      </main> */}
    </div>
  );
}

export default App;
