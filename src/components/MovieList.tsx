import React, { useEffect, useState } from 'react';
import { fetchPopularMovies, fetchMoviesByGenre, searchMovies } from '../services/tmdbService';
import { Movie } from '../types/Movie';
import { useFavorites } from '../context/FavoritesContext';
import './MovieList.css';
import MovieDetail from './MovieDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface MovieListProps {
    selectedGenre: number | null;
    searchQuery: string;
}

const MovieList: React.FC<MovieListProps> = ({ selectedGenre, searchQuery }) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
    const { addToFavorites, favorites } = useFavorites();
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    useEffect(() => {
        const getMovies = async () => {
            setLoading(true);
            try {
                let data;
                if (searchQuery) {
                    data = await searchMovies(searchQuery, page);
                } else if (selectedGenre) {
                    data = await fetchMoviesByGenre(selectedGenre, page);
                } else {
                    data = await fetchPopularMovies(page);
                }
                setMovies(data.results);
            } catch (error) {
                console.error("Error al obtener películas:", error);
            } finally {
                setLoading(false);
            }
        };
        getMovies();
    }, [page, selectedGenre, searchQuery]);

    const loadMoreMovies = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <>
            {loading ? (
                <div className="loading">Cargando...</div>
            ) : (
                <div className="movie-list">
                    {movies.length > 0 ? (
                        movies.map(movie => (
                            <div 
                                className="movie-item" 
                                key={movie.id}
                                onClick={() => setSelectedMovie(movie)}
                            >
                                <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
                                <div className="movie-info">
                                    <div className="release-date">
                                        {new Date(movie.release_date).toLocaleDateString()}
                                    </div>
                                    <h3 className="movie-title">{movie.title}</h3>
                                    <div className="movie-details">
                                        <div className="movie-rating">
                                            {Math.round(movie.vote_average * 10)}%
                                        </div>
                                        <button 
                                            className={`favorite-button ${favorites.some(fav => fav.id === movie.id) ? 'active' : ''}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                addToFavorites(movie);
                                            }}
                                        >
                                            ♥
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="no-results">No se encontraron películas.</div>
                    )}
                </div>
            )}
            {selectedMovie && (
                <MovieDetail 
                    movie={selectedMovie} 
                    onClose={() => setSelectedMovie(null)}
                />
            )}
            <button className="load-more-button" onClick={loadMoreMovies}>
                <FontAwesomeIcon icon={faPlus} /> Cargar más películas
            </button>
        </>
    );
};

export default MovieList; 