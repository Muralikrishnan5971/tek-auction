
//   const vehicles=[

//     { id: 1, make: 'BMW', model: '2021 Z3 Convertible', price: '$20,890', image: 'https://via.placeholder.com/150', type: 'Sedan', status: 'Used', miles: '29K Miles', transmission: 'Auto' },
//     { id: 2, make: 'Toyota', model: '2021 Corolla', price: '$20,890', image: 'https://via.placeholder.com/150', type: 'Sedan', status: 'Used', miles: '29K Miles', transmission: 'Auto' },
//     { id: 3, make: 'Toyota', model: '2021 Camry', price: '$30,890', image: 'https://via.placeholder.com/150', type: 'Sedan', status: 'Used', miles: '29K Miles', transmission: 'Auto' },
//     { id: 4, make: 'Toyota', model: '2022 Mirai EV', price: '$40,890', image: 'https://via.placeholder.com/150', type: 'Sedan', status: 'Used', miles: '29K Miles', transmission: 'Auto' },
//     { id: 5, make: 'Toyota', model: '2022 Venza', price: '$20,890', image: 'https://via.placeholder.com/150', type: 'Sedan', status: 'Used', miles: '29K Miles', transmission: 'Manual' },
//     { id: 6, make: 'Renault', model: '2021 Megane', price: '$20,890', image: 'https://via.placeholder.com/150', type: 'Sedan', status: 'Used', miles: '29K Miles', transmission: 'Manual' },
//     { id: 7, make: 'Renault', model: '2021 Kadjar', price: '$20,890', image: 'https://via.placeholder.com/150', type: 'Sedan', status: 'Used', miles: '29K Miles', transmission: 'Manual' },
//     { id: 8, make: 'Renault', model: '2021 Scenic', price: '$40,890', image: 'https://via.placeholder.com/150', type: 'Sedan', status: 'Used', miles: '29K Miles', transmission: 'Auto' },
//   ];
import Vehicle from '../../assets/vehicle-image.png'
import Vehicle1 from '../../assets/vehicle-image1.png'
import Vehicle2 from '../../assets/vehicle-image2.png'
import Vehicle3 from '../../assets/vehicle-image3.png'
import Vehicle4 from '../../assets/vehicle-image4.png'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import VehicleCard from '../../components/Vehiclecard/Vehiclecard.jsx';
import ConfirmationModal from '../../components/Confirmationmodal/Confirmationmodal.jsx';
import Inventoryheader from '../../components/Inventoryheader/Inventoryheader.jsx';
import './Vehiclepage.css';

const VehiclePage = () => {
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
          id: '8',
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
          id: '9',
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
          id: '10',
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
          id: '11',
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
          id: '12',
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
          id: '13',
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
          id: '14',
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
          id: '15',
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
          id: '16',
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
          id: '17',
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
          id: '18',
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
          id: '19',
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
  const [selectedVehicles, setSelectedVehicles] = useState([]);  
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const navigate = useNavigate();

//   useEffect(() => {
//     const fetchVehicles = async () => {
//       try {
//         const response = await axios.get('api/vehicles'); // Replace with actual API endpoint
//         setVehicles(response.data);
//       } catch (error) {
//         console.error('Error fetching vehicles:', error);
//       }
//     };

//     fetchVehicles();
//   }, []);

//   const handleSearch = (searchQuery) => {
//     console.log('Search query:', searchQuery);
//   };

  const handleSelectVehicle = (vehicleId) => {
    const selectedVehicle = vehicles.find(vehicle => vehicle.id === vehicleId);

    setSelectedVehicles((prevSelected) =>
      prevSelected.some(vehicle => vehicle.id === vehicleId)
        ? prevSelected.filter(vehicle => vehicle.id !== vehicleId)
        : [...prevSelected, selectedVehicle]
    );
  };

  const handleStartProcess = () => {
    console.log('Start Process Clicked');
    setIsConfirmationModalOpen(true);
  };

  const handleConfirmation = (data) => {
    console.log('Confirmed with data:', data);
    navigate('/auction-list', { state: { selectedVehicles } });
  };

  return (
    <>
    <Inventoryheader totalVehicles={vehicles.length} 
        onStartProcess={handleStartProcess} 
        isDisabled={selectedVehicles.length === 0} 
    />
    <div className='vehicle-grids'>
        <div className="vehicle-grid">
        {vehicles.map((vehicle) => (
            <VehicleCard
            key={vehicle.id}
            {...vehicle}
            onSelect={() => handleSelectVehicle(vehicle.id)}
            isSelected={selectedVehicles.some(selected => selected.id === vehicle.id)}
            />
        ))}
        </div>
    </div>
      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={() => setIsConfirmationModalOpen(false)}
        onConfirm={handleConfirmation}
        selectedVehicles={selectedVehicles}
      />
    </>
  );
};

export default VehiclePage;


