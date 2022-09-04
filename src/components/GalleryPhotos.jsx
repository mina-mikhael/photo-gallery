import React from "react";
import "./GalleryPhotos.css";

function GalleryPhotos({ photos, gallerySelected }) {
  const PhotosToDisplay = photos.find((category) => {
    return category.name === gallerySelected;
  });

  console.log(PhotosToDisplay);
  return (
    <div className="galleryPhotos">
      <div className="imagesContainer">
        {PhotosToDisplay &&
          PhotosToDisplay.images.map((photo) => {
            return (
              <div className="imageContainer" key={photo.photo_id}>
                <img src={`../assets/${PhotosToDisplay.name}/${photo.photo_name}`} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default GalleryPhotos;
