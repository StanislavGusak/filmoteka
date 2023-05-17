import axios from 'axios';
const URL = `https://api.themoviedb.org/3/`;
const KEY = '4d8a40deb29f91051ef07c892ab10f05';

const fetchTrending = (page = 1) => {
    return axios
    .get(`${URL}trending/all/day?api_key=${KEY}&page=${page}`)
    .then(responce => responce.data.results);
};

const fetchSearchMovie = (query, page = 1) => {
    return axios
    .get(`${URL}search/movie?query=${query}&api_key=${KEY}&page=${page}`)
    .then(responce => responce.data.results);
};

const fetchMovieDetails = (id) => {
    return axios
    .get(`${URL}movie/${id}?api_key=${KEY}`)
    .then(responce => responce.data);
};

const fetchMovieCredits = (id) => {
    return axios
    .get(`${URL}movie/${id}/credits?api_key=${KEY}`)
    .then(responce => responce.data);
};

const fetchMovieReviews = (id) => {
    return axios
    .get(`${URL}movie/${id}/reviews?api_key=${KEY}`)
    .then(responce => responce.data.results);
};

const fetchTrailerMovies = (movieId) => {
    return axios
    .get(`${URL}movie/${movieId}/videos?api_key=${KEY}`)
    .then(responce => responce.data.results);
};

const fetchAllGenres = () => {
    return axios
    .get(`${URL}/genre/movie/list?api_key=${KEY}`)
    .then(responce => responce.data.genres);
};

const fetchByGenre = (id, page = 1) => {
    return axios
    .get(`${URL}/discover/movie?api_key=${KEY}&with_genres=${id}&page=${page}`)
    .then(responce => responce.data);
};

const fetchActors = (page = 1, query = '') => {
    const url = query
    ? `${URL}search/person?api_key=${KEY}&page=${page}&query=${query}`
    : `${URL}person/popular?api_key=${KEY}&page=${page}`;
    return axios
    .get(url)
    .then(responce => responce.data);
};

const fetchMoviesByActors = (id, page = 1) => {
    return axios
    .get(`${URL}person/${id}/movie_credits?api_key=${KEY}&page=${page}`)
    .then(responce => responce.data.cast);
};

const fetchActorsInfoAndMovies = (id) => {
    return axios
    .get(`${URL}person/${id}?api_key=${KEY}`)
    .then(responce => responce.data);
};

const fetchByYear = (page = 1, selectedYear) => {
    return axios 
    .get(`${URL}discover/movie?api_key=${KEY}&sort_by=popularity.desc&page=${page}&primary_release_year=${selectedYear}`)
    .then(responce => responce.data.results);
};

const fetchExpectedMovies = () => {
    return axios
    .get(`${URL}/movie/upcoming?api_key=${KEY}`)
    .then(responce => responce.data.results);
};

const fetchMoviesByRaiting = (currentPage = 1) => {
    return axios 
    .get(`${URL}/movie/top_rated?api_key=${KEY}&page=${currentPage}`)
    .then(responce => responce.data);
};

const fetchWaitingForMovies = (currentPage =1) => {
    return axios
    .get(
        `${URL}/movie/upcoming?api_key=${KEY}&primary_release_date.gte=${new Date()
          .toISOString()
          .slice(0, 10)}&page=${currentPage}`
    )
    .then(responce => responce.data);
};

function fetchNewMoviesNotification(page, selectedLanguage = 'en') {
    const today = new Date().toISOString().slice(0, 10);
    const url = `${URL}/discover/movie?api_key=${KEY}&primary_release_date.gte=${today}&sort_by=primary_release_date.asc&page=${page}&language=${selectedLanguage}`;
  
    return axios.get(url).then(response => response.data.results);
  };

const apiTheMovieDB = {
    fetchMoviesByActors,
    fetchActorsInfoAndMovies,
    fetchTrending,
    fetchSearchMovie,
    fetchMovieDetails,
    fetchMovieCredits,
    fetchMovieReviews,
    fetchTrailerMovies,
    fetchAllGenres,
    fetchByGenre,
    fetchActors,
    fetchByYear,
    fetchExpectedMovies,
    fetchMoviesByRaiting,
    fetchWaitingForMovies,
    fetchNewMoviesNotification
};
export default apiTheMovieDB;