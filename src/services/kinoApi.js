import axios from 'axios';
const URL = `https://api.themoviedb.org/3/`;
const KEY = '4d8a40deb29f91051ef07c892ab10f05';

const fetchTrending = (page = 1, selectedLanguage = 'en') => {
    return axios
    .get(`${URL}trending/all/day?api_key=${KEY}&page=${page}&language=${selectedLanguage}`)
    .then(responce => responce.data.results);
};

const fetchSearchMovie = (query, page = 1) => {
    return axios
    .get(`${URL}search/movie?query=${query}&api_key=${KEY}&page=${page}&language=en-US`)
    .then(responce => responce.data.results);
};

const fetchMovieDetails = (id, selectedLanguage = 'en') => {
    return axios
    .get(`${URL}movie/${id}?api_key=${KEY}&language=${selectedLanguage}`)
    .then(responce => responce.data);
};

const fetchMovieCredits = (id, selectedLanguage = 'en') => {
    return axios
    .get(`${URL}movie/${id}/credits?api_key=${KEY}&language=${selectedLanguage}`)
    .then(responce => responce.data);
};

const fetchMovieReviews = (id, selectedLanguage = 'en') => {
    return axios
    .get(`${URL}movie/${id}/reviews?api_key=${KEY}&language=${selectedLanguage}`)
    .then(responce => responce.data.results);
};

const fetchTrailerMovies = (movieId, selectedLanguage = 'en') => {
    return axios
    .get(`${URL}movie/${movieId}/videos?api_key=${KEY}&language=${selectedLanguage}`)
    .then(responce => responce.data.results);
};

const fetchAllGenres = (selectedLanguage = 'en') => {
    return axios
    .get(`${URL}/genre/movie/list?api_key=${KEY}&language=${selectedLanguage}`)
    .then(responce => responce.data.genres);
};

const fetchByGenre = (id, page = 1, selectedLanguage = 'en') => {
    return axios
    .get(`${URL}/discover/movie?api_key=${KEY}&with_genres=${id}&page=${page}&language=${selectedLanguage}`)
    .then(responce => responce.data);
};

const fetchActors = (page = 1, query = '', selectedLanguage = 'en') => {
    const url = query
    ? `${URL}search/person?api_key=${KEY}&page=${page}&query=${query}&language=${selectedLanguage}`
    : `${URL}person/popular?api_key=${KEY}&page=${page}&language=${selectedLanguage}`;
    return axios
    .get(url)
    .then(responce => responce.data);
};

const fetchMoviesByActors = (id, page = 1, selectedLanguage = 'en') => {
    return axios
    .get(`${URL}person/${id}/movie_credits?api_key=${KEY}&page=${page}&language=${selectedLanguage}`)
    .then(responce => responce.data.cast);
};

function fetchActorInfoAndMovies(id, selectedLanguage = 'en') {
    return axios
      .get(`${URL}person/${id}?api_key=${KEY}&language=${selectedLanguage}`)
      .then(response => response.data);
  }

const fetchByYear = (page = 1, selectedYear, selectedLanguage = 'en') => {
    return axios 
    .get(`${URL}discover/movie?api_key=${KEY}&sort_by=popularity.desc&page=${page}&primary_release_year=${selectedYear}&language=${selectedLanguage}`)
    .then(responce => responce.data.results);
};

const fetchExpectedMovies = (selectedLanguage = 'en') => {
    return axios
    .get(`${URL}/movie/upcoming?api_key=${KEY}&language=${selectedLanguage}`)
    .then(responce => responce.data.results);
};

const fetchMoviesByRaiting = (currentPage = 1, selectedLanguage = 'en') => {
    return axios 
    .get(`${URL}/movie/top_rated?api_key=${KEY}&page=${currentPage}&language=${selectedLanguage}`)
    .then(responce => responce.data);
};

const fetchWaitingForMovies = (currentPage =1, selectedLanguage = 'en') => {
    return axios
    .get(
        `${URL}/movie/upcoming?api_key=${KEY}&primary_release_date.gte=${new Date()
          .toISOString()
          .slice(0, 10)}&page=${currentPage}&language=${selectedLanguage}`
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
    fetchActorInfoAndMovies,
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