import React, { useState } from 'react'
import { Modal, Button, Input } from 'antd';
import usePlacesAutocomplete from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";


const PlacesAutocomplete = () => {
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
	
	
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();

    
          console.log("Coordinates: ", {description });
        
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)} >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div ref={ref}>
      
	  <Input
              suffixIcon={null}
              className="select villa"
              showSearch
              // style={{ width: 200 }}
              
              optionFilterProp="children"
               value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Ville"
	  name="locationn"
              />
	  
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && <ul className="autocomplete-dropdown-container">{renderSuggestions()}</ul>}
    </div>
  );
};

export default PlacesAutocomplete