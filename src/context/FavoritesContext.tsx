import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Movie } from '../types/Movie';

interface FavoritesContextType {
    favorites: Movie[];
    addToFavorites: (movie: Movie) => void;
    removeFromFavorites: (movieId: number) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [favorites, setFavorites] = useState<Movie[]>([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavorites(storedFavorites);
    }, []);

    const addToFavorites = (movie: Movie) => {
        setFavorites(prevFavorites => {
            if (!prevFavorites.some(fav => fav.id === movie.id)) {
                const newFavorites = [...prevFavorites, movie];
                localStorage.setItem('favorites', JSON.stringify(newFavorites));
                return newFavorites;
            }
            return prevFavorites;
        });
    };

    const removeFromFavorites = (movieId: number) => {
        setFavorites(prevFavorites => {
            const newFavorites = prevFavorites.filter(movie => movie.id !== movieId);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            return newFavorites;
        });
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (context === undefined) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
}; 