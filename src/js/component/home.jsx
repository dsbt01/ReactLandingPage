import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


import Flexbox from "./flexbox.jsx";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Middle from "./middle.jsx";
// create your first component
const Home = () => {
	return (
	<div>
				<Header/>
		 <Middle/>
		<Flexbox/>
		<Footer/> 

	</div>

	);
};

export default Home;
