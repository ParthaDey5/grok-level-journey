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

        setImages(prev =>
            [...prev, ...newImages]
        );

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

                <button className="loadImages" onClick={loadImages}>
                    Load More
                </button>
            </section>

            {/* MODAL */}
            {isModalOpen && (
                <div className="modal relative z-[999]" onClick={closeModal}>
                    <span className="close cursor-pointer absolute top-5 right-10" onClick={closeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" className="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    </span>

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