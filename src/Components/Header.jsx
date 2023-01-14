import React from "react";
import "./Header.css";
import header_pic from "../Images/burger_header.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <h1 className="header_title">FLYING FOOD</h1>
        <h1 className="header_title">DELEVERY</h1>
        <p className="header_para">
          Speakeasies and hidden bars or restaurants make customers feel like
          they're stumbling upon something secret and just for them.
        </p>
        <Link to="/catalogy">
          <button className="header_btn">GO TO CATALOG</button>
        </Link>
      </div>

      <div className="header_right">
        <img className="header_pic" src={header_pic} alt="" />
      </div>
    </div>
  );
}

export default Header;
