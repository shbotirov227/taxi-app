import React from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom';

import "./Header.scss";

const Header = () => {
	return (
		<div className="Header">
			<HeaderTop />
			<HeaderBottom />
		</div>
	)
}

export default Header;