import React, { useState } from 'react';
import { fetchGenres } from '../services/tmdbService';
import './Sidebar.css';

interface Genre {
    id: number;
    name: string;
}

interface SidebarProps {
    onGenreSelect: (genreId: number) => void;
    selectedGenre: number | null;
}

const Sidebar: React.FC<SidebarProps> = ({ onGenreSelect, selectedGenre }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [genres, setGenres] = useState<Genre[]>([]);

    React.useEffect(() => {
        const getGenres = async () => {
            try {
                const genreList = await fetchGenres();
                setGenres(genreList);
            } catch (error) {
                console.error("Error loading genres:", error);
            }
        };
        getGenres();
    }, []);

    const handleGenreClick = (genreId: number) => {
        onGenreSelect(genreId);
        setIsOpen(false);
    };

    return (
        <>
            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? '✕' : '☰'}
            </button>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="genres-section">
                    <h3>Géneros</h3>
                    <div className="genres-list">
                        {genres.map(genre => (
                            <button
                                key={genre.id}
                                className={`genre-button ${selectedGenre === genre.id ? 'active' : ''}`}
                                onClick={() => handleGenreClick(genre.id)}
                            >
                                {genre.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)} />}
        </>
    );
};

export default Sidebar; 