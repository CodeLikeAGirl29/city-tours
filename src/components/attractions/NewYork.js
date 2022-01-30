import React from 'react';
import Attraction from './Attraction';
import { NewYork } from '../../data/attractions';

const NYC = (props) => {
  let attraction = NewYork.map((attraction) => {
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

export default NYC;