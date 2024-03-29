import React, { useState, useEffect } from "react";
import reviewsData from "../data/reviews.js";

const HomeMainSection = ({ onShopNow }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const randomReviews = getRandomReviews(reviewsData, 2);
        setReviews(randomReviews);
    }, []);

    const getRandomReviews = (reviewsArray, count) => {
        const shuffled = reviewsArray.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    return (
        <div className="home-main-section">
            <section className="about-us-section">
                <h2>About Us</h2>
                <p>At Skeek, we are more than just an online sneaker shop; we are a passionate community of sneaker enthusiasts 
                dedicated to bringing you the latest and greatest in sneaker fashion. Born out of a shared love for kicks and 
                an unwavering commitment to authenticity, Skeek is your go-to destination for all things sneaker-related.
                Founded with the vision of curating a diverse collection of sneakers that caters to every style and taste, Skeek 
                has evolved into a hub where sneaker culture meets cutting-edge fashion. Our journey began with a simple idea – to create an 
                online space where sneakerheads, fashionistas, and casual enthusiasts alike could explore, discover, and shop the hottest kicks on the market.</p>

                <button className="shop-now-btn" onClick={onShopNow}>
                    Shop Now
                </button>
            </section>
            <section className="customer-reviews-section">
                <h2>Customer Reviews</h2>
                <div className="customer-reviews">
                    {reviews.map((review, index) => (
                        <div key={index} className="review">
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
