import Vehicle from './assets/vehicle-image.png'
import Vehicle1 from './assets/vehicle-image1.png'
import Vehicle2 from './assets/vehicle-image2.png'
import Vehicle3 from './assets/vehicle-image3.png'
import Vehicle4 from './assets/vehicle-image4.png'
import Appskeleton from "./components/Appskeleton/Appskeleton.jsx";
import Inventory from "./components/Vehicleinventory/Vehicleinventory.jsx";
import VehicleGrid from "./components/Vehiclegrid/Vehiclegrid.jsx";
import React from "react";
import "./App.css";
import Login from "./pages/Login.jsx";


const vehicles = [
  {
    id: '1',
    image: Vehicle,
    make: 'BMW',
    model: 'Z3 Convertible',
    year: '2021',
    type: 'Sedan',
    condition: 'Used',
    price: '20,890',
    mileage: '29K',
    transmission: 'Auto'
  },
  {
    id: '2',
    image: Vehicle1,
    make: 'BMW',
    model: 'Z3 Convertible',
    year: '2021',
    type: 'Sedan',
    condition: 'Used',
    price: '20,890',
    mileage: '29K',
    transmission: 'Auto'
  },
  {
    id: '3',
    image: Vehicle2,
    make: 'BMW',
    model: 'Z3 Convertible',
    year: '2021',
    type: 'Sedan',
    condition: 'Used',
    price: '20,890',
    mileage: '29K',
    transmission: 'Auto'
  },
  {
    id: '4',
    image: Vehicle3,
    make: 'BMW',
    model: 'Z3 Convertible',
    year: '2021',
    type: 'Sedan',
    condition: 'Used',
    price: '20,890',
    mileage: '29K',
    transmission: 'Auto'
  },
  {
    id: '5',
    image: Vehicle4,
    make: 'BMW',
    model: 'Z3 Convertible',
    year: '2021',
    type: 'Sedan',
    condition: 'Used',
    price: '20,890',
    mileage: '29K',
    transmission: 'Auto'
  },
  {
    id: '6',
    image: Vehicle2,
    make: 'BMW',
    model: 'Z3 Convertible',
    year: '2021',
    type: 'Sedan',
    condition: 'Used',
    price: '20,890',
    mileage: '29K',
    transmission: 'Auto'
  },
  {
    id: '7',
    image: Vehicle,
    make: 'BMW',
    model: 'Z3 Convertible',
    year: '2021',
    type: 'Sedan',
    condition: 'Used',
    price: '20,890',
    mileage: '29K',
    transmission: 'Auto'
  },
  {
    id: '8894305',
    image: Vehicle3,
    make: 'BMW',
    model: 'Z3 Convertible',
    year: '2021',
    type: 'Sedan',
    condition: 'Used',
    price: '20,890',
    mileage: '29K',
    transmission: 'Auto'
  },
  {
    id: '8894305',
    image: Vehicle4,
    make: 'BMW',
    model: 'Z3 Convertible',
    year: '2021',
    type: 'Sedan',
    condition: 'Used',
    price: '20,890',
    mileage: '29K',
    transmission: 'Auto'
  },
  {
    id: '8894305',
    image: Vehicle4,
    make: 'BMW',
    model: 'Z3 Convertible',
    year: '2021',
    type: 'Sedan',
    condition: 'Used',
    price: '20,890',
    mileage: '29K',
    transmission: 'Auto'
  },
  {
    id: '8894305',
    image: Vehicle1,
    make: 'BMW',
    model: 'Z3 Convertible',
    year: '2021',
    type: 'Sedan',
    condition: 'Used',
    price: '20,890',
    mileage: '29K',
    transmission: 'Auto'
  },{
    id: '8894305',
    image: Vehicle2,
    make: 'BMW',
    model: 'Z3 Convertible',
    year: '2021',
    type: 'Sedan',
    condition: 'Used',
    price: '20,890',
    mileage: '29K',
    transmission: 'Auto'
  },{
    id: '8894305',
    image: Vehicle3,
    make: 'BMW',
    model: 'Z3 Convertible',
    year: '2021',
    type: 'Sedan',
    condition: 'Used',
    price: '20,890',
    mileage: '29K',
    transmission: 'Auto'
  },{
    id: '8894305',
    image: Vehicle1,
    make: 'BMW',
    model: 'Z3 Convertible',
    year: '2021',
    type: 'Sedan',
    condition: 'Used',
    price: '20,890',
    mileage: '29K',
    transmission: 'Auto'
  },{
    id: '8894305',
    image: Vehicle4,
    make: 'BMW',
    model: 'Z3 Convertible',
    year: '2021',
    type: 'Sedan',
    condition: 'Used',
    price: '20,890',
    mileage: '29K',
    transmission: 'Auto'
  },
  {
    id: '8894305',
    image: Vehicle3,
    make: 'BMW',
    model: 'Z3 Convertible',
    year: '2021',
    type: 'Sedan',
    condition: 'Used',
    price: '20,890',
    mileage: '29K',
    transmission: 'Auto'
  },
  {
    id: '8894305',
    image: Vehicle1,
    make: 'BMW',
    model: 'Z3 Convertible',
    year: '2021',
    type: 'Sedan',
    condition: 'Used',
    price: '20,890',
    mileage: '29K',
    transmission: 'Auto'
  },{
    id: '8894305',
    image: Vehicle2,
    make: 'BMW',
    model: 'Z3 Convertible',
    year: '2021',
    type: 'Sedan',
    condition: 'Used',
    price: '20,890',
    mileage: '29K',
    transmission: 'Auto'
  },{
    id: '8894305',
    image: Vehicle,
    make: 'BMW',
    model: 'Z3 Convertible',
    year: '2021',
    type: 'Sedan',
    condition: 'Used',
    price: '20,890',
    mileage: '29K',
    transmission: 'Auto'
  }
];

function App() {
  return (
    <div className="full-width full-height absolute root_globalMenu_base">
      <Appskeleton />
      <main className="app">
          <Inventory totalVehicles={vehicles.length} />
          <VehicleGrid vehicles={vehicles} />
      {/* <VehicleCard 
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
      /> */}
   
      </main>
    </div>
  );
}

export default App;
