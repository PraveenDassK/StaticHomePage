import React from "react";
import Header from "../../components/Header";
import Homebanner from "@/components/Homebanner";
import YourCraft from "@/components/YourCraft";
import Bubble from "@/components/Bubble";
const page = () => {
  return (
    <div>
      <Header />
      <Homebanner />
      <YourCraft />
      <Bubble />
    </div>
  );
};

export default page;
