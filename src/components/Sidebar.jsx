import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaBars, FaInfoCircle } from "react-icons/fa";
import { RiContactsFill, RiDashboardFill } from "react-icons/ri";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <AiFillHome />,
    },

    {
      path: "/about",
      name: "About",
      icon: <FaInfoCircle />,
    },

    {
      path: "/contact",
      name: "Contact",
      icon: <RiContactsFill />,
    },

    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <RiDashboardFill />,
    },

    {
      path: "/login",
      name: "Login",
      icon: <BiLogInCircle />,
    },

    {
      path: "/logout",
      name: "Logout",
      icon: <BiLogOutCircle />,
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar ">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            LOGO
          </h1>
          <div style={{ marginLeft: isOpen ? "5px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>

        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
