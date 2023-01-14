import React from "react";
import Category from "../Components/Category";
import MenuDetails from "../Components/MenuDetails";
import Footer from "../Components/Footer";
import "./Catalogy.css";
import { Link } from "react-router-dom";

function Catalog({ onlymenunav }) {
  return (
    <div className="Catalogy">
      {/* navbar  */}
      <div className="cata_navbar">
        <div className="cata_left">
          <figure className="cata_logo">
            <Link to="/">
              <img
                src={require("../Images/FoodLogo.png")}
                alt=""
                className="logo"
              />
            </Link>

            <figcaption className="logo_name">
              <span>FLYING</span> FOOD
            </figcaption>
          </figure>
        </div>

        <div className="cata_right">DONT FORGET TO BUY</div>
      </div>

      {!onlymenunav && (
        <>
          <section className="cata_section">
            <Category number="9" />
            <MenuDetails />
          </section>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Catalog;
