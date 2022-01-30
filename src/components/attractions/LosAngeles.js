import React from 'react';
import Attraction from './Attraction';
import { LosAngeles } from '../../data/attractions';

const LA = (props) => {
  let attraction = LosAngeles.map((attraction) => {
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

export default LA;