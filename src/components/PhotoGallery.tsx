import React, { useState, useEffect } from "react";

function PhotoGallery() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const LIMIT = 9;

  // LOAD IMAGES
  function loadImages() {
    const newImages = [];

    for (let i = 0; i < LIMIT; i++) {
      newImages.push(
        `https://picsum.photos/seed/${page}_${i}/400/400`
      );
    }

    setImages(prev => [...prev, ...newImages]);
    setPage(prev => prev + 1);
  }

  // ON LOAD
  useEffect(() => {
    loadImages();
  }, []);

  return (
    <section className="gallery">
      <h2>Inspiration Gallery</h2>

      <div className="grid">
        {images.map((src, i) => (
          <div key={i} className="img-wrapper">
            <img src={src} loading="lazy" alt="" />
          </div>
        ))}
      </div>

      <button onClick={loadImages}>
        Load More
      </button>
    </section>
  );
}

export default PhotoGallery;