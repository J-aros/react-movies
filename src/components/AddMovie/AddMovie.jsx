import ResultCard from "../ResultCard/ResultCard";
import { useState } from "react";
import axios from "axios";

const AddMovie = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${
    import.meta.env.VITE_APP_TMDB_KEY
  }&language=en-US&page=1&include_adult=false&query=${query}`;

  const getMovie = async () => {
    try {
      const { data } = await axios.get(url);
      setResults(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    getMovie();
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Buscar una película"
              value={query}
              onChange={handleSubmit}
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie}/>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
