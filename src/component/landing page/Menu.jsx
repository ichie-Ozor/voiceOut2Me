import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import "../../component/menu.css";

const Menu = ({ ToggleMenu }) => {
  const menuList = [
    {
      menu: "Home",
      path: "/",
    },
    {
      menu: "About",
      path: "/about",
    },
    {
      menu: "Service",
      path: "/service",
    },
    {
      menu: "Contact",
      path: "/contact",
    },
    {
      menu: "Support",
      path: "/support",
    },
  ];

  console.log(ToggleMenu);
  const renderMenu = menuList.map((menu, index) => {
    return (
      <ul key={index} className="">
        <li className=" hover:-translate-y-[6px] transition-all duration-[0.3s]">
          <Link className="" to={menu.path}>
            {menu.menu}
          </Link>
        </li>
      </ul>
    );
  });
  return (
    <>
      <div
        className={classNames(
          "flex lg:hidden  w-[10rem] md:w-[12rem] h-[50vh] fixed top-0 right-0 bg-[#8155BA]  flex-col gap-5 justify-center items-center text-white font-Lato font-bold transition-all duration-[0.5s] translate-x-40 -translate-y-[100%] pt-10",
          { "-translate-y-0 translate-x-1": ToggleMenu }
        )}
      >
        {renderMenu}
      </div>
    </>
  );
};

export default Menu;
