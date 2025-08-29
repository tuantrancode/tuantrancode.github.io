'use client';
import React from 'react';
import { loadImgUsingColCount, loadImgUsingFlexBox, loadGridImages } from '@/app/Responsive/responsive/responsive-script.js';

export default function Button({ className, children, functionName }) {
    const handleClick = () => {
        switch (functionName) {
            case 'loadImgUsingColCount':
                return loadImgUsingColCount();
            case 'loadImgUsingFlexBox':
                return loadImgUsingFlexBox();
            case 'loadGridImages':
                return loadGridImages();
        }
    }

    return (
        <button className={className} onClick={handleClick}>{children}</button>
    );
}