import React, {useState, useRef, useCallback} from "react";
import { GoogleMap, useLoadScript, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import axios from "axios";

const libraries = ["places"];
const mapContainerStyle = {
    width: '100vw',
    height: '100vh'
}
const options = {
    // styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };
const center = {
    lat: -37.813629,
    lng: 144.963058
}

export default function Map() {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    const [selected, setSelected] = useState(null);
    const [markers, setMarkers] = useState([]);
    const [saveMarker, setSaveMarker] = useState({});

    const mapRef = useRef();
    // const onUnmount = useCallback(function callback(map) {
    //     setMap(null)
    //   }, []);

    const onMapClick = useCallback((e) => {
        const name = prompt("Enter location name:");
        
        if (name && name.trim() !== ""){
        setMarkers((current) => [...current, 
            {
              lat: e.latLng.lat(),
              lng: e.latLng.lng(),
              placeName: name,
              time: new Date(),
            },
          ]
        );
        const saveMarker = async () => {
            try{
        await axios.post("/api/location", {
            location:{
                coordinates: [e.latLng.lng(), e.latLng.lat()]
            },
              placeName: name,
        });
    } catch (err) {
        console.error(err);
    }
    }
    saveMarker();
        }

      })
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    });

    if (loadError) return "Error loading map";
    if (!isLoaded) return "Loading Map..";
    
    return (
      <div className="flex-centered" style={{ margin: "2em 0 8px 0" }}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={center}
          options={options}
          onClick={onMapClick}
          onLoad={onMapLoad}
        //   onUnmount={onUnmount}
        >
            {markers.map(marker => <Marker key={marker.time.toISOString()} position={{lat: marker.lat, lng: marker.lng}} 
            icon={{
                url: './bicycle.svg',
                scaledSize: new window.google.maps.Size(30,30),
                origin: new window.google.maps.Point(0,0),
                anchor: new window.google.maps.Point(15,15)
            }}
            onClick={() => {
                setSelected(marker);
            }}
            />)}
            {selected ? (<InfoWindow position={{lat: selected.lat, lng: selected.lng}} onCloseClick={() => {
                setSelected(null);
            }}>
                <div>
                    <h2>{selected.placeName}</h2>
                    <p>Lat: {selected.lat} Lng: {selected.lng}</p>
                </div>
            </InfoWindow>) : null}
        </GoogleMap>
      </div>
    );
}
