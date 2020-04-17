import React, { Component } from "react";
import { compose, withStateHandlers } from "recompose";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from "react-google-maps";

const Map = compose(
  withStateHandlers(
    () => ({
      isMarkerShown: true,
      markerPosition: null,
    }),
    {
      onMapClick: ({ isMarkerShown }) => (e) => ({
        markerPosition: e.latLng,
        isMarkerShown: true,
      }),
    }
  ),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 33.9928, lng: -117.3684 }}
    onClick={props.onMapClick}
  >
    {props.isMarkerShown && (
      <Marker
        position={{ lat: 33.9928, lng: -117.3684 }}
        onClick={props.onMarkerClick}
      />
    )}
  </GoogleMap>
));

class MapContainer extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBOpXqM4pr849cX6wKt5_6DSxGiMWnJ-fo"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div
              style={{
                height: `500px`,
                width: `100%`,
                marginLeft: `auto`,
                marginRight: `auto`,
              }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default MapContainer;
