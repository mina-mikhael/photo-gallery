import React from "react";
import "./Header.css";
import Nav from "./Nav";

function Header({ gallerySelected }) {
  return (
    <div className={` ${gallerySelected ? "header hide_header" : "header"}`}>
      <h1>Mina's Gallery</h1>
      <Nav />
    </div>
  );
}

export default Header;
