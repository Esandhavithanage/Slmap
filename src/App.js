import React from 'react';
import logo from './logo.svg';
import './App.css';
import {GoogleMap,withScriptjs,withGoogleMap,Marker} from 'react-google-maps'

// function Map(){

//   return(
//     <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{lat:6.927079,lng:79.861244}}
//     panTo={{lat:6.927079,lng:79.861244}}

//     />
//   );
// }

const Map = ({center,zoom}) => {
var zoommap = 8;
  function handleZoomChanged(){
    var mapzoom = this.getZoom();
    console.log(this.getZoom())
    console.log(this.center)
    if(mapzoom <8){
  
      this.zoom = 8
    }
  }



  return (
    <GoogleMap
        defaultZoom={zoommap}
    defaultCenter={{lat:7.904551604861729,lng:80.4819715390625}}
    panTo={{lat:6.927079,lng:79.861244}}
    onZoomChanged={handleZoomChanged}
    >
      <Marker
      key={2}
      position= {{lat:7.093072,lng:80.000398}}
      />
    </GoogleMap>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

 function App() {
 
  return (
    
    <div style={{width:"100vw",height:"100vh"}}>  
    <WrappedMap
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDi0kmH7TLYbwpGDGwCgOogc0rqHMAgb9I&language=si&region=SL`}
    loadingElement={<div style={{height:"100%"}}/>}
    containerElement={<div style={{height:"100%"}}/>}
    mapElement={<div style={{height:"100%"}}/>}

    />
    </div>
  );
}

export default App;
