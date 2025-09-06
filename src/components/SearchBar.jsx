import React from "react";

const SearchBar = ({ handleSearchSubmit }) => {
  return (
    <form
      className="flex items-center gap-3 mb-6"
      onSubmit={handleSearchSubmit}
    >
      <input
        type="text"
        name="search"
        placeholder="Search for products..."
        className="w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
