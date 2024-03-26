import React from "react";
import Header from "./Header";
import HomeMainSection from "./Homamainpage";
import Footer from "./Footer";

const Homepage = ({ navigateTo }) => {
    const handleProductButtonClick = () => {
        navigateTo('product');
    };

    return (
        <div className="homepage">
            <Header />
            <HomeMainSection />
            <Footer />
            <button onClick={handleProductButtonClick}>Go to Product Page</button>
        </div>
    );
};

export default Homepage;
