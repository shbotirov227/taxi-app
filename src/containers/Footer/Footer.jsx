import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/icons/logo.png';

import "./Footer.scss";

const Footer = () => {
	return (
		<div className="Footer">
			<div className="flex">
                <Link className="HeaderTop-logo" to="/"><img src={Logo} alt="" /></Link>

                <ul className="HeaderTop-links flex">
                    <li><Link className="HeaderTop-link" to="/">Мы в цифрах</Link></li>
                    <li><Link className="HeaderTop-link" to="/">Тарифы</Link></li>
                    <li><Link className="HeaderTop-link" to="/">Наши авто</Link></li>
                    <li><Link className="HeaderTop-link" to="/">Отзывы</Link></li>
                    <li><Link className="HeaderTop-link" to="/">Контакты</Link></li>
                </ul>
            </div>

            <div className="flex items-center justify-between">
                <a className="HeaderTop-tel" href="tel:+ 7 978 777 72 72">+ 7 978 777 72 72 </a>
                <span className="HeaderTop-link">/ бесплатно</span>
            </div>
		</div>
	)
}

export default Footer;