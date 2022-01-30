import React from 'react';
import Attraction from './Attraction';
import { Vegas } from '../../data/attractions';

const LasVegas = (props) => {
  let attraction = Vegas.map((attraction) => {
    return <Attraction title={attraction.title}
                   desc={attraction.description}
                   img={attraction.img_src}
                   key={attraction.id} />
  }); 
  return (
    <div>
      <ul>
        {attraction}    
      </ul>
    </div>
  );
}

export default LasVegas;