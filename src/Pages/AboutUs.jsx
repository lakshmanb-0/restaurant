import React from "react";
import "./AboutUS.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { chefsDetails } from "../FoodData/CategoryData";

function AboutUs() {
  return (
    <div className="About_us">
      <Navbar />
      <div className="about_container">
        <img
          src={require("../Images/Chefs/main_chefs.jpg")}
          alt="person-image"
          className="about_img"
        />
        <div className="about_container_box">
          <h1 className="about_title">
            About <span>Us</span>
          </h1>
          <h3 className="about_sub_title">
            Food Stalls with person but to product
          </h3>
          <h3 className="about_sub_title">Marketing Catlogues etc. to</h3>
          <p className="about_para">
            In order to form a more perfect BBQ, the Flying Food is determined
            to bring all the best flavors together. Our menu is a walk around
            the country — and the world. We’re paying homage to the Indian
            traditions that first inspired us, and the global traditions that
            made us curious. From fan favorites, ribs, wings, brisket, and
            sausage to creative sandwiches to captivating sides, you can find
            our inspo du jour — international, national, or something in between
            — front and center on our menu.
          </p>
          <Link to="/catalogy">
            <button className="header_btn">Go to Catalogy</button>
          </Link>
        </div>
      </div>
      {/* meet our chef */}
      <div className="chef_container">
        <h1 className="chef_title">
          <span>Meet</span> Our Chefs
        </h1>
        <p className="chef_para">
          A chef oversees a restaurants kitchen. A chef plans the menu,
          maintains the budget, prices menu items, prepares food, purchases
          supplies, ensures quality of service, ensures safety, and manages
          staff. There is a lot of work that goes into becoming a chef. Chefs
          ensure the meals are cooked and seasoned properly and that they are
          pleasing to the eye. Pay varies greatly depending on the location and
          nicer or more upscale restaurants generally pay the most.
        </p>
        {/* chef DEtails  */}
        <div className="chef_Details">
          {chefsDetails.map((item, index) => (
            <div className="chef_box" key={index}>
              <div className="chef_box_left">
                <h1 className="chef_name">{item.name}</h1>
                <p className="chef_name_overview">{item.overview}</p>
              </div>
              <div className="chef_box_right">
                <img src={item.img} alt="" className="chef_name_img" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
