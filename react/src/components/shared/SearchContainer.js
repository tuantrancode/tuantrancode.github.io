'use client';
import React, { useEffect } from 'react';
import SearchBar from '@/components/shared/SearchBar';
import { useFilterSearch } from '@/hooks/search-functions';
import copyToClipboard from '@/utils/copy-to-clipboard';

export default function SearchContainer({ children, searchSelector, placeholder, isRowCopyable = false }) {
    const {searchBoundary, handleSearch} = useFilterSearch(searchSelector);

    // Add copy row functionality
    useEffect(() => {
        if(!isRowCopyable) return;
        const rows = searchBoundary.current.querySelectorAll(searchSelector);

        // Define a single handler factory
        const makeClickHandler = (row) => () => { // function factory pattern funFactory(row) => () => {...}
            const codeCell = row.querySelector('code');
            if (!codeCell) return;
            copyToClipboard(codeCell.textContent);
        };

        // Attach handlers and store them for cleanup
        const handlers = [];
        rows.forEach((row) => {
            const handler = makeClickHandler(row);
            handlers.push({ row, handler });
            row.addEventListener('click', handler);
        });

        // clean up all listeners
        return () => {
            handlers.forEach(({ row, handler }) => {
                row.removeEventListener('click', handler)
            });
        }
    }, [searchSelector, isRowCopyable, searchBoundary]);

    return (
        <div ref={searchBoundary}>
            <SearchBar onSearch={handleSearch} placeholder={placeholder} />
            {children}
        </div>
    );
}