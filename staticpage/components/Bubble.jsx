import React from "react";
import "../styles/bubble.css";
const Bubble = () => {
  return (
    <div className="bubble_container">
      <div className="bubble_subtitle">
        Don't miss out on ABC’s Incredible features and Opportunities.
      </div>
      <div className="bubble_title">
        Join us today and unlock your <br />
        full potential as a creator
      </div>
      <div className="button_container">
        <button className="join-button">Join Now</button>
      </div>
    </div>
  );
};

export default Bubble;
