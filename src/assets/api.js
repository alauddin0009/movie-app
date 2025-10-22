const API_KEY = "9bfaa534a1001d8b1687a955d07f9696"
const BASE_URL = "https://api.themoviedb.org/3"

export const getFavMovies = async () => {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await res.json();
    return data.results;
}

export const searchMovies = async (query) => {
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await res.json();
    return data.results;
}