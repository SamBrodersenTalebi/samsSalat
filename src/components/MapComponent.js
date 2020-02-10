import React, {useState} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';

export default function MapComponent(){
  const [viewport, setViewport] = useState({
    latitude: 37.78,
    longitude:-122.41,
    width: "100vw",
    height: "100vh",
    zoom: 10
  })

  return(
    <div>
      <ReactMapGL {... viewport}
        mapboxApiAccessToken={`${process.env.REACT_APP_MAPBOX_TOKEN}`}
      >
        markers here
      </ReactMapGL>
    </div>
  )
}