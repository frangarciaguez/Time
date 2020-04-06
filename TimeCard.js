import React from 'react';

export default ({ city, time, date }) => 
  <div className="card">
    <h2>{city}</h2>
    <h3>{time}</h3>
    <p>{date}</p>
  </div>;
