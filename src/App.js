import "./App.scss";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import About from "./components/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import photos from "./data/photo-data";

function App() {
  const [gallery, setGallery] = useState([]);
  const [gallerySelected, setGallerySelected] = useState("");

  const clickHandler = (galleryName) => {
    setGallerySelected(galleryName);
  };

  useEffect(() => {
    setGallery(photos);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown);
  }, []);

  const detectKeyDown = (e) => {
    if (e.key === "Escape") {
      setGallerySelected("");
    }
  };

  return (
    <Router>
      <div className="App">
        <Header gallerySelected={gallerySelected} />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route
            path="/gallery"
            element={
              <Gallery
                clickHandler={clickHandler}
                gallery={gallery}
                gallerySelected={gallerySelected}
                setGallerySelected={setGallerySelected}
                photos={photos}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
