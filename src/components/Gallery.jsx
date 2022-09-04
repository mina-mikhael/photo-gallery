import { React, useState, useEffect } from "react";
import "./Gallery.css";
import photos from "../data/photo-data";
import Category from "./Category";
import GalleryPhotos from "./GalleryPhotos";

function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [gallerySelected, setGallerySelected] = useState("");

  const clickHandler = (galleryName) => {
    setGallerySelected(galleryName);
  };

  useEffect(() => {
    setGallery(photos);
  }, []);

  // useEffect(() => {
  //   setGallerySelected(gallerySelected);
  // }, [gallerySelected]);

  if (gallerySelected) {
    return (
      <div className="galleryPhotos">
        <GalleryPhotos photos={photos} gallerySelected={gallerySelected} />
        <button className="close__gallery button" onClick={() => setGallerySelected("")}>
          &#10005;
        </button>
      </div>
    );
  }
  return (
    <section className="gallery">
      {gallery.map((categoryPhotos) => {
        return (
          <Category
            category={categoryPhotos}
            clickHandler={clickHandler}
            key={categoryPhotos.id}
          />
        );
      })}
    </section>
  );
}

export default Gallery;
