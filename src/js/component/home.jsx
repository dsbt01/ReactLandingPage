import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Middle from "./middle.jsx";
import CardComponent from "./cardComponent.jsx";

// create your first component
const Home = () => {
	return (
	<div>
		<Header/>
		<Middle/>
		<CardComponent/>
		<Footer/> 

	</div>

	);
};

export default Home;
