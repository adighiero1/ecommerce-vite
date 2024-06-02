import React from 'react';

import "./home.scss";
const Home = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        {/* Your header content */}
      </header>

      {/* Testimonials Carousel */}
      <div className="container mt-5 testimonial-footer-spacing">
        <h2 className="text-center">Customer Testimonials</h2>
        <div id="testimonialsCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <div className="card">
                    <div className="card-body text-center">
                      <p className="card-text">"Great product and service!" Alejandro</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Add more testimonials here */}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">Get to Know Us</h5>
              <p><a href="#">Careers</a> | <a href="#">Blog</a> | <a href="#">About Vapelife</a> | <a href="#">Investor Relations</a> | <a href="#">Vapelife Devices</a> | <a href="#">Vapelife Science</a></p>
            </div>
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">Make Money with Us</h5>
              <p><a href="#">Sell products on Vapelife</a> | <a href="#">Sell on Vapelife Business</a> | <a href="#">Sell apps on Vapelife</a> | <a href="#">Become an Affiliate</a> | <a href="#">Advertise Your Products</a> | <a href="#">Self-Publish with Us</a> | <a href="#">Host an Vapelife Hub</a> | ›See More Make Money with Us</p>
            </div>
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">Vapelife Payment Products</h5>
              <p><a href="#">Vapelife Business Card</a> | <a href="#">Shop with Points</a> | <a href="#">Reload Your Balance</a> | <a href="#">Vapelife Currency Converter</a></p>
            </div>
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">Let Us Help You</h5>
              <p><a href="#">Vapelife and COVID-19</a> | <a href="#">Your Account</a> | <a href="#">Your Orders</a> | <a href="#">Shipping Rates & Policies</a> | <a href="#">Returns & Replacements</a> | <a href="#">Manage Your Content and Devices</a> | <a href="#">Vapelife Assistant</a> | <a href="#">Help</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;