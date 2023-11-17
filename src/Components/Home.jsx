import React from "react";
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/aibriyani.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Delivering happiness, one meal at a time.
          </h1>
          <p className="primary-text">
            Healthy food is fuel for your body. our restaurant prides itself on serving a diverse menu
            of delicious, freshly prepared dishes in a clean and comfortable environment.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="dish" />
        </div>
      </div>
    </div>
  );
};

export default Home;