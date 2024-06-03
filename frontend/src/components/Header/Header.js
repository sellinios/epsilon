import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, Route, Routes } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs'; // Import the AboutUs component

function Header() {
  return (
    <>
      <header className="App-header">
        <nav className="nav-links">
          <Link to="/about-us">ABOUT US</Link>
          <Link to="/services">SERVICES</Link>
          <Link to="/locations">LOCATIONS</Link>
          <Link to="/facts-figures">FACTS & FIGURES</Link>
          <Link to="/news-events">NEWS & EVENTS</Link>
          <Link to="/contact-us">CONTACT US</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default Header;
