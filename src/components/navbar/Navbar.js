import React, { useState } from "react";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("introduccion");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="nav-menu">
      <a href="/">
        <h3>CAUSCARI</h3>
      </a>
      <ul>
        <li>
          <Link to="/introduccion" onClick={() => handleLinkClick('introduccion')}>
            <p className={`p-navbar ${activeLink === 'introduccion' ? 'active' : ''}`}>Introducción</p>
          </Link>
        </li>
        <li>
          <Link to="/entrega" onClick={() => handleLinkClick('entrega')}>
            <p className={`p-navbar ${activeLink === 'entrega' ? 'active' : ''}`}>Entrega</p>
          </Link>
        </li>
        {/* <li>
          <Link to="/video" onClick={() => handleLinkClick('video')}>
            <p className={`p-navbar ${activeLink === 'video' ? 'active' : ''}`}>Video</p>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
