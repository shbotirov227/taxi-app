import React from 'react';

import "./Section5.scss";

const Section5 = () => {
	return (
		<div className="Section5">
			<h2 className="Section2-title">Остались вопросы?</h2>
			<h4 className="Section2-text">Заполните форму и самое безопасное такси отвезет вас в любую точку Крыма</h4>

			<form action="javascript:void(0)" className="Section5-form">
				<input className="Section5-input" type="text" placeholder="Имя" />
				<input className="Section5-input" type="tel" name="tel" id="tel" placeholder="Телефон" />
				<button className="Section3-btn">Заказать такси!</button>
			</form>
		</div>
	)
}

export default Section5;