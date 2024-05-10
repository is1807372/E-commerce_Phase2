import React from 'react';
import 'home.css'; // Import CSS file

const Home = () => {
    return (
        <div>
            <header>
                <h1>Welcome to our E-Commerce Website</h1>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
            </header>

            <section>
                <h2>Featured Products</h2>
                <div className="product-list">
                    <div className="product">
                        <img src="product1.jpg" alt="Product 1" />
                        <h3>Product 1</h3>
                        <p>Description of Product 1</p>
                        <button>Add to Cart</button>
                    </div>
                    <div className="product">
                        <img src="product2.jpg" alt="Product 2" />
                        <h3>Product 2</h3>
                        <p>Description of Product 2</p>
                        <button>Add to Cart</button>
                    </div>
                    {/* Add more products here */}
                </div>
            </section>

            <footer>
                <p>&copy; 2024 Your Company Name. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
