import axios from 'axios';

const MovieApi = axios.create({
  baseURL: 'https://www.omdbapi.com',
});

export default MovieApi;
