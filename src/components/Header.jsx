import React from "react";
import "./Header.css";
import Nav from "./Nav";

function Header() {
  return (
    <div className="header">
      <h1>Mina's Gallery</h1>
      <Nav></Nav>
    </div>
  );
}

export default Header;
