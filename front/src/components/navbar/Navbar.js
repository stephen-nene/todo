import React, { useState } from "react";
import "./navbar.css"; // import custom CSS or Sass file

function NavBar() {
  const [activeTab, setActiveTab] = useState("home"); // track active tab with state

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li
          className={`nav-item ${activeTab === "home" ? "active" : ""}`}
          onClick={() => handleTabClick("home")}
        >
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li
          className={`nav-item ${activeTab === "add-todo" ? "active" : ""}`}
          onClick={() => handleTabClick("add-todo")}
        >
          <a href="/add-todo" className="nav-link">
            Add To
          </a>
        </li>
        <li
          className={`nav-item ${activeTab === "profile" ? "active" : ""}`}
          onClick={() => handleTabClick("profile")}
        >
          <a href="/profile" className="nav-link">
            Profile
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
