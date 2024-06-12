import React, { useState } from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  const handleAcceptCookies = () => {
    setShowCookieConsent(false);
    // Here you would typically set a cookie to remember the user's preference
  };

  return (
    <>
      {showCookieConsent && (
        <div className="cookie-consent text-white py-3 px-4 bg-dark">
          <p className="mb-0">
            We use cookies to ensure you get the best experience on our website. By using our site, you agree to our use of cookies.
            <button onClick={handleAcceptCookies} className="btn btn-primary btn-sm ml-3">Accept</button>
          </p>
        </div>
      )}
      <footer className="footer text-white bg-dark">
        <div className="container py-5">
          <div className="row first-level mb-4 justify-content-center">
            <div className="col-md-5 mb-4 mb-md-0">
              <h5 className="footer-title"><i className="fas fa-phone-alt"></i> Contact Us</h5>
              <p className="contact-info">
                <strong>Epsilon Hellas Head Office</strong><br />
                <i className="fas fa-map-marker-alt"></i> MITERA Building, 1st Floor, 113-115 Vasileos Konstantinou Str.<br />
                Limassol 3080, Cyprus<br />
                <i className="fas fa-phone"></i> +357 25266050<br />
                <i className="fas fa-phone"></i> +357 25252595<br />
                <i className="fas fa-envelope"></i> <a href="mailto:crew@epsilonhellas.com" className="text-light">crew@epsilonhellas.com</a>
              </p>
            </div>
            <div className="col-md-5">
              <h5 className="footer-title"><i className="fas fa-phone-alt"></i> Contact Us</h5>
              <p className="contact-info">
                <strong>Epsilon Hellas</strong><br />
                <i className="fas fa-map-marker-alt"></i> Leoforos Vouliagmenis, 120-122,<br />
                Glyfada, 16674, Greece<br />
                <i className="fas fa-phone"></i> +30 2104551500<br />
                <i className="fas fa-phone"></i> +30 2104101597<br />
                <i className="fas fa-envelope"></i> <a href="mailto:crew@epsilonhellas.com" className="text-light">crew@epsilonhellas.com</a>
              </p>
            </div>
          </div>
          <div className="row second-level mb-4 justify-content-center">
            <div className="col-12 mb-3 text-center">
              <h5 className="footer-title"><i className="fas fa-map-marker-alt"></i> Our global presence</h5>
              <div className="footer-divider"></div>
            </div>
          </div>
          <div className="row second-level mb-4 justify-content-center">
            <div className="col-md-3 mb-3">
              <ul className="list-unstyled location-list">
                <li><i className="fas fa-map-marker-alt"></i> The Philippines</li>
                <li><i className="fas fa-map-marker-alt"></i> Ukraine</li>
                <li><i className="fas fa-map-marker-alt"></i> Russia</li>
                <li><i className="fas fa-map-marker-alt"></i> Romania</li>
                <li><i className="fas fa-map-marker-alt"></i> Turkey</li>
              </ul>
            </div>
            <div className="col-md-3 mb-3">
              <ul className="list-unstyled location-list">
                <li><i className="fas fa-map-marker-alt"></i> Greece</li>
                <li><i className="fas fa-map-marker-alt"></i> Cyprus</li>
                <li><i className="fas fa-map-marker-alt"></i> Indonesia</li>
                <li><i className="fas fa-map-marker-alt"></i> Vietnam</li>
                <li><i className="fas fa-map-marker-alt"></i> Georgia</li>
              </ul>
            </div>
            <div className="col-md-6 mb-3 text-center">
              <h5 className="footer-title"><i className="fas fa-graduation-cap"></i> Training Centers</h5>
              <ul className="list-unstyled training-list text-center">
                <li><i className="fas fa-school-circle-check"></i> Manila – Veritas Manila Maritime TC</li>
                <li><i className="fas fa-school-circle-check"></i> Odessa – Epsilon Maritime TC</li>
                <li><i className="fas fa-school-circle-check"></i> Const. – Veritas Danube TC</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center py-3 d-flex justify-content-center align-items-center">
          <p className="mb-0 mr-2">&copy; {currentYear} Epsilon Hellas. All rights reserved.</p>
          <a href="https://www.facebook.com/epsiloncrew" className="text-light ml-3">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
