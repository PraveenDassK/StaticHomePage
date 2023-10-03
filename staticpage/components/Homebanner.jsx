import React from "react";
import "../styles/homeBanner.css";
import SignUp from "./SignUp";
const Homebanner = () => {
  return (
    <div className="banner">
      <div className="banner-topImage">
        <div className="banner-content">
          <div className="banner-title">
            A Creator’s Paradise
            <div className="banner-subTitle">Were Creativity Meets Success</div>
          </div>
          <div className="homebanner_signUp">
            <SignUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homebanner;
