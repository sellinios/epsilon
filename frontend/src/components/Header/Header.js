// src/components/Header/Header.js
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs';
import './Header.css'; // If you have any custom styles

function Header() {
  return (
    <>
      <header className="App-header bg-dark text-white py-3">
        <nav className="container d-flex justify-content-between">
          <div className="nav-links d-flex">
            <Link to="/about-us" className="nav-link text-white">ABOUT US</Link>
            <Link to="/services" className="nav-link text-white">SERVICES</Link>
            <Link to="/locations" className="nav-link text-white">LOCATIONS</Link>
            <Link to="/facts-figures" className="nav-link text-white">FACTS & FIGURES</Link>
            <Link to="/news-events" className="nav-link text-white">NEWS & EVENTS</Link>
            <Link to="/contact-us" className="nav-link text-white">CONTACT US</Link>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default Header;
