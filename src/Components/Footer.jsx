import React from "react";
import { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="footer">
      <div className="navbar_logo">
        <img className="logo" src={require("../Images/FoodLogo.png")} alt="" />
        <h1 className="logo_name">
          <span>FLYING</span> FOOD
        </h1>
      </div>
      <div className="footer_menu">
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
        <a
          href="https://www.behance.net/gallery/86314099/Flying-Food?tracking_source=search_projects%7Cfood%20website"
          target="_blank"
        >
          <li>Design</li>
        </a>
      </div>
      <div className="working_hour">
        <i className="fa-regular fa-clock"></i>
        <div className="working">
          <h1 className="working_title">WORKING HOURS</h1>
          <span className="working_time">09:00 - 23:00</span>
        </div>
      </div>
      <div className="social_icons">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-linkedin"></i>
      </div>
      <div className="footer_banner">
        <img
          className="footer_img"
          src={require("../Images/footer_person.png")}
          alt="footer_person"
        />
        <h1 className="footer_title">
          SUBSCRIBE <span>TO NEWS</span>
        </h1>
        <div className="subscribe">
          <input
            className="subscribe_input"
            type="text"
            placeholder="Enter your email"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="subscribe_btn" onClick={() => setInputValue("")}>
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className="copyright">
        <div className="copy_line"></div>
        <div className="copy_title">&#169; 2022 all rights reserved</div>
      </div>
    </div>
  );
}

export default Footer;
