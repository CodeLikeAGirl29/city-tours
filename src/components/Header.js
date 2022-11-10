import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
	<header>
		<span classNameName='icn-logo'>
			<i classNameName='material-icons'>code</i>
		</span>
		<ul classNameName='main-nav'>
			<li>
				<NavLink exact to='/'>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink to='/about'>About</NavLink>
			</li>
			<li>
				<NavLink to='/cities'>Cities</NavLink>
			</li>
			<li>
				<NavLink to='/attractions'>Attractions</NavLink>
			</li>
		</ul>
	</header>
);

export default Header;
