/* global bootstrap */
import React, { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Carousel } from 'bootstrap'; // Import Bootstrap JS components individually

const Home = () => {
    useEffect(() => {
        const myCarousel = document.getElementById('myCarousel');
        const carousel = new Carousel(myCarousel, {
            interval: 3000, // Set the interval for auto-sliding (in milliseconds)
            wrap: true, // Enable carousel wrap
        });

        // Return a cleanup function to remove the carousel when the component unmounts
        return () => {
            carousel.dispose();
        };
    }, []); // Empty dependency array to only run this effect once

    return (
      <div>
        <header className="navbar navbar-expand-lg encabezado">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">VapeLife</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <nav className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/login">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/register">Register</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/api/users/profile">Account</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
       <div className="container">
            <div className="welcome-message">
                <h1>Welcome to Our Vape Store!</h1>
                <p>Enjoy browsing our collection of products.</p>
            </div>

            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPK-zH1a32ccteBplxFxS8aldwgRgNAPQ1WRXdwgTuOQ&s" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://i.pcmag.com/imagery/reviews/01N4n33ggRDLdmivW7zqdgm-1.fit_scale.size_760x427.v1569477535.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://cdn11.bigcommerce.com/s-wun0oa9/product_images/uploaded_images/pick-a-kit-at-ecigforlife.jpg?t=1564037356&_ga=2.37557472.1136156437.1562915832-2144124919.1541454380" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div> 
    );
};

export default Home;
