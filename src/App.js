import { useEffect, useState } from "react";
import "./App.css";
import { getMovieList } from "./api";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="movie-wrapper" key={i}>
          <div className="movie-title">{movie.title}</div>
          <img
            alt="banner"
            className="movie-image"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
          />
          <div className="movie-date">{movie.release_date}</div>
          <div className="movie-rate">{movie.vote_average}</div>
        </div>
      );
    });
  };

  const Search = (q) => {
    console.log({ q });
  };

  return (
    <div className="App">
      <header className="App -header">
        <h1>Movie list updater</h1>
        <input
          placeholder="Search your favourite films"
          className="movie-search"
          onChange={({ target }) => Search(target.value)}
        />
        <div className="movie-container">
          <PopularMovieList />{" "}
        </div>
      </header>
    </div>
  );
};

export default App;
