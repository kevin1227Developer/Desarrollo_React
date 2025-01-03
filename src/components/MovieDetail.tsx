import React from 'react';
import './MovieDetail.css';
import { Movie } from '../types/Movie';

interface MovieDetailProps {
    movie: Movie;
    onClose: () => void;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie, onClose }) => {
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
    const fallbackBackdrop = 'https://via.placeholder.com/1920x1080/1a1a1a/666666?text=No+Backdrop+Available';

    return (
        <div className="movie-detail-overlay" onClick={onClose}>
            <div className="movie-detail-content" onClick={e => e.stopPropagation()}>
                <div className="movie-detail-header">
                    <div 
                        className="movie-backdrop" 
                        style={{
                            backgroundImage: `url(${movie.backdrop_path 
                                ? `${IMAGE_BASE_URL}${movie.backdrop_path}`
                                : fallbackBackdrop
                            })`
                        }}
                    >
                        <div className="movie-backdrop-overlay">
                            <div className="movie-header-content">
                                <h2>{movie.title}</h2>
                                <div className="movie-meta">
                                    <span className="movie-rating">
                                        {Math.round(movie.vote_average * 10)}%
                                    </span>
                                    <span className="movie-release-date">
                                        {new Date(movie.release_date).getFullYear()}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="close-button" onClick={onClose}>✕</button>
                </div>
                <div className="movie-detail-body">
                    <div className="movie-poster">
                        <img 
                            src={movie.poster_path 
                                ? `${IMAGE_BASE_URL}${movie.poster_path}`
                                : 'https://via.placeholder.com/500x750/1a1a1a/666666?text=No+Poster'
                            } 
                            alt={movie.title} 
                        />
                    </div>
                    <div className="movie-info-detail">
                        <p className="movie-overview">{movie.overview}</p>
                        <div className="movie-stats">
                            <div className="stat-item">
                                <span className="stat-label">Puntuación</span>
                                <span className="stat-value">{Math.round(movie.vote_average * 10)}%</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Fecha de estreno</span>
                                <span className="stat-value">
                                    {new Date(movie.release_date).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail; 