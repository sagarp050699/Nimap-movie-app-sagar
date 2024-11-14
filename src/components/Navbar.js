
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`); // Redirect to search results
      setSearchQuery(""); // Clear the search input
    }
  };

  return (
    <nav className="bg-gray-700 p-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-white text-xl font-bold">MovieDb</h1>
          <button
            className="text-white lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Navigation links for larger screens */}
        <div
          className={`flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 mt-2 lg:mt-0 text-gray-600 ${
            isMenuOpen ? "flex" : "hidden lg:flex"
          }`}
        >
          <Link
            to="/"
            className={`text-gray-300 hover:text-white ${
              activeLink === "/" ? "font-bold" : ""
            }`}
            onClick={() => handleLinkClick("/")}
          >
            Popular
          </Link>
          <Link
            to="/top-rated"
            className={`text-gray-300 hover:text-white ${
              activeLink === "/top-rated" ? "font-bold" : ""
            }`}
            onClick={() => handleLinkClick("/top-rated")}
          >
            Top Rated
          </Link>
          <Link
            to="/upcoming"
            className={`text-gray-300 hover:text-white ${
              activeLink === "/upcoming" ? "font-bold" : ""
            }`}
            onClick={() => handleLinkClick("/upcoming")}
          >
            Upcoming
          </Link>
        </div>

        <form className="flex space-x-2 mt-2 lg:mt-0" onSubmit={handleSearch}>
          <input
            type="text"
            className="p-2 rounded-md w-full sm:w-auto text-black"
            placeholder="Movie Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search input
          />
          <button
            type="submit"
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Search
          </button>
        </form>
      </div>

      {/* Mobile menu visible only on small screens */}
      {isMenuOpen && (
        <div className="flex flex-col lg:hidden mt-2">
          <Link
            to="/"
            className={`text-gray-300 hover:text-white ${
              activeLink === "/" ? "font-bold" : ""
            }`}
            onClick={() => handleLinkClick("/")}
          >
            Popular
          </Link>
          <Link
            to="/top-rated"
            className={`text-gray-300 hover:text-white ${
              activeLink === "/top-rated" ? "font-bold" : ""
            }`}
            onClick={() => handleLinkClick("/top-rated")}
          >
            Top Rated
          </Link>
          <Link
            to="/upcoming"
            className={`text-gray-300 hover:text-white ${
              activeLink === "/upcoming" ? "font-bold" : ""
            }`}
            onClick={() => handleLinkClick("/upcoming")}
          >
            Upcoming
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
