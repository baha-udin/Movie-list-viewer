import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseURL = process.env.REACT_APP_BASEURL;

export const getMovieList = async () => {
  const movie = await axios.get(`${baseURL}/movie/popular?api_key=${apiKey}`);
  return movie.data.results;
};

export const searchMovie = async (query) => {
  const search = await axios.get(
    `${baseURL}/search/movie?query=${query}&api_key=${apiKey}`
  );
  return search.data;
};
