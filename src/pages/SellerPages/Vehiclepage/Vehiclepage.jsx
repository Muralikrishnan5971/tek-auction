import Vehicle from '../../../assets/vehicle-image.png'
import Vehicle1 from '../../../assets/vehicle-image1.png'
import Vehicle2 from '../../../assets/vehicle-image2.png'
import Vehicle3 from '../../../assets/vehicle-image3.png'
import Vehicle4 from '../../../assets/vehicle-image4.png'
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import VehicleCard from '../../../components/Vehiclecard/Vehiclecard.jsx';
import ConfirmationModal from '../../../components/Modal/ConfirmModal/ConfirmModal.jsx';
import AllDoneModal from '../../../components/Modal/AllDoneModal/AllDoneModal.jsx'
import Inventoryheader from '../../../components/Inventoryheader/Inventoryheader.jsx';
import './Vehiclepage.css';
import axios from 'axios'

const VehiclePage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicles, setSelectedVehicles] = useState([]);  
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isAllDoneModalOpen, setIsAllDoneModalOpen] = useState(false);
  const navigate = useNavigate();
  const images = [Vehicle, Vehicle1, Vehicle2, Vehicle3, Vehicle4];

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios({
          method: 'post',
          url: '/api/api-vi/u/v1.0.0/inventory/tenant/v2/search?langParam=en_US',
          headers: {
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
            'applicationid': 'ARC_NA',
            'clientid': 'web',
            'content-type': 'application/json',
            'dealerid': '4',
            'locale': 'en_US',
            'original-tenantid': 'techmotors',
            'original-userid': '094a420c-05d5-45ca-8827-dbeef44b923b',
            'priority': 'u=1, i',
            'productids': 'ARC',
            'program': 'DEFAULT',
            'roleid': '4_Controller',
            'subapplicationid': 'US',
            'tek-siteid': '-1_4',
            'tekion-api-token': 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIwOTRhNDIwYy0wNWQ1LTQ1Y2EtODgyNy1kYmVlZjQ0YjkyM2IiLCJpYXQiOjE3MjMxODU3ODQsInN1YiI6IjA5NGE0MjBjLTA1ZDUtNDVjYS04ODI3LWRiZWVmNDRiOTIzYiIsImlzcyI6IkxvZ2luU2VydmljZSIsInVubG9ja0FjY291bnQiOmZhbHNlLCJub3VuY2UiOiIzYjg0NDBjZi0xMWMzLTQ4YWItYjg4Yi00NWM2ZTZlMmQ2ZmIiLCJvcmlnaW5hbFVzZXJJZCI6IjA5NGE0MjBjLTA1ZDUtNDVjYS04ODI3LWRiZWVmNDRiOTIzYiIsIm9yaWdpbmFsVGVuYW50SWQiOiJ0ZWNobW90b3JzIiwidXNlcklkIjoiMDk0YTQyMGMtMDVkNS00NWNhLTg4MjctZGJlZWY0NGI5MjNiIiwiZW1haWwiOiJwcHJhc2F0aEB0ZWtpb24uY29tIiwiZXhwIjoxNzIzMTkzNTYwfQ.nawEcm3qAqsZOm1Vw61BJO5SWlpbq3Mn0i6nTq791cY',
            'tenantid': 'undefined',
            'tenantname': 'techmotors',
            'userid': '094a420c-05d5-45ca-8827-dbeef44b923b'
          }, 
          data: {
            "filters": [
                {
                    "field": "status",
                    "operator": "IN",
                    "values": [
                        "STOCKED_IN"
                    ]
                },
                {
                    "field": "dealerId",
                    "operator": "IN",
                    "values": [
                        "4"
                    ]
                },
                {
                    "field": "pricingDetails.retailPrice",
                    "operator": "GT",
                    "values": [
                        1
                    ]
                },
                {
                    "field": "pricingDetails.sellingPrice",
                    "operator": "GT",
                    "values": [
                        1
                    ]
                },
                 {
                    "field": "pricingDetails.msrp",
                    "operator": "GT",
                    "values": [
                        1
                    ]
                }
            ],
            "searchText": "",
            "groupBy": [],
            "searchableFields": [],
            "searchFields": [
                "all"
            ],
            "excludeFields": [],
            "pageInfo": {
                "start": 0,
                "rows": 15
            }
        }
        });
        console.log('Full API Response:', response.data); // Log the full response.data

    // Check the structure of response.data
    const hits = response.data?.data?.hits;
    if (hits) {
      console.log(hits);
      const mappedVehicles = hits.map(vehicle => ({
        ...vehicle, image: images[Math.floor(Math.random() * images.length)],
        vehicleID: vehicle.id
      }));

      setVehicles(mappedVehicles);
    } else {
      console.error('The "hits" field is undefined in the response data.');
    }
  } catch (error) {
    console.error('Error fetching vehicles:', error);
  }
};

fetchVehicles();
  }, []);

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
    setIsAllDoneModalOpen(true);
    setTimeout(() => {
      setIsAllDoneModalOpen(false);
    }, 3000);
    setTimeout(() => {
      navigate('/auction-list', { state: { selectedVehicles } });
    }, 3000);
  };

  return (
    <div className='inventory-container'>
    <Inventoryheader totalVehicles={vehicles.length} 
        onStartProcess={handleStartProcess} 
        isDisabled={selectedVehicles.length === 0} 
    />
    <div className='vehicle-grids'>
        <div className="vehicle-grid">
        {vehicles.map((vehicle) => (
            <VehicleCard
            key={vehicle.id}
            price={vehicle.pricingDetails?.retailPrice ?? 20000}
            condition={'Used'}
            type={'Sedan'}
            stockId={(vehicle.stockID && vehicle.stockID.length <= 8) ? vehicle.stockID : `#DH${Math.floor(Math.random() * 568)}B`}
            image={images[Math.floor(Math.random() * images.length)]}
            {...vehicle}
            onSelect={() => handleSelectVehicle(vehicle.id)}
            isSelected={selectedVehicles.some(selected => selected.id === vehicle.id)}
            />
        ))}
        </div>
    </div>
      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={() => {
          setIsConfirmationModalOpen(false);
        }}
        onConfirm={handleConfirmation}
        selectedVehicles={selectedVehicles}
      />
      {!isConfirmationModalOpen && isAllDoneModalOpen ? ( <AllDoneModal 
              isOpen={isAllDoneModalOpen}
      /> ):("") }
       
    </div>
  );
};

export default VehiclePage;





