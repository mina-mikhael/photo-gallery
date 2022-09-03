import { React, useState, useEffect } from "react";
import "./Gallery.css";
import photos from "../data/photo-data";
import Category from "./Category";

const initialGallery = [
  {
    id: "",
    name: "",
    images: [{ photo_id: 0, photo_name: "" }],
  },
];

function Gallery() {
  const [gallery, setGallery] = useState(initialGallery);
  useEffect(() => {
    setGallery(photos);
  }, []);

  return (
    <section className="gallery">
      {gallery.map((categoryPhotos) => {
        return <Category category={categoryPhotos} key={categoryPhotos.id} />;
      })}
    </section>
  );
}

export default Gallery;
