import { useRef } from 'react';

/**
 * Hook to filter the search result by toggling the display property to display: none
 *
 * @param {string} searchSelector - The CSS Selector used to find rows or elements to filter
 * @returns {{
 *   searchBoundary: ref object,
 *   handleSearch: (searchTerm: string) => void
 * }}
 */
export function useFilterSearch(searchSelector) {
    const searchBoundary = useRef(null);

    const handleSearch = (searchTerm) => {
        if (searchBoundary.current) {
            const rows = searchBoundary.current.querySelectorAll(searchSelector);
            rows.forEach(row => {
                row.style.display = row.textContent.toLowerCase().includes(searchTerm.toLowerCase()) ? '' : 'none';
            })
        }
    }

    return { searchBoundary, handleSearch }
}