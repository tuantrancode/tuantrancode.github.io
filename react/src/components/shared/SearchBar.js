import React from 'react';

export default function SearchBar({ onSearch, placeholder = 'Search' }) {
    const handleChange = (event) => {
        console.log(event.target.value);
        onSearch(event.target.value);
    }

    return (
        <input
            onChange={handleChange}
            type="text"
            className="search-bar"
            placeholder={placeholder} />
    );
}