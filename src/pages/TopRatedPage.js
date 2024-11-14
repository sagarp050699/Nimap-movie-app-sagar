
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopRatedMovies } from "../redux/actions";
import MovieCard from "../components/MovieCard";

const TopRatedPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.topRatedMovies);

  useEffect(() => {
    dispatch(fetchTopRatedMovies());
  }, [dispatch]);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl text-white mb-6">Top Rated Movies</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TopRatedPage;
