import "../styles.css";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const LoadMovies = () => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm),
  );

  useEffect(() => {
    LoadMovies();
  }, []);

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => handleSearch(e)}
      />
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
