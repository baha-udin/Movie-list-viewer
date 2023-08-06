import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseURL = process.env.REACT_APP_BASEURL;

export const getMovieList = async () => {
  const movie = await axios.get(`${baseURL}/movie/popular?api_key=${apiKey}`);
  return movie.data.result;
  console.log(movie);
};

export const searchMovie = async () => {
  const search = await axios.get("");
  return;
};
