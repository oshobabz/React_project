const API_key = '3b9e533dd7233f40c3ae5635327b3756';
const BASE_URL = 'https://api.themoviedb.com/3';

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_key}`);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_key}
        &query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}