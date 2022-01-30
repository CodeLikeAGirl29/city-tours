import React from 'react';
import CityList from '../data/cities';

const Cities = () => {
  let cities = CityList.map((city) => {
    return (
      <li className="city" key={city.id} >
        <img className="city-img" src={city.img_src} alt="city" />
        <h3>{city.name}</h3>
        <p>{city.bio}</p>
      </li>
    );
  }); 
  
  return (
    <div className="main-content">
      <h2>Cities</h2>
      <ul className="group">
        {cities}    
      </ul>
    </div>
  );
}

export default Cities;