import React, {useState} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';

export default function MapComponent(){
  const [viewport, setViewport] = useState({
    latitude: 37.78,
    longitude:-122.41,
    width: "100%",
    height: "500px",
    zoom: 10
  })

  return(
    <div>
      <ReactMapGL {... viewport}
        mapboxApiAccessToken={`${process.env.REACT_APP_MAPBOX_TOKEN}`}
        mapStyle ="mapbox://styles/sambrodersentalebi/ck6gejpiy21zb1ik7bqie80y0"
        //onViewStateChange gives the new viewport which can be used to update view of map
        onViewportChange ={(viewport)=>{setViewport(viewport);}}
      >
        markers here
      </ReactMapGL>
    </div>
  )
}