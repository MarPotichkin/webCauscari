import React from "react";
import "../../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-menu">
      {/* ACÁ VA LOGO CON NOMBRE ALINEADO A LA IZQ*/}
      <a href="/"><h3>CAUSCARI</h3></a>
      <ul>
        {/* ALINEADO A LA DERECHA LOS OTROS */}
        <li>
          <a href="/introduccion"><p className="p-navbar">Introducción</p></a>
        </li>
        <li>
          <a href="/entrega"><p className="p-navbar">Entrega</p></a>
        </li>
        <li>
          <a href="/video"><p className="p-navbar">Video</p></a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
