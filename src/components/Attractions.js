import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import NewYork from './attractions/NewYork';
import LosAngeles from './attractions/LosAngeles';
import Dallas from './attractions/Dallas';
import Vegas from './attractions/Vegas';

const Attractions = ({match}) => (
  <div className="main-content attraction">
    <div className="attraction-header group">
      <h2>Attractions</h2> 
      <ul className="attraction-nav">
        <li><NavLink to={`${match.url}/newyork`}>NEW-YORK</NavLink></li>
        <li><NavLink to={`${match.url}/losangeles`}>LA</NavLink></li>
        <li><NavLink to={`${match.url}/dallas`}>DALLAS</NavLink></li>
        <li><NavLink to={`${match.url}/vegas`}>VEGAS</NavLink></li>
      </ul>
    </div>
    
    {/* Write routes here... */}
    <Route exact path={match.path} render={ () => <Redirect to={`${match.path}/newyork`} /> } />
    <Route path={`${match.path}/newyork`} component={NewYork} />
    <Route path={`${match.path}/losangeles`} component={LosAngeles} />
    <Route path={`${match.path}/dallas`} component={Dallas} />
    <Route path={`${match.path}/vegas`} component={Vegas} />
  </div>
);

export default Attractions;