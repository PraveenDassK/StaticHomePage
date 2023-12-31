import React from "react";
import Header from "../../components/Header";
import Homebanner from "@/components/Homebanner";
import YourCraft from "@/components/YourCraft";
import Bubble from "@/components/Bubble";
import BottomBanner from "@/components/BottomBanner";
import YourConnection from "@/components/YourConnection";
import JoinCommunity from "@/components/JoinCommunity";
import Footer from "@/components/Footer";
const page = () => {
  return (
    <div>
      <Header />
      <Homebanner />
      <YourCraft />
      <Bubble />
      <BottomBanner />
      <YourConnection />
      <JoinCommunity />
      <Footer />
    </div>
  );
};

export default page;
