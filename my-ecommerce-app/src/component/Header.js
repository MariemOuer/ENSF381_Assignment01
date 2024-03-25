import React from "react";

const Header = () => {
	return (
		<header>
			<div className="logo2">
				<img src="/images/logo.png" alt="Company Logo" />
			</div>
			<div className="comp-name">Skeek</div>
			<nav>
				<a href="/">Home</a>
				<a href="./Productpage.js">Products</a>
				<a href="/login">Login</a>
			</nav>
		</header>
	);
};

export default Header;