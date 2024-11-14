
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetail, fetchMovieCast } from "../redux/actions";
import { useParams } from "react-router-dom";

const SingleMoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state.movie.movieDetail);
  const movieCast = useSelector((state) => state.movie.movieCast); // Select cast from Redux store
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchMovieDetail(id));
      await dispatch(fetchMovieCast(id));
      setLoading(false);
    };
    fetchData();
  }, [dispatch, id]);

  if (loading) return <div>Loading...</div>;

  if (!movieDetail) return null;

  return (
    <div className="container mx-auto py-8 text-white ">
      <div className="flex bg-gray-900 rounded-lg p-4">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
          alt={movieDetail.title}
          className="w-46 h-56  rounded-md"
        />
        <div className="ml-8">
          <h1 className="text-4xl font-bold">{movieDetail.title}</h1>

          <p className="text-lg">
            Rating:{" "}
            {movieDetail.vote_average
              ? movieDetail.vote_average.toFixed(1)
              : "N/A"}
          </p>
          <p>Release Date: {movieDetail.release_date}</p>

          <p>{movieDetail.overview}</p>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`}
          alt={movieDetail.title}
          className="w-full h-96  rounded-md border-transparent border-collapse "
        />
      </div>

      {/* Cast information */}
      <div className="mt-36">
        <h2 className="text-2xl font-bold">Cast</h2>
        <div className="flex flex-wrap mt-4">
          {movieCast.map((castMember) => (
            <div key={castMember.id} className="w-1/8 p-2 m-4">
              <div className="">
                <img
                  src={`https://image.tmdb.org/t/p/w500${castMember.profile_path}`}
                  alt={castMember.name}
                  className="w-36 h-56 rounded-md"
                />
                <h3 className="mt-2 text-lg font-semibold">
                  {castMember.name}
                </h3>
                <p className="text-sm">Role: {castMember.character}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleMoviePage;
