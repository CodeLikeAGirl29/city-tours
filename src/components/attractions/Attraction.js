import React from 'react';

const Attraction = (props) => (
  <li className="attraction media group">
    <img className="attraction-img" src={props.img} alt="attraction" />
    <div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  </li>
);

export default Attraction;