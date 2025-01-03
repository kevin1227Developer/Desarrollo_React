import axios from 'axios';

const API_KEY = '82083c7229428d6ea16a1a51fea3f57c'; // Nueva clave de API
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async (page: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
        console.log("Datos de películas:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        throw error; // Re-lanzar el error para manejarlo en el componente
    }
};

export const searchMovies = async (query: string, page: number) => {
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`);
    return response.data;
};

export const fetchMovieDetails = async (id: number) => {
    const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    return response.data;
};

export const fetchGenres = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
        return response.data.genres;
    } catch (error) {
        console.error("Error fetching genres:", error);
        throw error;
    }
};

export const fetchMoviesByGenre = async (genreId: number, page: number = 1) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching movies by genre:", error);
        throw error;
    }
}; 