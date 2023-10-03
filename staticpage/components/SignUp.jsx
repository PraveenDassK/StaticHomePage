"use client";

import Image from "next/image";
import React, { useState } from "react";
import GoogleImage from "../assests/GoogleIcon.png";
import Visibility from "../assests/visibility.png";
const SignUp = () => {
  const [isVisible, setVisible] = useState(false);
  const handleSubmit = (value) => {
    // console.log(value);
  };
  return (
    <div className="signup_container">
      <div style={{ width: "100%" }}>
        <button className="signup_google-button">
          <Image src={GoogleImage} alt="googleimage" />
          Sign up with Google
        </button>
      </div>
      <form onSubmit={handleSubmit} className="form-class">
        <div className="form_name-container">
          <input className="input-class" placeholder="First Name*" />
          <input className="input-class" placeholder="Last Name *" />
        </div>
        <input className="input-class" type="email" placeholder="Email*" />
        <div style={{ position: "relative", width: "100%" }}>
          <input
            type={isVisible ? "text" : "password"}
            className="input-class"
            placeholder="password*"
          />
          <div
            className="password-visible"
            onClick={() => setVisible(!isVisible)}
          >
            <Image src={Visibility} alt="passwordshow" />
          </div>
        </div>
        <div>
          <h3 className="time_zone">
            (GMT+05:30) india standard Time - Calcutta{" "}
          </h3>
        </div>
        <div style={{ marginTop: "3%" }}>
          <button className="signup_user-button" type="submit">
            Signup as a user
          </button>
        </div>
        <div>
          <h3 className="time_zone">
            By signing up you agree to our Terms & Conditions and Privacy
            Policy. and confirm that you are at least 18 years old.
          </h3>
        </div>
        <div className="signup_orDiv-container">
          <div className="signup-orDiv"></div>
          <div className="orText">OR</div>
          <div className="signup-orDiv"></div>
        </div>
      </form>
      <div style={{ marginTop: "3%" }}>
        <button className="signup_creater-button">Signup as a creator</button>
      </div>
      <div className="login_container">
        Already have an account? <span className="login_text">Login</span>
      </div>
    </div>
  );
};

export default SignUp;
