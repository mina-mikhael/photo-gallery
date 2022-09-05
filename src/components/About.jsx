import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <h3> Simple React-built website to display a photo gallery </h3>
      <div>
        <h4> Stack used in this project: </h4>
        <ul>
          <li>HTML5</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>React-Router-dom</li>
          <li>Swiper-js</li>
          <li>git</li>
        </ul>
        <br></br>

        <a
          href="https://github.com/mina-mikhael/photo-gallery"
          target={"_blank"}
          rel="noreferrer">
          <h4> repository Link on gitHub </h4>
        </a>
      </div>
    </section>
  );
}

export default About;
