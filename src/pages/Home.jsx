import React from "react";
import Header from "../containers/Header/Header";
import Section2 from "../containers/Section2/Section2";
import Section3 from "../containers/Section3/Section3";
import Section4 from "../containers/Section4/Section4";
import Section5 from "../containers/Section5/Section5";
import Description from "../containers/Description/Description";
import Footer from "../containers/Footer/Footer";

const Home = () => {
	return (
		<div className="Home">
			<Header />
			<div className="Home-inner">
				<Section2 />
				<Section3 />
				<Section4 />
				<Section5 />
				<Description />
				<Footer />
			</div>
		</div>
	)
}

export default Home;