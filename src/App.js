import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import About from "./components/About";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App({ gallerSelected }) {
  return (
    <Router>
      <div className="App">
        <Header gallerSelected={gallerSelected} />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
