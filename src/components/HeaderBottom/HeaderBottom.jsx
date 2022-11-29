import React from 'react';
import Informations from '../Informations/Informations';

import "./HeaderBottom.scss";

const data = [
	{
		id: 0,
		title: "Безопасность",
		description: "Автомобили проходят регулярный техосмотр и дезинфицируются после каждой поездки.",
		description2: "Также мы сторого соблюдаем правила перевозки маленьких поссажиров и абсолютно бесплатно предоставим детское атокресло или бустер"
	},

	{
		id: 1,
		title: "Без «бомбил»",
		description: "Только официальное трудоустройство — все наши водители с лицензией в такси и со стажем вождения по Крыму от 8 лет.",
		description2: " *Поездка проходит с соблюдением масочного режима"
	},
	
	{
		id: 2,
		title: "Круглосуточный заказ такси",
		description: "Работаем 24/7 — оперативно подадим автомобиль в любое время суток. Ночные тарифы дополнительно не тарифициеруются и также доступны и недороги как дневные"
	},

	{
		id: 3,
		title: "Скидка  до 50%",
		description: "Предоставим скидку на обратный трансфер до 50% от средней цены поездки. Просто заранее предупредите оператора, что вам понадобится машина обратно"
	}
]

const HeaderBottom = () => {
	return (
		<div className="HeaderBottom flex container">
			<div className="HeaderBottom-left">
				<h2  className="HeaderBottom-title">Официальное такси аеропорта Симферополь</h2>

				<div className="flex flex-wrap">{data.map(el => <Informations key={el.id} title={el.title} description={el.description} description2={el.description2} />)}</div>
			</div>

			<div className="HeaderBottom-right w-1/2">
				dfasdgesd
			</div>
		</div>
	)
}

export default HeaderBottom; 