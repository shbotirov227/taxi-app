import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Person from "../../components/Person/Person";
import PersonImg1 from "../../assets/images/personImg1.png"
import PersonImg2 from "../../assets/images/personImg2.png"
import PersonImg3 from "../../assets/images/personImg3.png"

import "swiper/css";
import "swiper/css/pagination";

import "./Section4.scss";
import { Pagination } from "swiper";

const data = [
	{
		icon: 1,
		img: PersonImg1,
		name: "Алексей",
		job: "Отзыв о комфорт+",
		description: "Заказывали здесь такси в Севастополь, поездка понравилась: недорого, вовремя и водитель адекватный. Спасибо!"
	},

	{
		icon: 2,
		img: PersonImg2,
		name: "Марта",
		job: "Отзыв о стандарт",
		description: "Все четко! Вовремя приезжают, отличные авто и цены. Довольна, спасибо!"
	},

	{
		icon: 3,
		img: PersonImg3,
		name: "Виталий",
		job: "Отзыв о бизнес",
		description: "Хорошее такси, всегда чистые ухоженные машины и водители адекватные, что сегодня не часто встретишь"
	},

	{
		icon: 4,
		img: PersonImg1,
		name: "Марта",
		job: "Отзыв о стандарт",
		description: "Все четко! Вовремя приезжают, отличные авто и цены. Довольна, спасибо!"
	},

	{
		icon: 5,
		img: PersonImg2,
		name: "Алексей",
		job: "Отзыв о комфорт+",
		description: "Заказывали здесь такси в Севастополь, поездка понравилась: недорого, вовремя и водитель адекватный. Спасибо!"
	},
]

const Section4 = () => {
	return (
		<div className="Section4">
			<div className="Section4-inner">
				<h2 className="Section2-title">Отзывы клиентов</h2>
				<h4 className="Section2-text">Послушайте мнение тех, кто уже заказывал наше такси!</h4>
			</div>

			<div className="Section4-persons container">
				{/* <Swiper
					slidesPerView={3}
					spaceBetween={10}
					// pagination={{ clickable: true }}
					modules={[Pagination]}
					// className="mySwiper"
				>					 */}
					{
						data.map(el => (
							// <SwiperSlide>
								<Person icon={el.icon} img={el.img} name={el.name} job={el.job} description={el.description} />
							/* </SwiperSlide> */
						))
					}
					{/* <button onClick={() => swiper.slideNext()}>Slide to the next slide</button> */}
				{/* </Swiper> */}
			</div>
			<div>
				<span className="line"></span>
				<span className="line"></span>
				<span className="line"></span>
			</div>
		</div>
	)
}

export default Section4;