'use client';
import React, { useRef, useState, useEffect } from 'react';
import styles from '@/app/Responsive/responsive/dropdown-menu.module.css';

export default function DropdownBtn({ children, className, direction = 'below' }) {
    const [isOpen, setDropdownState] = useState(false);
    const dropdownBtn = useRef(null);

    const styleClass = direction === 'below' ? `.${styles.dropdownContent}` : `.${styles.dropdownContent}`

    const handleClick = () => {
        // Modern mobile browser can handle :hover by automatically replacing it with click event
        // const menu = dropdownBtn.current.querySelector(styleClass)
        // setDropdownState((isOpen) => {
        //     isOpen ? menu.setAttribute('data-open', 'close') : menu.setAttribute('data-open', 'open');
        //     return !isOpen
        // })
    }

    return (
        <div className={className} onClick={handleClick} ref={dropdownBtn}>
            <div>Dropdown Menu &#9660;</div>
            {children}
        </div>
    )
}