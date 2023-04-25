import React, { useEffect, useRef } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap,Marker } from "react-google-maps"

let coords

function MapComponent({coords}) {
    console.log(coords.lat);
    const lattitude = parseInt(coords.lat);
    const longitude = parseInt(coords.lng)
    console.log(typeof longitude);
    return <GoogleMap  defaultZoom={10} defaultCenter={{ lat: lattitude, lng: longitude }} >
        <Marker position={{ lat: lattitude, lng: longitude }} />
    </GoogleMap>
}

const WrappedComponent = withGoogleMap((props)=>MapComponent(props))

function Map({coords}) {
    return <div style={{width:"600px",height:"400px",borderRadius:"30px",overflow:"hidden"}}>
        <WrappedComponent
            // isMarkerShown
            // googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAy8GPmtNMBAyBKhX3lYdDRCQHWA1xgbGs`}
            // loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px`,borderRadius:"30px" }} />}
            mapElement={<div style={{ height: `100%` }} />}
            coords={coords}
             />
    </div>;
}
export default Map