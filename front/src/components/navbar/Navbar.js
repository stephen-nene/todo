import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/add-todo" className="navbar-link">
        Add Todo
      </Link>
      <Link to="/profile" className="navbar-link">
        Profile
      </Link>
    </nav>
  );
}

export default Navbar;
