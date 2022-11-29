import React from 'react';

import "./Informations.scss";


const Informations = ({ title, description, description2 }) => {
	return (
		<div className="Informations">
			<h4 className="title yellowDefault mb-4">{title}</h4>
			<p className="description">{description}</p>
			<p className="description">{description2}</p>
		</div>
	)
}

export default Informations