'use client';
import React, { useEffect, useState, use, useRef } from 'react';
import Image from 'next/image';

const imgCache = new Map();

function loadImage(src) {
    if (!imgCache.has(src)) {
        imgCache.set(
            src,
            new Promise((resolve, reject) => {
                const img = new window.Image();
                img.src = src;
                img.onload = () => {
                    resolve();
                }
                img.onerror = reject;
            })
        );
    }
    return imgCache.get(src);
}

export default function LazyImage({ className, src, alt, width = 500, height = 500 }) {
    use(loadImage(src));

    return (
        <>
            {/* Next.js Image component can be inaccurate, compared to <img>, when estimating renderedHeight of image*/}
            {/*{ Next.js Image requires width, height, alt to be set*/}
            <Image
                src={src} className={className} alt={alt} loading="lazy" priority={false}
                width={width} height={height} style={{ width: "100%", height: "auto" }} />
            {/* <img
                src={src} className={className} alt={alt} loading="lazy" 
                fetchpriority={'low'} decoding={'async'}  priority={false} /> */}
        </>
    )
}