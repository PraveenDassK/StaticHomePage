"use client";
import React from "react";
import "../styles/header.css";
import { usePathname } from "next/navigation";
import Image from "next/image";
import BurgerMenu from "../assests/Burgermenu.png";
const Header = () => {
  const pathname = usePathname();
  console.log(pathname, "this is pathName");
  const routerArray = [
    {
      name: "Home",
      route: "/Home",
    },
    {
      name: "About Us",
      route: "/about",
    },
    {
      name: "Our Blog",
      route: "/blog",
    },
    {
      name: "Support",
      route: "/support",
    },
    {
      name: "Affiliate",
      route: "/afflicate",
    },
    {
      name: "Programs ",
      route: "/programs",
    },
  ];
  return (
    <header className="header">
      <div className="header_logo">
        <h1>LOGO</h1>
      </div>
      <div className="header_routers">
        {routerArray?.map((eachRoute, index) => {
          return (
            <span
              className={`${
                pathname === eachRoute.route ? "active_route" : "each_routers"
              }`}
              key={index}
            >
              {eachRoute?.name}
            </span>
          );
        })}
      </div>
      <div className="header_button-container">
        <button className="each_routers">Login</button>
        <button className="header_button-signup">Sign up</button>
      </div>
      <div className="header_burgerMenu">
        <Image src={BurgerMenu} width={30} height={30} priority={false} />
      </div>
    </header>
  );
};

export default Header;
