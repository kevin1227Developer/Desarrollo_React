import React, { useState } from 'react';
import './SearchBar.css';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                className="search-input"
                placeholder="Buscar películas..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
            />
            <button type="submit" className="search-button">Buscar</button>
        </form>
    );
};

export default SearchBar; 