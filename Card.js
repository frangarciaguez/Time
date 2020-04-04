import React from 'react';

export default ({ city, time, date }) => 
  <div class="card">
    <h2>{city}</h2>
    <p>{time}</p>
    <p>{date}</p>
  </div>;
