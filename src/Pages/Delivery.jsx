import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Delivery() {
  const style = {
    margin: "auto 2rem",
    height: "70vh",
    display: "grid",
    placeItems: "center",
    fontSize: "2rem",
  };
  return (
    <div>
      <Navbar />
      <div style={style}>Your Order is Saved and and delieved in 30 Mint</div>
      <Footer />
    </div>
  );
}

export default Delivery;
