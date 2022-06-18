import React from 'react';
import Header from '../Header/Header';
import './Map.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: "400px",
    height: "400px"
};

const center = {
    lat: 23.791599,
    lng: 90.389099
};

const Map = () => {
    return (
        <>
            <Header></Header>
            <div className="d-flex align-items-center justify-content-center">
                        <LoadScript
                            googleMapsApiKey=''
                            
                        >
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={10}         
                            >
                            </GoogleMap>
                        </LoadScript>

            </div>
        </>
    );
};

export default Map;