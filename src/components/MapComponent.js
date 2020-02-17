import React, {useState} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import {FaMapMarkerAlt} from "react-icons/fa";
import { IconContext } from "react-icons";

export default function MapComponent(){
  const [viewport, setViewport] = useState({
    latitude: 55.861730,
    longitude:9.851940,
    width: "100%",
    height: "500px",
    zoom: 15
  })

  return(
    <div>
      <ReactMapGL {... viewport}
        mapboxApiAccessToken={`${process.env.REACT_APP_MAPBOX_TOKEN}`}
        mapStyle ="mapbox://styles/sambrodersentalebi/ck6gejpiy21zb1ik7bqie80y0"
        //onViewStateChange gives the new viewport which can be used to update view of map
        onViewportChange ={(viewport)=>{setViewport(viewport);}}
      >
        <Marker key={1} latitude={55.862350} longitude={9.852370}>
          <div>
            <IconContext.Provider value={{size:"2em" }}>
              <FaMapMarkerAlt/>
            </IconContext.Provider>
            
          </div>
        </Marker>
      </ReactMapGL>
    </div>
  )
}