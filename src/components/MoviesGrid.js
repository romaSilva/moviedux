import "../styles.css";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  const LoadMovies = () => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  };

  useEffect(() => {
    LoadMovies();
  }, []);

  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
