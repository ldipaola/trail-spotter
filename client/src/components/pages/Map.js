import React, {useState} from "react";
import ReactMapGL, {Marker, Source, Layer} from "react-map-gl";
import mapData from "../../map/data/pre_recweb_track.geojson";
import { dataLayer } from "../../map/map-style";

export default function Map() {
    const [viewport, setViewport] = useState({
        longitude: 144.962316,
        latitude: -37.812282,
        width: "100vh",
        height: "70vh",
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
                <Source type="geojson" data={mapData}>
                    <Layer {...dataLayer}/>
                </Source>
            </ReactMapGL>
        </div>
    )
}
