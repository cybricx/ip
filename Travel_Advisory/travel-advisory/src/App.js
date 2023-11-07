import React, { useState } from 'react';
import './App.css';
import LocationInput from './LocationInput';
import TravelAdvisory from './TravelAdvisory';

function App() {
  const [travelData, setTravelData] = useState(null);

  const handleLocationSubmit = (location) => {
    // For this basic example, we'll use a hard-coded advisory message.
    const advisory = "This is a sample travel advisory message for " + location;

    setTravelData({ location, advisory });
  };

  return (
    <div className="App">
      <h1>Travel Advisory WebApp</h1>
      <LocationInput onLocationSubmit={handleLocationSubmit} />
      {travelData && <TravelAdvisory location={travelData.location} advisory={travelData.advisory} />}
    </div>
  );
}

export default App;
