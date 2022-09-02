import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to={"/"}> Home</Link>
      <Link to={"/gallery"}> Gallery</Link>
    </div>
  );
}

export default Nav;
