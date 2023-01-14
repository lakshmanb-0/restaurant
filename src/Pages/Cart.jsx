import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { contextApi } from "../State/Context";
import "./Cart.css";

function Cart() {
  const { state, dispatch } = useContext(contextApi);
  const [price, setPrice] = useState(0);
  let uniqueCartitems = [...new Set(state.cartItems)];

  // set price one time when site opened
  useEffect(() => {
    setPrice(0);
    uniqueCartitems.map((item) => {
      setPrice((prev) => parseInt(prev) + parseInt(item.price));
    });
  }, []);

  // remove item when croos icon clicked
  const crossClick = (name, price) => {
    dispatch({ type: "REMOVE_CART_ITEM", payload: name });
    setPrice((prev) => parseInt(prev) - parseInt(price));
  };

  // resetData
  const resetData = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div className="cart">
      <Navbar />
      <div className="cart_menu">
        <div className="cart_details">
          <h1>Shopping Cart</h1>
          {uniqueCartitems == "" && (
            <h4 className="buy_product">
              Try some buying Product{" "}
              <Link to="/catalogy">
                {" "}
                <span>Menu</span>
              </Link>
            </h4>
          )}
          {uniqueCartitems.map((item) => (
            <div className="cart_box" key={item.name}>
              <img src={item.image} alt="" className="cart_img" />
              <h2 className="cart_name">{item.name}</h2>
              <span className="card_price">{item.price}</span>
              <button
                className="card_close"
                onClick={() => crossClick(item.name, item.price)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          ))}
        </div>
        <div className="cart_summary">
          <h1>Cart Summary</h1>
          <div className="total_quantity">
            <span>Total Quantity</span>
            <span>{uniqueCartitems.length}</span>
          </div>
          <div className="total_price">
            <span>Total Prices</span>
            <span>{price}</span>
          </div>
          <div className="total">
            <span>Subtotal</span>
            <span>{price}</span>
          </div>
          {uniqueCartitems == "" ? (
            <Link to="/catalogy">
              <button className="card_checkout">Go to Menu</button>
            </Link>
          ) : (
            <Link to="/delievery">
              <button className="card_checkout" onClick={() => resetData()}>
                Process to Checkout
              </button>
            </Link>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
