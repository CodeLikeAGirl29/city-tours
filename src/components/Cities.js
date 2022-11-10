import React from 'react';
import CityList from '../data/cities';

const Cities = () => {
	let cities = CityList.map((city) => {
		return (
			<li classNameName='city' key={city.id}>
				<img classNameName='city-img' src={city.img_src} alt='city' />
				<h3>{city.name}</h3>
				<p>{city.bio}</p>
			</li>
		);
	});

	return (
		<div classNameName='main-content'>
			<h2>Cities</h2>
			<ul classNameName='group'>{cities}</ul>
		</div>
	);
};

export default Cities;
