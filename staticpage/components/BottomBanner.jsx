import React from "react";
import Image from "next/image";
import BottomBannerImage from "../assests/BottomBanner.png";
import "../styles/footer.css";
const BottomBanner = () => {
  return (
    <div className="bottom_banner_container">
      <Image
        priority={false}
        alt="bottombanner"
        src={BottomBannerImage}
        fill
        quality={100}
      />
    </div>
  );
};

export default BottomBanner;
