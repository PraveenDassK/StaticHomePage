import React from "react";
import "../styles/joincommunity.css";
const JoinCommunity = () => {
  return (
    <div className='join_main-div'>
      <div className='join_container'>
        <div className='join_mainContainer'></div>
        <div className='join_content'>
          <h1 className='bubble_title'>Join the ABC Community</h1>
          <p className='join_subtitle'>
            {`Become part of a vibrant and supportive community of like-minded
            creators by joining ABC's exclusive platform. Collaborate, learn,
            and connect with fellow creators who share your passion for adult
            content creation.`}
          </p>
          <div className='join-button_container'>
            <button className='join-button'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
