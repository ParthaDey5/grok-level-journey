import React, { useState, useEffect } from "react";

function PhotoGallery() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const LIMIT = 9;

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

  useEffect(() => {
    loadImages();
  }, []);

  function openModal(src) {
    setSelectedImg(src);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedImg(null);
  }

  return (
    <>
      <section className="gallery">
        <h2>Inspiration Gallery</h2>

        <div className="grid">
          {images.map((src, i) => (
            <div key={i} className="img-wrapper">
              <img
                src={src}
                loading="lazy"
                alt=""
                onClick={() => openModal(src)}
              />
            </div>
          ))}
        </div>

        <button onClick={loadImages}>
          Load More
        </button>
      </section>

      {/* MODAL */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>

          <img
            className="modal-img"
            src={selectedImg}
            onClick={(e) => e.stopPropagation()}
            alt=""
          />
        </div>
      )}
    </>
  );
}

export default PhotoGallery;