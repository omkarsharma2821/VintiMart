import React from "react";

const Footer = () => {
  return (
    <>
      {/* Site footer */}
      <footer className="site-footer mt-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                VintiMart is for furniture lovers seeking to add a touch of
                elegance to their homes without breaking the bank. It extends a
                helping hand to those seeking to furnish their homes with
                dignity and grace also empowers both the furniture donor and the
                recipient, fostering a spirit of community and shared purpose
              </p>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li>
                  <a href="/browsefurniture">Home Decor</a>
                </li>
                <li>
                  <a href="/browsefurniture">Modern Furniture</a>
                </li>
                <li>
                  <a href="/browsefurniture">Vintage Article</a>
                </li>
                <li>
                  <a href="/browsefurniture">Browse Furniture</a>
                </li>
                <li>
                  <a href="/browsefurniture">Top Discount</a>
                </li>
                <li>
                  <a href="/addfurniture">Sell Furniture</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="/home">About Us</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/browsefurniture">Purchase</a>
                </li>
                <li>
                  <a href="/view">View Order</a>
                </li>
                <li>
                  <a href="/cartpage">Cart</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright © 2023 All Rights Reserved by
                <a href="/"> VintiMart</a>.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a
                    className="github"
                    href="https://github.com/omkarsharma2821/VintiMart/"
                  >
                    <i class="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="instagram"
                    href="https://instagram.com/omkarsharmaa_"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="linkedin"
                    href="https://www.linkedin.com/in/omkarsharmaa/"
                  >
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
