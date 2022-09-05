import { React, useState, useEffect } from "react";
import "./Gallery.css";
import photos from "../data/photo-data";
import Category from "./Category";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/bundle";
import { FreeMode, Navigation, Thumbs } from "swiper";

import "./styles.css";

function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [gallerySelected, setGallerySelected] = useState("");

  const clickHandler = (galleryName) => {
    setGallerySelected(galleryName);
  };

  const PhotosToDisplay = photos.find((category) => {
    return category.name === gallerySelected;
  });

  useEffect(() => {
    setGallery(photos);
  }, []);

  if (gallerySelected) {
    return (
      <>
        <button className="close__button" onClick={() => setGallerySelected("")}>
          X
        </button>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper">
          {PhotosToDisplay.images.map((photo) => {
            return (
              <SwiperSlide key={photo.photo_id}>
                <img
                  src={`../assets/${PhotosToDisplay.name}/${photo.photo_name}`}
                  alt={photo.photo_name}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
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
            gallerySelected={gallerySelected}
          />
        );
      })}
    </section>
  );
}

export default Gallery;
