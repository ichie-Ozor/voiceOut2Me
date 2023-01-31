import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const menuList = [
    {
        menu:"Home",
        path:"/"
    
    },
    {
        menu:"About",
        path:"/about"
    
    },
    {
        menu:"Service",
        path:"/service"
    
    },
    {
        menu:"Contact",
        path:"/contact"
    
    },
    {
        menu:"Support",
        path:"/support"
    
    },
  ]
 
  const renderMenu=menuList.map((menu, index)=><Link className="hover:opacity-70" key={index} to={menu.path}>{menu.menu}</Link>)
  return (
    <>
      <div className="bg-[#8155BA] text-white h-screen w-[10rem] flex flex-col items-center gap-5 pt-10 static mt-[-12%]">{renderMenu}</div>
    </>
  );
};

export default Menu;
