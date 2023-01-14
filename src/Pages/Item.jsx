import React from "react";
import "./Item.css";
import MenuDetails from "../Components/MenuDetails";
import Catalog from "./Catalog";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Item() {
  return (
    <div className="ItemPage">
      <Catalog onlymenunav={true} />
      <div className="catlink">
        <Link to="/catalogy">GO TO MENU</Link>
      </div>
      <MenuDetails onlyProduct={true} />
      <Footer />
    </div>
  );
}

export default Item;
