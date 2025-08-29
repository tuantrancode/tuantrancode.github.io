'use client';
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { useStore } from 'store';
import { useClickOutside } from '@/hooks/menu-functions';


export default function RightNav({ mainContentRef }) {
    const { isRightNavOpen, setRightNav, setRightNavBtnRef, rightNavBtnRef } = useStore();
    const [tableOfContents, setToC] = useState([]);
    const pathname = usePathname(); // getting the route path to know when the user switch page


    // Add feature to close menu if clicked outside
    const rightNavRef = useRef(null);
    const rightRefs = useMemo( () => [rightNavRef, rightNavBtnRef], [rightNavRef, rightNavBtnRef]);
    const handleClose = useCallback( () => setRightNav(false), [setRightNav]);
    useClickOutside( rightRefs, handleClose);
  
    // Dynamically making table of contents by scanning for headings
    useEffect(() => {
        const headings = mainContentRef.current.querySelectorAll(".main-content h1, .main-content h2, .main-content h3, .main-content form label");
        setToC(Array.from(headings)
            .filter((item) => item.hasAttribute('id'))
            .map((heading) => (
                {
                    link: `#${heading.getAttribute('id')}`,
                    name: heading.textContent,
                }
            ))
        )
    }, [pathname, mainContentRef])


    return (
        <div className={`right-nav ${isRightNavOpen ? "open" : ""}`} id="rightNav" ref={rightNavRef}>
            {tableOfContents.length !== 0 ? <h3>Table of Contents</h3> : ''}
            {tableOfContents.map((item, index) => {
                return (
                    <a
                        href={item.link}
                        key={index}
                        onClick={handleClose}
                    >{item.name}</a>
                )
            })}
        </div>
    );
}