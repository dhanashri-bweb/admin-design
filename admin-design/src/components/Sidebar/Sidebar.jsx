import React, { useState } from "react";
import { FaRegUser, FaPlus, FaList } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { CiMenuFries,CiFileOn } from "react-icons/ci";
import { MdExpandLess, MdExpandMore } from "react-icons/md"; // Icons for toggle
import "./Sidebar.css";
import logo from "../../assets/images/logo-ecommerce.png";
import {  Link } from "react-router-dom"
const Sidebar = () => {
  const [isEcommerceOpen, setEcommerceOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(""); // State to track the active menu item

  const toggleEcommerce = () => {
    setEcommerceOpen(!isEcommerceOpen);
  };

  const handleMenuClick = (item) => {
    setActiveItem(item); // Set the active menu item
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="eCommerce Logo" />
      </div>

      <ul className="menu">
        {/* Ecommerce dropdown */}
        <li>
          <div
            onClick={() => {
              handleMenuClick("ecommerce");
              toggleEcommerce();
            }}
            className={`menu-item ${activeItem === "ecommerce" ? "active" : ""}`}
          >
            <BsCart3 className="icon" /> Ecommerce
            {isEcommerceOpen ? <MdExpandLess className="toggle-icon" /> : <MdExpandMore className="toggle-icon" />}
          </div>
          <ul className={`submenu ${isEcommerceOpen ? "open" : ""}`}>
            <li
              onClick={() => handleMenuClick("add-product")}
              className={activeItem === "add-product" ? "active" : ""}
            >
              <FaPlus className="icon" /> Add Product
            </li>
            <Link to = '/order-list'>
            <li
              onClick={() => handleMenuClick("product-list")}
              className={activeItem === "product-list" ? "active" : ""}
            >
              <FaList className="icon" /> Product List
            </li>
            </Link>
          </ul>
        </li>
        {/* Other menu items */}
        <li
          onClick={() => handleMenuClick("category")}
          className={`menu-item ${activeItem === "category" ? "active" : ""}`}
        >
          <CiMenuFries className="icon" /> Category
        </li>
        <li
          onClick={() => handleMenuClick("order")}
          className={`menu-item ${activeItem === "order" ? "active" : ""}`}
        >
          <CiFileOn className="icon" /> Order
        </li>
        <li
          onClick={() => handleMenuClick("user")}
          className={`menu-item ${activeItem === "user" ? "active" : ""}`}
        >
          <FaRegUser className="icon" /> User
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
