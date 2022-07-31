import React, { useState } from "react";
import "../css/navbar.css";
import { NavLink, Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const menuControl = () => {
    setMenu(!menu);
  };
  return (
    <nav className="nav">
      <div className="container-fluid nav-main">
        <div className="logo">
          <Link to="/">
            <img src="../images/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="menu" onClick={menuControl}>
          {menu ? (
            <AiOutlineClose className="menuClose" />
          ) : (
            <FcMenu className="menuOpen" />
          )}
        </div>
        <ul className={menu ? "openMenu" : "openMenu closeMenu"}>
          <li onClick={menuControl}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={menuControl}>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
