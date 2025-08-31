'use client';
import React, { useRef, useMemo, useCallback, useState, useEffect } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useStore } from 'store';
import { useClickOutside } from '@/hooks/menu-functions';
import navSections from '@/data/navigation';


export default function LeftNav() {

    // Add feature to close menu if clicked outside
    const { isLeftNavOpen, setLeftNav, leftNavBtnRef } = useStore();
    const leftNavRef = useRef(null);
    const leftRefs = useMemo(() => [leftNavRef, leftNavBtnRef], [leftNavRef, leftNavBtnRef]);
    const handleClose = useCallback(() => setLeftNav(false), [setLeftNav]);
    useClickOutside(leftRefs, handleClose);

    // Check for mobile states
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1024px)");
        setIsMobile(mediaQuery.matches);
        const handleResize = (e) => {
            setIsMobile(e.matches);
        };

        // Attach listener
        mediaQuery.addEventListener("change", handleResize);
        return () => {
            mediaQuery.removeEventListener("change", handleResize);
        };
    }, [])


    // Select the current category by matching the current route with any route in that category
    const pathname = usePathname();
    const catIndex = navSections.findIndex(({ pages }) => pages.some(({ link }) => pathname === link));
    const currentCategory = navSections[catIndex];

    // Show all the categories if on mobile otherwise only show the current category
    // if currentCategory is null/undefined then show nothing
    const categoriesToShow = isMobile ? navSections : currentCategory ? [currentCategory] : [];

    // Render a list of categories
    const renderCategories = (categories) =>
        categories.map((c) => (
            <NavCategory key={c.section} section={c.section} pages={c.pages} onClick={handleClose} />
    ));

    return (
        <div className={`left-nav ${isLeftNavOpen ? 'open' : ''}`} id="leftNav" ref={leftNavRef}>
            {renderCategories(categoriesToShow)}
        </div>
    );
}

function NavCategory({ section, pages, onClick }) {
    return (
        <div key={section}>
            <h3>{section}</h3>
            {pages.map((item) => (
                <Link href={item.link} key={item.link} onClick={onClick}>
                    {item.name}
                </Link>
            ))}
        </div>
    );
}




