import React from "react";
import "./Body.css";
import { Link } from "react-router-dom";

function Body() {
  return (
    <main className="body">
      <section className="body__content">
        <h3> Photo gallery made with pictures from my Phone camera </h3>
        <h3> nothing too serious &#128521; </h3>
        <div className="links">
          <h4>
            <Link to={"/gallery"}> Go to gallery</Link>
          </h4>
          <h4>
            <Link to={"/about"}> Learn more about the project</Link>
          </h4>
        </div>
      </section>
    </main>
  );
}

export default Body;
