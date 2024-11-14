
import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="flex flex-col items-center w-full sm:w-36 h-86">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-86 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"

        />
       
   
        <h2 className="text-white text-sm sm:text-md font-medium text-center mt-2">
          {movie.title}
        </h2>
        <h3 className="text-white text-sm sm:text-md font-medium text-center mt-1">
          Rating: {movie.vote_average.toFixed(1)}
        </h3>
      </Link>
    </div>
  );
};

export default MovieCard;
