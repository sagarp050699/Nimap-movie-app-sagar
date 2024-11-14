Nimap-movie-app-sagar
A responsive React.js application that allows users to browse movies via the TMDb API. Users can view popular, top-rated, and upcoming movies, search for specific titles, and explore detailed information with cast on each movie.

Features
Home Page: Displays popular movies with pagination.
Top Rated & Upcoming Pages: Lists top-rated and upcoming movies with pagination.
Single Movie Detail Page: Shows detailed information, including cast.
Global Search: Search for movies by title from the navbar.
Technologies Used
React.js for UI
React Router for navigation
Axios for API calls
CSS Modules for scoped styling
TMDb API for movie data
Getting Started
Clone the repository:

bash
Copy code
git clone https://github.com/sagarp050699/Nimap-movie-app-sagar.git
cd Nimap-movie-app-sagar
Install dependencies:

bash
Copy code
npm install
Add API Key:

Create a .env file in the root directory.
Add your TMDb API key:
plaintext
Copy code
REACT_APP_TMDB_API_KEY=your_api_key_here
Run the app:

bash
Copy code
npm start
Project Structure
components/: Reusable components like Navbar and MovieList.
pages/: Individual pages (HomePage, TopRatedPage, UpcomingPage, MovieDetailPage, SearchedPage).
Available Scripts
npm start: Runs the app in development mode.
npm run build: Builds the app for production.
This README will guide users in setting up and running the project easily. Let me know if you need further adjustments!
