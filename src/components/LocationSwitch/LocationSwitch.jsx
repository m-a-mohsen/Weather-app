/* eslint-disable react/prop-types */
import { useState } from "react";

export function LocationSelector({ onLocationChange }) {
  const [selectedLocation, setSelectedLocation] = useState("sahara");

  const handleLocationChange = (event) => {
    const newLocation = event.target.value;
    setSelectedLocation(newLocation);
    onLocationChange(newLocation);
  };

  return (
    <div>
      <label>Select Location: </label>
      <select value={selectedLocation} onChange={handleLocationChange}>
        <option className="sahara" value="sahara">
          Sahara
        </option>
        <option className="rainforest" value="rainforest">
          Rainforest
        </option>
        <option className="europe" value="europe">
          Europe
        </option>
        <option className="arctic" value="arctic">
          Arctic
        </option>
      </select>
    </div>
  );
}
