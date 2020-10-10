import React, {useState} from "react";
import ReactMapGL, {Marker} from "react-map-gl";
import mapData from "../../data/pre_recweb_track.geojson";

export default function Map() {
    const [viewport, setViewport] = useState({
        longitude: 144.962316,
        latitude: -37.812282,
        width: "100vh",
        height: "100vh",
        zoom: 10
    });
    
    return (
        <div className="flex-centered" style={{margin: "8px 0 8px 0"}} >
            <ReactMapGL {...viewport} 
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onViewportChange={viewport => {
                setViewport(viewport);
            }}
            mapStyle="mapbox://styles/lukey88/ckg329w4w06p319o0nqrlg6sc"
            >
            </ReactMapGL>
        </div>
    )
}
