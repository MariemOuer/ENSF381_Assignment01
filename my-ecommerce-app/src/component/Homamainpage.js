import React, { useState, useEffect } from "react";
import reviewsData from "../data/reviews.js";
import {BrowserRouter as Router, useNavigate } from "react-router-dom";

const HomeMainSection = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		// Fetching random reviews from reviewsData
		const randomReviews = getRandomReviews(reviewsData, 2);
		setReviews(randomReviews);
	}, []);

	// Function to get random reviews
	const getRandomReviews = (reviewsArray, count) => {
		const shuffled = reviewsArray.sort(() => 0.5 - Math.random());
		return shuffled.slice(0, count);
	};

	const navigate = useNavigate();

	function handleButtonClick() {
		navigate("./Productpage");
	}

	return (
		<div class ="home-main-section">
			<section class ="about-us-section">
				<h2>About Us</h2>
				<p>At Skeek, we are more than just an online sneaker shop; we are a passionate community of sneaker enthusiasts 
                dedicated to bringing you the latest and greatest in sneaker fashion. Born out of a shared love for kicks and 
                an unwavering commitment to authenticity, Skeek is your go-to destination for all things sneaker-related.
                Founded with the vision of curating a diverse collection of sneakers that caters to every style and taste, Skeek 
                has evolved into a hub where sneaker culture meets cutting-edge fashion. Our journey began with a simple idea – to create an 
                online space where sneakerheads, fashionistas, and casual enthusiasts alike could explore, discover, and shop the hottest kicks on the market.</p>

				<button class="shop-now-btn" onClick={handleButtonClick}>
					Shop Now
				</button>

			</section>
			<section class ="customer-reviews-section">
				<h2>Customer Reviews</h2>
				<div class ="customer-reviews">
					{reviews.map((review, index) => (
						<div key={index} class ="review">
							<p>{review.customerName}</p>
							<p>{review.reviewContent}</p>
							<p>{"★".repeat(review.stars)}</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default HomeMainSection;