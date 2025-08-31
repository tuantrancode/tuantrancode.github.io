'use client';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link'
import ContrastIcon from '@mui/icons-material/Contrast';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { usePathname } from 'next/navigation'
import { useTheme } from "@/context/ThemeContext";
import { useStore } from 'store';
import DropdownMenu from '@/components/shared/DropdownMenu';
import navSections from '@/data/navigation';

const topLinks = [
    { name: "HTML", link: "/" },
    { name: "CSS", link: "/CSS/css-basics" },
    { name: "Javascript", link: "/Javascript/js-basics" },
    { name: "React", link: "/React/react-basics" },
    { name: "Responsive", link: "/Responsive/responsive" },
    { name: "Tools", link: "/Tools/visual-studio-code" },
];

export default function TopNav() {
    // Setting up switch theme button
    const { setTheme } = useTheme();
    const toggleTheme = () => {
        setTheme((prev) => prev === "light" ? "dark" : "light");
    }

    //Setting up Left and Right Nav Buttons and their refs
    const { setLeftNavBtnRef, toggleLeftNav, setRightNavBtnRef, toggleRightNav } = useStore();
    const leftBtnRef = useRef(null);
    const rightBtnRef = useRef(null);
    useEffect(() => {
        setLeftNavBtnRef(leftBtnRef);
        setRightNavBtnRef(rightBtnRef);
    }, [setLeftNavBtnRef, setRightNavBtnRef]);

    // Disable Right Nav for masonry gallery page
    const pathname = usePathname()
    let hasRightNav = true;
    if (pathname === '/Responsive/masonry-gallery') hasRightNav = false;

    // TODO: add a search bar that can search through route names and subsection names (use a server for query)

    return (
        <div className="top-bar">
            <div className="top-nav">
                <MenuIcon
                    className="menu-btn" id="menuBtn"
                    ref={leftBtnRef} onClick={toggleLeftNav}
                />
                <div className="top-nav-scrollable">
                    {navSections.map(({ section, pages }) => {
                        return (
                            <DropdownMenu text={`${section} ▾`} key={section}>
                                {pages.map( ({name, link}) => <Link href={link} key={link}>{name}</Link>)}            
                            </DropdownMenu>
                        );
                    })}
                    <ContrastIcon className="theme-btn" onClick={toggleTheme} />
                </div>
            </div>
            {hasRightNav && (
                <MoreVertIcon
                    ref={rightBtnRef}
                    className="right-nav-btn"
                    id="rightNavBtn"
                    onClick={toggleRightNav}
                />
            )}
        </div>
    );
}