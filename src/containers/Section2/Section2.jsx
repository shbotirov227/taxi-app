import React from 'react';
import Nums from "../../components/Nums/Nums";
import CardImg from "../../assets/images/car.png";

import "./Section2.scss";

const Section2 = () => {

	return (
		<div className="Section2 container text-center mt-20 mb-20">
			<h2 className="Section2-title">Мы в цифрах</h2>
			<h4 className="Section2-text">Немного информации в цифрах о нашей компании!</h4>
			
			<div className="flex items-center justify-center">
				<div className="Section2-left">
					<Nums numLeft="1" title="Нет" text="Недовольных клиентов" />
					<Nums numLeft="2" title="175" text="Авто в автопарке" />
				</div>

				<div className="Section2-carImgSection">
					<img className="cardImg" src={CardImg} alt="carImg"/>
				</div>

				<div className="Section2-right">
					<Nums numRight="3" title="6 лет" text="Средний опыт водителей" />
					<Nums numRight="4" title="4672" text="Постоянных клиентов" />
				</div>
			</div>
		</div>
	)
}

export default Section2;