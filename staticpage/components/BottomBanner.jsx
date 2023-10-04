import React from "react";
import Image from "next/image";
import BottomBannerImage from "../assests/BottomBanner.png";
const BottomBanner = () => {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Image priority={false} alt="bottombanner" src={BottomBannerImage} fill />
    </div>
  );
};

export default BottomBanner;
