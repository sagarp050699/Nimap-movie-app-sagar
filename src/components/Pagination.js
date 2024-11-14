
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-8">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-4 py-2 mx-1 rounded-md ${
            currentPage === number
              ? "bg-blue-500 text-white"
              : "bg-gray-700 text-white"
          }`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
