import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoryData } from "../FoodData/CategoryData";
import { contextApi } from "../State/Context";
import "./Category.css";

function Category({ number }) {
  const { dispatch } = useContext(contextApi);

  return (
    <div className="category_box">
      <h1 className="category_title">Popular Category</h1>
      <div className="category">
        {CategoryData.map((product, index) => {
          return (
            index < number && (
              <Link
                to="/item"
                key={index}
                className={`product_card ${
                  index === 2 && number == 5 ? "product_card_center" : ""
                }`}
                onClick={() => {
                  dispatch({
                    type: "ADD_CATEGORY_NAME",
                    payload: product.name,
                  });
                }}
              >
                <img className="product_img" src={product.image} alt="" />
                <h1 className="product_name">{product.name}</h1>
                <div className="product_details">
                  <span>{product.number}</span>
                  <h6>PRODUCTS</h6>
                </div>
              </Link>
            )
          );
        })}
      </div>
    </div>
  );
}

export default Category;
