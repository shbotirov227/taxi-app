import React from "react";

import "./Person.scss";

const Person = ({ icon, img, name, job, description }) => {
	return (
		<div className="Person">
			<div>
				<span className="Person-icon">{icon}</span>
				<img className="Person-img" src={img} alt="personImg" />
			</div>

			<h4 className="Person-name">{name}</h4>
			<span className="Person-job">{job}</span>
			<p className="Person-description">{description}</p>
		</div>
	)
}

export default Person;