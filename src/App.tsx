import React, { useState } from 'react';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import Favorites from './components/Favorites';
import Sidebar from './components/Sidebar';
import UserPopup from './components/UserPopup';
import { FavoritesProvider } from './context/FavoritesContext';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faUser } from '@fortawesome/free-solid-svg-icons';

const App: React.FC = () => {
    const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [showUserPopup, setShowUserPopup] = useState(false);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        setSelectedGenre(null);
    };

    return (
        <FavoritesProvider>
            <div className="app-container">
                <Sidebar 
                    onGenreSelect={setSelectedGenre}
                    selectedGenre={selectedGenre}
                />
                <div className="main-content">
                    <header className="header">
                        <div className="header-content">
                            <div className="header-left">
                                <FontAwesomeIcon icon={faFilm} className="header-icon" />
                                <h1>QuickBet Movies</h1>
                            </div>
                            <div className="header-right">
                                <button className="user-button" onClick={() => setShowUserPopup(true)}>
                                    <FontAwesomeIcon icon={faUser} />
                                </button>
                            </div>
                        </div>
                        <SearchBar onSearch={handleSearch} />
                    </header>
                    <main>
                        <h2>{searchQuery ? 'Resultados de búsqueda' : 'Películas Populares'}</h2>
                        <MovieList selectedGenre={selectedGenre} searchQuery={searchQuery} />
                        <Favorites />
                    </main>
                </div>
            </div>
            {showUserPopup && <UserPopup onClose={() => setShowUserPopup(false)} />}
        </FavoritesProvider>
    );
};

export default App;