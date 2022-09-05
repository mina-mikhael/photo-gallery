import React from "react";
import "./Header.css";
import Nav from "./Nav";

function Header({ categorySelected }) {
  // console.log(categorySelected);
  return (
    <div className={`header ${categorySelected ? "hide_header" : ""}`}>
      <h1>Mina's Gallery</h1>
      <Nav></Nav>
    </div>
  );
}

export default Header;
