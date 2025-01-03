import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import './Favorites.css';

const Favorites: React.FC = () => {
    const { favorites, removeFromFavorites } = useFavorites();
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

    return (
        <div className="favorites-container">
            <h2>Películas Favoritas</h2>
            <div className="favorites-grid">
                {favorites.length > 0 ? (
                    favorites.map(movie => (
                        <div className="favorite-item" key={movie.id}>
                            <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
                            <div className="favorite-info">
                                <h3>{movie.title}</h3>
                                <button 
                                    className="remove-favorite"
                                    onClick={() => removeFromFavorites(movie.id)}
                                >
                                    ❌
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No hay películas favoritas</p>
                )}
            </div>
        </div>
    );
};

export default Favorites; 