import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import './Header.css';  // If you have custom styles

function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
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
        <div className="auth-links d-flex">
          {user ? (
            <>
              <span className="nav-link text-white">Welcome, {user.username}</span>
              <button className="btn btn-outline-light" onClick={logout}>Logout</button>
            </>
          ) : (
            <Link to="/login" className="btn btn-outline-light">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
