'use client';
import React, { useRef, useMemo, useCallback } from 'react';
import Link from 'next/link'
import { useStore } from 'store';
import { useClickOutside } from '@/hooks/menu-functions';
import navSections from '@/data/navigation';


export default function LeftNav() {
    const { isLeftNavOpen, setLeftNav, leftNavBtnRef, setLeftNavBtnRef } = useStore();

    // Add feature to close menu if clicked outside
    const leftNavRef = useRef(null);
    const leftRefs = useMemo( () => [leftNavRef, leftNavBtnRef], [leftNavRef, leftNavBtnRef]);
    const handleClose = useCallback( () => setLeftNav(false), [setLeftNav]) ;
    useClickOutside( leftRefs,  handleClose);
    
    return (
        <>
       
        <div className={`left-nav ${isLeftNavOpen ? "open" : ""}`} id="leftNav" ref={leftNavRef}>
            {navSections.map(({ section, pages }) => {
                return (
                    <div key={section}>
                        <h3>{section}</h3>
                        {pages.map((item) => {
                            return (
                                <Link
                                    href={item.link}
                                    key={item.link}
                                    onClick={handleClose}
                                >{item.name}</Link>
                            )
                        })}
                    </div>
                );
            })}
        </div>
        </>
    );
}