'use client';
import React, { useRef, useEffect, useState } from 'react';
import TopNav from '@/components/web/TopNav';
import LeftNav from '@/components/web/LeftNav';
import RightNav from '@/components/web/RightNav';

export default function MainContainer({ children, className }) {
    const mainContentRef = useRef(null);

    return (
        <>
            <TopNav />
            <div className={`container ${className}`}>
                <LeftNav />
                <main ref={mainContentRef} className="main-content">{children}</main>
                <RightNav mainContentRef={mainContentRef} />
            </div>
        </>
    )
}