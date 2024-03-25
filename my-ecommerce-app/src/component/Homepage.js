import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import HomeMainSection from "./Homamainpage";
import Footer from "./Footer";

const Homepage = () => {
	return (
		<BrowserRouter>
			<div class = "homepage">
				<Header />
				<HomeMainSection />
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default Homepage;