'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { recalcAllGridItems, recalcLastBatch, fetchMasonryImages } from './masonry-script';
import ScrollDetector from './ScrollDetector';
import styles from './masonry-gallery.module.css';

export default function MasonryGallery({ id }) {
    const [images, setImages] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const numberToFetch = 20;

    const handleFetch = (id) => {
        if(isFetching) return;

        setIsFetching(true);
        fetchMasonryImages(id, numberToFetch)
        .then((loaded) => {
            setImages((prev) => [...prev, ...loaded]);
            recalcLastBatch(id, numberToFetch);
        }).finally(() => { 
            setIsFetching(false);
        });
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
            {/* <!-- USING GRID AND CALCULATING ROW SPAN OF EACH IMAGE TO MAKE MASONRY GALLERY 
            * Next.js Image component can be inaccurate, compared to <img>, when estimating renderedHeight of image
            --> */}
            <div id={id} className={styles.grid}>
                {images.map(({ src, gridRowEnd, width, height, spanBottom }, index) => (
                    // <div key={index} className={styles.item} style={{ gridRowEnd: `span ${gridRowEnd}` }}>
                    <div key={index} className={styles.item} style={{ gridRowEnd: `span ${gridRowEnd}` }}>
                        <a href={src}>
                            {/*{ Next.js Image requires width, height, alt to be set*/}
                            <Image
                                src={src} className={styles.img} alt={`Masonry Item ${index + 1}`} loading="lazy"
                                width={width || 500} height={height || 500} style={{ width: "100%", height: "auto" }} />
                            {/* <img  
                                    src={src} className={styles.img} alt={`Masonry Item ${index + 1}`} loading="lazy" 
                                    fetchpriority=“low” decoding=“async”/> */}
                            <span style={{ bottom: spanBottom }}>Masonry Item {index + 1}</span>
                        </a>
                    </div>
                ))}
            </div>
            <ScrollDetector checkpoint={0.9} onReachPoint={() => handleFetch(id)} />
        </>
    );
}