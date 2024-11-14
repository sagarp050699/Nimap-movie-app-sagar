import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "../redux/actions";
import MovieCard from "../components/MovieCard";

const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.popularMovies);
  console.log("data", movies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return (
    <div className="container mx-auto py-4 px-2">
      <h1 className="text-white text-2xl sm:text-3xl mb-4">Popular Movies</h1>
      {/* Adjust grid to be more flexible for small screens */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-4 mb-4 ">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
