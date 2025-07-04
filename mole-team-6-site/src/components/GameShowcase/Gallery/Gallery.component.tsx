import React, { useState } from "react";
import {
    GallerySection,
    ViewerWrapper,
    ImageSlide,
    ArrowButton,
    DotsWrapper,
    Dot,
    ModalBackdrop,
    ModalImage,
} from "./Gallery.styles";
import { GalleryProps } from "./Gallery.types";

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    const [index, setIndex] = useState(0);
    const [zoomed, setZoomed] = useState(false);
    const lastIndex = images.length - 1;

    const goTo = (i: number) => {
        if (i < 0) setIndex(lastIndex);
        else if (i > lastIndex) setIndex(0);
        else setIndex(i);
    };

    const openZoom = () => {
        setZoomed(true);
    };

    const closeZoom = () => {
        setZoomed(false);
    };

    const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // only close if clicking on backdrop itself, not image
        if (e.target === e.currentTarget) closeZoom();
    };

    return (
        <GallerySection>
            <ViewerWrapper>
                <ArrowButton
                    onClick={() => goTo(index - 1)}
                    aria-label="Previous image"
                >
                    ‹
                </ArrowButton>

                <ImageSlide
                    src={images[index].src}
                    alt={images[index].alt || `Gallery image ${index + 1}`}
                    active={true}
                    onClick={openZoom}
                    title="Click to zoom"
                />

                <ArrowButton
                    onClick={() => goTo(index + 1)}
                    aria-label="Next image"
                >
                    ›
                </ArrowButton>
            </ViewerWrapper>

            <DotsWrapper>
                {images.map((_, i) => (
                    <Dot key={i} active={i === index} onClick={() => goTo(i)} />
                ))}
            </DotsWrapper>

            {zoomed && (
                <ModalBackdrop onClick={onBackdropClick}>
                    <ModalImage
                        src={images[index].src}
                        alt={images[index].alt || `Gallery image ${index + 1}`}
                        onClick={closeZoom}
                    />
                </ModalBackdrop>
            )}
        </GallerySection>
    );
};

export default Gallery;
