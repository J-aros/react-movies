import React, { useContext } from "react";
import { GlobalContext } from "../../store/Context/globalState";
import MovieCard from "../MovieCard/MovieCard";

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Mi Lista</h1>
          <span className="count-pill">
            {watchlist.length}{" "}
            {watchlist.length === 1 ? "Película" : "Películas"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No hay películas en tu lista, agrega alguna!</h2>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
