import React, {useState, useRef, useCallback} from "react";
import { GoogleMap, useLoadScript, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const libraries = ["places"];
const mapContainerStyle = {
    width: '100vw',
    height: '100vh'
}
const center = {
    lat: -37.813629,
    lng: 144.963058
}

export default function Map() {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    });

    if (loadError) return "Error loading map";
    if (!isLoaded) return "Loading Map..";
    
    return (
        <div className="flex-centered" style={{margin: "2em 0 8px 0"}} >
           <GoogleMap 
           mapContainerStyle={mapContainerStyle} 
           zoom={8} 
           center={center}
           onClick={(e) => {
               console.log(e);
           }}
           onLoad={onMapLoad}
           >

           </GoogleMap>
        </div>
    )
}
