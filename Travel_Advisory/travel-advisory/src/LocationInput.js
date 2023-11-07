import React, { useState } from 'react';

function LocationInput({ onLocationSubmit }) {
  const [location, setLocation] = useState('');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLocationSubmit(location);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter a location:
        <input type="text" value={location} onChange={handleLocationChange} />
      </label>
      <button type="submit">Get Travel Advisory</button>
    </form>
  );
}

export default LocationInput;
