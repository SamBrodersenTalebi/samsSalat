import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export default function MapComponent() {
  const [viewport, setViewport] = useState({
    latitude: 55.86173,
    longitude: 9.85194,
    width: '100%',
    height: '500px',
    zoom: 15,
  });

  useEffect(() => {
    /*resize properly with handleResize*/
    function handleResize() {
      setViewport({
        latitude: 55.86173,
        longitude: 9.85194,
        width: '100%',
        height: '500px',
        zoom: 15,
      });
    }
    window.addEventListener('resize', handleResize);
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={`${process.env.REACT_APP_MAPBOX_TOKEN}`}
        mapStyle='mapbox://styles/sambrodersentalebi/ck6gejpiy21zb1ik7bqie80y0'
        //onViewStateChange gives the new viewport which can be used to update view of map
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        <Marker key={1} latitude={55.86235} longitude={9.85237}>
          <div>
            <IconContext.Provider value={{ size: '2em' }}>
              <FaMapMarkerAlt />
            </IconContext.Provider>
          </div>
        </Marker>
      </ReactMapGL>
    </div>
  );
}
