import React from "react";
import "../styles/connection.css";
const YourConnection = () => {
  return (
    <div className="connection_container">
      <div className="bubble_title">
        Ready to Cash in Your Connections?
        <br />
        Join Our Affiliate Program
      </div>
      <div className="bubble_subtitle connection_subText">
        Join now and get <span className="linear_text "> 7.5% </span> commission
        on all creator referrals for the entire year.
      </div>
      <div className="button_container">
        <button className="join-button">Earn Now</button>
      </div>
    </div>
  );
};

export default YourConnection;
