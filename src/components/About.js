import React from 'react';
import Img from '../data/city-tours-app.jpg';

const About = (props) => (
  <div className="main-content">
    <h2>{ props.title }</h2>
    <p>"Travel is the main thing you purchase that makes you more extravagant”. We swear by this and put stock in satisfying travel dreams that make you perpetually rich constantly. We have been moving excellent encounters for a considerable length of time through our cutting-edge planned occasion bundles and other fundamental travel administrations. We rouse our clients to carry on with a rich life, brimming with extraordinary travel encounters.</p>
<img src = {Img} alt="City Logo" />
  </div>
);

export default About;
