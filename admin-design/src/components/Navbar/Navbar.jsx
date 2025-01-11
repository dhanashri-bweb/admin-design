import React from "react";
import { FaSearch, FaMoon, FaBell, FaExpand } from "react-icons/fa";
import "./Navbar.css";
import profile from '../../assets/images/profile-ecommerce.jpg'

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search here..." />
      </div> */}
      <div className="nav-icons">
        <div className="icon-wrapper">
          <FaMoon />
        </div>
        <div className="icon-wrapper">
          <FaBell />
          <span className="notification-count">6</span>
        </div>
        <div className="icon-wrapper">
          <FaExpand />
        </div>
        <div className="profile">
          <img src={profile} alt="User Profile" />
          <div>
            <p>Rina Mehta</p>
            <small>Admin</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
