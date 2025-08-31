'use client';
import React, { useRef, useState, useEffect } from 'react';

export default function DropdownBtn({ children, className, contentClassName, text, direction = 'below' }) {
    const dropdownBtn = useRef(null);


    const dropdownContent = useRef(null);
    const defaultStyleRef = useRef({});
    const directionStyleRef = useRef({});
    useEffect(() => {
        const dropdownCSS = window.getComputedStyle(dropdownContent.current);
        defaultStyleRef.current = {
            top: dropdownCSS.top,
            bottom: dropdownCSS.bottom,
            left: dropdownCSS.left,
            right: dropdownCSS.right,
        }
        switch (direction) {
            case 'right':
                directionStyleRef.current = { top: 0, bottom: 'auto', left: '100%', right: 'auto' };
                break;
            case 'left':
                directionStyleRef.current = { top: '0', bottom: 'auto', left: 'auto', right: '100%' };
                break;
            case 'above':
                directionStyleRef.current = { top: 'auto', bottom: '100%', left: '0', right: 'auto'};
                break;
            case 'below':
                directionStyleRef.current = defaultStyleRef.current;
        }

    }, [direction]);



    /* Modern mobile browser can handle :hover by automatically replacing it with click event */
    const [isOpen, setDropdownState] = useState(false);
    const handleClick = () => {
        // const menu = dropdownBtn.current.querySelector(styleClass)
        // setDropdownState((isOpen) => {
        //     isOpen ? menu.setAttribute('data-open', 'close') : menu.setAttribute('data-open', 'open');
        //     return !isOpen
        // })
    }

    return (
        <div className={`dropdownBtn ${className}`} onClick={handleClick} ref={dropdownBtn}>
            <div style={{ whiteSpace: 'nowrap' }}>{text}</div>
            <div className={`dropdownContent ${contentClassName}`} style={directionStyleRef.current} ref={dropdownContent}>
                {children}
            </div>
        </div >
    )
}