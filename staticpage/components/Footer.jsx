import React from "react";
import "../styles/footer.css";
import facebookIcon from "../assests/facebook.png";
import TwitterIcon from "../assests/twitter.png";
import YoutubeIcon from "../assests/youtube.png";
import InstagramIcon from "../assests/instagram.png";
import Image from "next/image";
const Footer = () => {
  //Array of Data for footer
  const footerData = [
    {
      title: "Company",
      lists: [
        {
          subTitle: "About Us",
        },
        {
          subTitle: "Support",
        },
        {
          subTitle: "Blog",
        },
        {
          subTitle: "Loginin",
        },
        {
          subTitle: "Signup",
        },
        {
          subTitle: "Contact Us",
        },
      ],
    },
    {
      title: "Programs",
      lists: [
        { subTitle: "Affiliate Program" },
        { subTitle: "Ambassador Program" },
        { subTitle: "Partnership Program" },
      ],
    },
    {
      title: "Policy",
      lists: [
        { subTitle: "Legal" },
        { subTitle: "DMCA" },
        { subTitle: "USC 2257" },
        { subTitle: "Privacy Policy" },
        { subTitle: "Terms  and Conditions" },
      ],
    },
  ];

  // Array of image for Social Media links
  const socialLinks = [
    { Icon: facebookIcon },
    { Icon: TwitterIcon },
    { Icon: YoutubeIcon },
    { Icon: InstagramIcon },
  ];
  return (
    <div className="footer_container">
      <div className="footer_logo">lOGO</div>
      <div className="footer_category">
        {footerData.map((eachFooter, index) => {
          return (
            <div key={index} style={{ width: "100%" }}>
              <div className="footer_catergory-title">{eachFooter?.title}</div>
              {eachFooter?.lists?.map((eachCategory, i) => {
                return (
                  <ol key={i}>
                    <li className="footer_category-subtitle">
                      {eachCategory?.subTitle}
                    </li>
                  </ol>
                );
              })}
            </div>
          );
        })}
      </div>
      <div>
        <div className="footer_catergory-title"> Follow us</div>
        <div className="footer_socialMedia">
          {socialLinks.map((eachIcons, index) => {
            return (
              <div>
                <Image
                  src={eachIcons?.Icon}
                  alt="socialmedia"
                  height={30}
                  width={30}
                  priority={false}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
