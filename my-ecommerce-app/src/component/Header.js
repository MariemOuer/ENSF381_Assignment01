import React from 'react';

function Header() {
    return (
        <div>
            <header class="header">
                <div>
                <img src = "./my-ecommerce-app/public/images/logo.png" alt="Logo"></img>
                </div>
                <h1>Skeek</h1>
            </header>

            <nav class="main-nav">
            <a href = "./index.html">Home Page</a>
            <a href = "./login.html">Login Page</a>
            <a href = "./products.html">Our Products</a>
            </nav>
        </div>
    );
}

export default Header;