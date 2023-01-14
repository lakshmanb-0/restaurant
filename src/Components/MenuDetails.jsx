import React, { useMemo, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { itemdata } from "../FoodData/CategoryData";
import "./MenuDetails.css";
import rupeesvg from "../Images/rupee.svg";
import { contextApi } from "../State/Context";
import { useEffect } from "react";

function MenuDetails({ onlyProduct }) {
  const { state, dispatch } = useContext(contextApi);
  const [catitem, setcatitem] = useState(itemdata[6].items);
  const [catname, setCatname] = useState("snacks");

  // product change according to button cat clicked
  const handleClick = (e) => {
    let Text = e;
    itemdata.map((item) => {
      if (
        item.name.replaceAll(" ", "") == Text.replaceAll(" ", "").toLowerCase()
      ) {
        setcatitem(item.items);
      }
      return catitem;
    });
    setCatname(Text);
  };

  // change according to category clicked
  useEffect(() => {
    itemdata.map((item) => {
      if (item.name == state.itemArray.toLowerCase()) {
        setcatitem(item.items);
      }
      return catitem;
    });
  }, [state]);

  // useMemo(itemcallback, [state]);

  //  scroll to top when card clicked
  const scrolltotop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={`Menu_details ${onlyProduct ? "no_banner" : ""}`}>
      {/* menu banner  */}
      {!onlyProduct && (
        <>
          <div className="menu_banner">
            <span className="bonus_btn">
              <i className="fa-solid fa-plus"></i> Bonus
            </span>
            <div className="banner_text">
              <h1>2 PIZZAS</h1>
              <Link to="/catalogy">
                <button className="header_btn">FOR THE PRICE OF ONE</button>
              </Link>
            </div>
            <img
              src={require("../Images/banner_person.png")}
              alt="banner_person"
              className="banner_img"
            />
          </div>
          {/* menu nav  */}
          <div className="menu_nav">
            <h1>Our Production</h1>
            <ul className="menu_category">
              <li
                className={
                  catname.toLowerCase() === `${state.itemArray.toLowerCase()}`
                    ? "menu_item_active"
                    : ""
                }
                onClick={(e) => handleClick(e.target.innerText)}
              >
                {state.itemArray}
              </li>
              <li
                className={
                  catname.toLowerCase() === "desserts" ? "menu_item_active" : ""
                }
                onClick={(e) => handleClick(e.target.innerText)}
              >
                Desserts
              </li>
              <li
                className={
                  catname.toLowerCase() === "mexican" ? "menu_item_active" : ""
                }
                onClick={(e) => handleClick(e.target.innerText)}
              >
                Mexican
              </li>
              <li
                className={
                  catname.toLowerCase() === "burger" ? "menu_item_active" : ""
                }
                onClick={(e) => handleClick(e.target.innerText)}
              >
                Burger
              </li>
            </ul>
            <Link to="/catalogy">
              <button className="header_btn">GO TO CATALOG</button>
            </Link>
          </div>
        </>
      )}

      {/* menu box  */}
      <div className="menu_box">
        {catitem.map((item, index) => (
          <Link
            to="/card"
            key={index}
            onClick={() => {
              scrolltotop();
              dispatch({ type: "ADD_Card_ARRAY", payload: item });
            }}
          >
            <div className="menu_item">
              <img className="menu_img" src={item.image} alt="" />
              <h3 className="item_name">{item.name}</h3>
              <div className="item_star">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <span className="item_price">
                <img src={rupeesvg} alt="" className="rupee_svg" />
                {item.price}
              </span>
              <i className="fa-solid fa-bag-shopping cart_icon"></i>
              <div className="card_before"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MenuDetails;
