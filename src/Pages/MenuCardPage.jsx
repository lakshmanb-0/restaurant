import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import MenuDetails from "../Components/MenuDetails";
import "./MenuCardPage.css";
import rupeesvg from "../Images/rupee.svg";
import { contextApi } from "../State/Context";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";

function MenuCardPage() {
  const { state, dispatch } = useContext(contextApi);
  const [add, setAdd] = useState(false);
  let Cardvalue = state.cardObject;
  let uniqueCartitems = [...new Set(state.cartItems)];
  console.log(uniqueCartitems);
  useEffect(() => {
    // setAdd(false);
  }, []);

  useMemo(() => {
    uniqueCartitems.map((item) =>
      item.name == Cardvalue.name ? setAdd(true) : setAdd(false)
    );
  }, [Cardvalue]);

  return (
    <div className="MenuCard">
      <Navbar />
      <div className="menu_card">
        <div className="menu_card_img">
          <img src={Cardvalue.image} alt="" />
        </div>

        <div className="menu_card_details">
          <h1 className="menu_card_title">{Cardvalue.name}</h1>
          <div className="item_star">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
          <div className="menu_card_price">
            <img src={rupeesvg} alt="" /> {Cardvalue.price}
          </div>
          <div className="menu_card_desc">
            <h3>Description</h3>
            <div className="menu_card_para">{Cardvalue.overview}</div>
          </div>
          <button
            className={`menu_card_btn ${!add ? "added" : "remove"}`}
            onClick={() => {
              dispatch({ type: "ADD_CART_ITEM", payload: Cardvalue });
              setAdd((prev) => !prev);
              {
                add &&
                  dispatch({
                    type: "REMOVE_CART_ITEM",
                    payload: Cardvalue.name,
                  });
              }
            }}
          >
            {!add ? "Add to Cart" : "Remove from Cart"}
          </button>
        </div>
      </div>
      <MenuDetails onlyProduct={true} />
      <Footer />
    </div>
  );
}

export default MenuCardPage;
