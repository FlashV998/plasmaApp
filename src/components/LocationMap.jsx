import React, { Component } from "react";
import { GOOGLE_MAPS_URL } from "../Utilities/ApiKeys";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
/* global google */
import _ from "lodash";
import {compose, withProps, lifecycle} from "recompose"
// const _ = require("lodash");
// const { compose, withProps, lifecycle } = require("recompose");
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
}  from "react-google-maps"
// const {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } = require("react-google-maps");
import {SearchBox} from "react-google-maps/lib/components/places/SearchBox" 
// const {
//   SearchBox,
// } = require("react-google-maps/lib/components/places/SearchBox");
const MapWithASearchBox = compose(
  withProps({
    googleMapURL: GOOGLE_MAPS_URL,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `300px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  lifecycle({
    componentWillMount() {
      const refs = {};

      this.setState({
        bounds: null,
        center: {
          lat: 18.96,
          lng: 72.82,
        },
        markers: [],
        onMapMounted: (ref) => {
          refs.map = ref;
        },
        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter(),
          });
        },
        onSearchBoxMounted: (ref) => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();

          const bounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(18.96, 72.82),
            new google.maps.LatLng(18.96, 72.82)
          );
          console.log(
            places[0].geometry.location.lat(),
            places[0].geometry.location.lng()
          );
          this.props.formattedLocn(
            places[0].formatted_address,
            places[0].geometry.location.lat(),
            places[0].geometry.location.lng()
          );

          places.forEach((place) => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          const nextMarkers = places.map((place) => ({
            position: place.geometry.location,
          }));
          const nextCenter = _.get(
            nextMarkers,
            "0.position",
            this.state.center
          );
          // console.log(nextCenter);
          this.setState({
            center: nextCenter,
            markers: nextMarkers,
          });
        },
      });
    },
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={15}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
    options={{ mapTypeControl: false }}
  >
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input
        type="text"
        placeholder="Search Places for Event.."
        style={{
          boxSizing: `border-box`,
          // border: `1px solid transparent`,
          borderRadius: `25px`,
          border: `2px solid #FF0000`,
          width: `70%`,
          height: `32px`,
          marginTop: `15px`,
          padding: `0 12px`,
          // borderRadius: `15px 50px 30px 5px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
        className="map-search-input"
      />
    </SearchBox>
    {props.markers.map((marker, index) => (
      <Marker key={index} position={marker.position} />
    ))}
  </GoogleMap>
));

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class LocationMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 59.95,
        lng: 30.33,
      },
      zoom: 11,
      search: "",
      value: "",
      formattedAddress: "",
      btnActive: false,
    };
    this.name = this.name.bind(this);
  }

  handleInputChange = (e) => {
    this.setState({ search: e.target.value, value: e.target.value });
  };

  handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
    this.setState({
      search: "",
      value: geocodedPrediction.formatted_address,
    });
  };

  handleNoResult = () => {
    // console.log("No results for ", this.state.search);
  };

  handleStatusUpdate = (address, lat, lng) => {
    this.setState({ formattedAddress: address });
    this.setState({ btnActive: true });
    let evnt = {
      target: {
        name: "event_location",
        value: {
          lat: lat,
          lng: lng,
          full_address: address,
        },
      },
    };
    
    // this.props.handleEnquiry("location", evnt);
  };

  name(event) {
    // console.log(event);
  }

  render() {
    const { search, value } = this.state;
    const { artistType, humanize } = this.props;

    return (

      <>
        <div className="container">
          <h5>helllo</h5>
            <div className="row">
              <br/> <br/>
              <MapWithASearchBox formattedLocn={this.handleStatusUpdate} />
            </div>
            
        </div>
       
      </>

    );
  }
}

export default LocationMap;
