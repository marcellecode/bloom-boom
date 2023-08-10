import React from "react";
import "./navbar.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar">
      <div className="header-nav">
        <div className="logo">BLOOM&BOOM</div>
        <div className={`links ${showMenu ? "show-menu" : "hidden-menu"}`}>
          <a href="http://" className="link">
            About us
          </a>
          <a href="http://" className="link">
            Catalog
          </a>
          <a href="http://" className="link">
            Delivery
          </a>
          <a href="http://" className="link">
            Reviews
          </a>
          <a href="http://" className="link">
            Contacts
          </a>
        </div>
      </div>
      <div className="language">
        <span>ENG</span>
        <AiOutlineMenu onClick={openMenu} className="responsive-icon" />
      </div>
    </div>
  );
}
