import React, { useState } from "react";
import { Modal, Button, Input } from "antd";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

const PlacesAutocomplete = (props) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: "fr" },
      fields: ["formatted_address", "geometry.location"],
      strictBounds: false,
      types: ["address"],
    },
    debounce: 300,
  });
  console.log("value", props.inpVal);

  const [hidValue, setHidValue] = useState("");

  /*
	if(props.inpVal){
		setValue( props.inpVal,false);
	}*/

  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter to "false"
    setValue(description, false);
    clearSuggestions();
    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        setHidValue(lat + "," + lng);
      })
      .catch((error) => {});
  };

  const renderSuggestions = () =>
    data.map((suggestion, i) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={i} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div ref={ref} style={{ width: props.divWidth }}>
      <Input
        suffix={null}
        className="select ant-select"
        style={{ width: "90%" }}
        value={props.inpVal}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Ville"
        name="address"
      />
      <Input
        name="location"
        id="locationnn"
        value={hidValue}
        style={{ display: "none" }}
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && (
        <ul className="autocomplete-dropdown-container">
          {renderSuggestions()}
        </ul>
      )}
    </div>
  );
};

export default PlacesAutocomplete;
