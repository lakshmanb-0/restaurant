import React from "react";
import { Reviews } from "../FoodData/CategoryData";
import "./CustomerReview.css";

function CustomerReview() {
  return (
    <div className="Customer_box">
      <h1>Customer Reviews</h1>
      <div className="Reviews">
        {Reviews.map((review, index) => (
          <div className="review_box" key={index}>
            <h1 className="review_name">{review.name}</h1>
            <p className="review_para">{review.overview}</p>
            <span className="review_date">{review.Date}</span>
            <img src={review.img} alt="person-image" className="review_img" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerReview;
