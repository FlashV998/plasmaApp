 
import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

export default function AutoMap() {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });

  const handleSelect = async value => {
    
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    console.log("hey"+JSON.parse(results));
    console.log("sas"+JSON.stringify(latLng));
    console.log("dsd"+value);
    setAddress(value);
    setCoordinates(latLng);
  };

  return (
    <div >
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="row"  style={{margin:"1.5rem"}}>
            
            
<div className="col-6">
            <input {...getInputProps({ placeholder: "Type address" })} />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
            </div>
            <div className="col-6" style={{textAlign:"end"}}><button type="button"><span className="buttonText">EXPLORE</span></button></div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}