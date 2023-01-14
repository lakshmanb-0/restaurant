import React from "react";
import "./Navbar.css";
import logo from "../Images/FoodLogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      {/* navbar logo */}
      <div className="navbar_logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <h1 className="logo_name">
          <span>FLYING</span> FOOD
        </h1>
      </div>

      {/* navbar menu bar  */}
      <div className="navbar_menu">
        <ul className="menu_bar">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/catalogy">
            <li>Menu</li>
          </Link>
          <Link to="/aboutus">
            <li>About us</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
          <Link to="/cart">
            <li className="menu_cart">
              <i className="fa-solid fa-bag-shopping cart_icon"></i>
            </li>
          </Link>
        </ul>
      </div>

      {/* navbar tel  */}
      <div className="navbar_tele">
        <i className="fa-solid fa-phone"></i>
        <span>(+91)81547-45976</span>
      </div>
    </div>
  );
}

export default Navbar;
