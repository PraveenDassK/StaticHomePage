import React from "react";
import "../styles/yourCraft.css";
import Card from "./Card";
import LeftCardImage from "../assests/LeftCardImage.png";
import RightCardImage from "../assests/RightCardImage.png";
import SaveTime from "../assests/Savetime.png";
import Supportive from "../assests/Supportive.png";
import Prizes from "../assests/prizes.png";
const YourCraft = () => {
  const data = [
    {
      id: 1,
      title: "Unlock Your ABC Earning Potential",
      subTitle:
        "Are you ready to take your earning potential to the next level? With ABC, you have multiple avenues to monetize your content seamlessly. From subscriptions and tips to merchandise sales and NFTS, ABC helps you diversify your revenue streams and maximize your income.",
      imageUrl: LeftCardImage,
      width: "50%",
    },
    {
      id: 2,
      title: "Boost Your Sales with Built-in E-commerce",
      subTitle:
        "Take control of your brand and boost your sales with ABC's built-in e-commerce functionality. Showcase and sell your exclusive products, whether it's merchandise, digital downloads, or personalized experiences. Integrate your store effortlessly and turn your creative ideas into profitable ventures.",
      imageUrl: RightCardImage,
      width: " 100%",
      marginBottom: "5%",
    },
  ];
  const bottomCardData = [
    {
      id: 1,
      title: `Save Time with  Automation and Efficiency`,
      subTitle:
        "Supercharge your content creation with ABC's automation tools. Streamline scheduling, multi-platform management, and more. Save time on repetitive tasks, focus on exceptional content.",
      imageUrl: SaveTime,
    },
    {
      id: 2,
      title: "Join a Supportive Community",
      subTitle:
        "Join ABC's vibrant creator community. Connect with like-minded individuals, collaborate, and share experiences. Access mental health services and resources for personal and professional growth.",
      imageUrl: Supportive,
    },
    {
      id: 3,
      title: `Unlock Exclusive Opportunities and Prizes`,
      subTitle:
        "Enjoy ABC contests and challenges for valuable prizes. Showcase your exceptional talent and win business grants, scholarships, and more. Thrive on our platform with recognition and rewards.",
      imageUrl: Prizes,
    },
  ];
  return (
    <div className='craft_container'>
      <div className='craft_title'>
        <span className='elevate_text'>Elevate</span> Your Craft
      </div>
      <div className='craft_topCards'>
        {data?.map((eachValue, index) => {
          return (
            <div key={index}>
              <Card
                title={eachValue?.title}
                subTitle={eachValue?.subTitle}
                imageUrl={eachValue?.imageUrl}
                width={eachValue?.width}
                marginBottom={eachValue?.marginBottom}
              />
            </div>
          );
        })}
      </div>
      <div className='craft_bottomCards'>
        {bottomCardData.map((eachCard, i) => {
          return (
            <div key={i}>
              <Card
                title={eachCard?.title}
                subTitle={eachCard?.subTitle}
                imageUrl={eachCard?.imageUrl}
                imageTop={true}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YourCraft;
