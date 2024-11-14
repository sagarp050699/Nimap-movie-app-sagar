const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const BASE_URL = "https://api.themoviedb.org/3/movie";

export const fetchPopularMovies = () => async (dispatch) => {
  const response = await fetch(
    `${BASE_URL}/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await response.json();
  dispatch({ type: "SET_POPULAR_MOVIES", payload: data.results });
};

export const fetchTopRatedMovies = () => async (dispatch) => {
  const response = await fetch(
    `${BASE_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await response.json();
  dispatch({ type: "SET_TOP_RATED_MOVIES", payload: data.results });
};

export const fetchUpcomingMovies = () => async (dispatch) => {
  const response = await fetch(
    `${BASE_URL}/upcoming?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await response.json();
  dispatch({ type: "SET_UPCOMING_MOVIES", payload: data.results });
};

export const fetchMovieDetail = (movie_id) => async (dispatch) => {
  const response = await fetch(
    `${BASE_URL}/${movie_id}?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  dispatch({ type: "SET_MOVIE_DETAIL", payload: data });
};


export const fetchMovieCast = (movie_id) => async (dispatch) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  dispatch({ type: "SET_MOVIE_CAST", payload: data.cast }); // Dispatching the cast data
};
