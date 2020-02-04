import React from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';


//NEED TOKEN!!
//https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
class MapComponent extends React.Component{
  render(){
    return (
    <ReactMapGL latitude={37.78} longitude={-122.41} zoom={8}>
        <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
          <div>You are here</div>
        </Marker>
    </ReactMapGL>
      );
  }
}

export default MapComponent;