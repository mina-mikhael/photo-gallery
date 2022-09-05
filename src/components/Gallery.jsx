import React, { useState } from "react";
import "./swiper.scss";
import "./Gallery.css";
import Category from "./Category";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

function Gallery({ gallery, gallerySelected, setGallerySelected, photos, clickHandler }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const PhotosToDisplay = photos.find((category) => {
    return category.name === gallerySelected;
  });

  if (gallerySelected) {
    return (
      <div className="swiperContainer">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          grabCursor={true}
          className="mySwiper">
          {PhotosToDisplay.images.map((photo, idx) => {
            return (
              <SwiperSlide key={idx}>
                <img
                  src={`../assets/${PhotosToDisplay.name}/${photo.photo_name}`}
                  alt={photo.photo_name}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          modules={[FreeMode, Navigation, Thumbs]}
          loop={true}
          spaceBetween={8}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          className="mySwiper2">
          {PhotosToDisplay.images.map((photo, idx) => {
            return (
              <SwiperSlide key={idx}>
                <img
                  src={`../assets/${PhotosToDisplay.name}/${photo.photo_name}`}
                  alt={photo.photo_name}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {gallerySelected && (
          <div className="buttonDiv">
            <button className="close__button" onClick={() => setGallerySelected("")}>
              X
            </button>
          </div>
        )}
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
            gallerySelected={gallerySelected}
          />
        );
      })}
    </section>
  );
}
Gallery.prototype = {};

export default Gallery;
