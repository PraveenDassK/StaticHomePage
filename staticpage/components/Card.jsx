import React from "react";
import Image from "next/image";
import CardImage from "../assests/MobileBottomBanner.png";
const Card = ({
  title,
  subTitle,
  imageUrl,
  width,
  marginBottom = 0,
  imageTop = false,
}) => {
  return (
    <div className="card_container">
      {imageTop ? (
        <Image
          src={imageUrl}
          alt="topImage"
          priority={false}
          height={100}
          width={100}
        />
      ) : null}
      <h1 className="card_title">{title}</h1>
      <p className="card_subTitle">{subTitle}</p>
      {!imageTop ? (
        <div
          className="card_image"
          style={{ width: width, marginBottom: marginBottom }}
        >
          <Image
            src={imageUrl}
            alt="cardimage"
            fill={true}
            priority={false}
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

          />
        </div>
      ) : null}
    </div>
  );
};

export default Card;
