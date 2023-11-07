import React from 'react';

function TravelAdvisory({ location, advisory }) {
  return (
    <div>
      <h2>Travel Advisory for {location}</h2>
      <p>{advisory}</p>
    </div>
  );
}

export default TravelAdvisory;
