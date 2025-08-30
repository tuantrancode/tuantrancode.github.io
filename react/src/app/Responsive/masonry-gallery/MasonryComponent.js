'use client';
import React, { useEffect, useState, useRef, Suspense } from 'react';
import { recalcAllGridItems, recalcItem, fetchMasonryImages } from './masonry-script';
import ScrollDetector from './ScrollDetector';
import LazyImage from '@/components/shared/LazyImage';
import styles from './masonry-gallery.module.css';

export default function MasonryGallery({ id }) {
    const [images, setImages] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const itemRefs = useRef([]);
    const numberToFetch = 20;

    // Fetch the image URL and estimated value
    const handleFetch = (id) => {
        if (isFetching) return;
        console.log(`Fetching ${numberToFetch} Images`);
        setIsFetching(true);
        fetchMasonryImages(id, numberToFetch)
            .then((loaded) => {
                setImages((prev) => [...prev, ...loaded]);
            }).finally(() => {
                setIsFetching(false);
            });
    }
    // Recalculate the row span once the image has loaded
    const handleImgLoaded = (index) => {
        console.log('onLoad was called ', index, itemRefs.current[index]);
        recalcItem(id, itemRefs.current[index])
    }
    const saveGallery = () => {
        console.log("Saving Images");
        sessionStorage.setItem(`${id}-images`, JSON.stringify(images));
    };

    // Load images on mount or restore from sessionStorage if images exist already
    useEffect(() => {
        const restoreSession = (data, savedScroll) => {
            console.log('Restoring images');
            setImages(data);
            // Wait for images to render before restoring scroll
            setTimeout(() => {
                window.scrollTo(0, parseInt(savedScroll) || 0);
            }, 100);
        }

        const savedImages = sessionStorage.getItem(`${id}-images`);
        const savedScroll = sessionStorage.getItem(`${id}-scroll`);
        if (savedImages) {
            const data = JSON.parse(savedImages)
            if (data.length > 0) {
                restoreSession(data, savedScroll)
            } else {
                handleFetch(id);
            }
        } else {
            handleFetch(id);
        }

        // Resize gallery when screen resize
        let resizeTimeoutId;
        const handleRecalcGrid = () => {
            if (resizeTimeoutId) clearTimeout(resizeTimeoutId);
            resizeTimeoutId = setTimeout(() => {
                recalcAllGridItems(id);
                saveGallery();
            }, 200);
        }
        window.addEventListener('resize', handleRecalcGrid);
        return () => {
            window.removeEventListener('resize', handleRecalcGrid);
            if (resizeTimeoutId) clearTimeout(resizeTimeoutId);
        }
    }, [id]);

    // Save gallery state on unmount or page unload
    useEffect(() => {
        const saveScroll = () => {
            if (window.scrollY != 0) sessionStorage.setItem(`${id}-scroll`, window.scrollY);
        }

        window.addEventListener('beforeunload', saveGallery);
        window.addEventListener("scroll", saveScroll);
        return () => {
            window.removeEventListener('beforeunload', saveGallery);
            window.removeEventListener("scroll", saveScroll);
            saveGallery();
        };
    }, [id, images]);

    return (
        <>
            {/* <!-- USING GRID AND CALCULATING ROW SPAN OF EACH IMAGE TO MAKE MASONRY GALLERY */}
            <div id={id} className={styles.grid}>
                {images.map(({ src, gridRowEnd, width, height, spanBottom }, index) => (
                    <Suspense key={index} fallback={fallback}>
                        <div
                            className={styles.item}
                            style={{ gridRowEnd: `span ${gridRowEnd}` }}
                            ref={(el) => (itemRefs.current[index] = el)}
                            onLoad={() => handleImgLoaded(index)}
                        >
                            <a href={src}>
                                <LazyImage src={src} className={styles.img} alt={`Masonry Item ${index + 1}`} width={width} height={height} />
                                <span style={{ bottom: spanBottom }}>Masonry Item {index + 1}</span>
                            </a>
                        </div>
                    </Suspense>
                ))}
            </div >
            {images.length === 0 && <h2>Loading Images...</h2>}
            <ScrollDetector checkpoint={0.9} onReachPoint={() => handleFetch(id)} />
        </>
    );
}

const fallback = (
    <div
        style={{
            height: "250px",
            gridRowEnd: 'span 26',
            backgroundColor: "#c2c2c2b6",
            borderRadius: "15px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
            color: "#000000ff",
        }}
    >
    Loading...
    </div>
)