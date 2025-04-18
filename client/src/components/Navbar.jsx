import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#2c3e50' }}>
      <div className="container-fluid">
        <Link className="navbar-brand text-warning" to="/">
          Resipie Restaurant
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/reservation">Reserve a Table</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/login">Login/Sign In</Link>
            </li>

            {/* Future Profile Icon */}
            <li className="nav-item">
              <Link className="nav-link text-light" to="/profile">
                <i className="bi bi-person-circle"></i> {/* Profile icon */}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
