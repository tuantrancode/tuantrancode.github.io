'use client';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from "@/context/ThemeContext";
import { useStore } from 'store';
import ContrastIcon from '@mui/icons-material/Contrast';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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

    const pathname = usePathname()
    let hasRightNav = true;
    if(pathname === '/Responsive/masonry-gallery') hasRightNav = false;

    return (
        <div className="top-bar">
            <div className="top-nav">
                <MenuIcon
                    className="menu-btn" id="menuBtn"
                    ref={leftBtnRef} onClick={toggleLeftNav}
                />
                <div className="top-nav-scrollable">
                    {/*TODO: create dropdown component*/}
                    {topLinks.map((item) => {
                        return <Link href={item.link} key={item.name}>{item.name}</Link>
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