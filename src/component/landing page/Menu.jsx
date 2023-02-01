import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import "../../assets/font.css";

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
  const renderMenu = menuList.map((menu, index) => (
    <ul className="card">
      <li>
        <Link
          className="menu-wrappe hover:opacity-70"
          key={index}
          to={menu.path}
        >
          {menu.menu}
        </Link>
      </li>
    </ul>
  ));
  return (
    <>
    <section className=" relative">

      <div
        className={classNames(
          "  fixed flex right-0 bg-[#8155BA]/50 text-white h-screen w-[10rem] top-0 translate-x-[100%] flex-col items-center gap-5 pt-10 transition-all ease-in duration-[0.2s] ",
          { " translate-x-0 ": ToggleMenu }
        )}
      >
        {renderMenu}
      </div>
    </section>
    </>
  );
};

export default Menu;
