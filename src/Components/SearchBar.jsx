import React, { useState } from "react";
import { Link } from "react-router-dom";

const types = ["buy", "rent"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search query:", query);
    // Add your search logic here
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Type Selection Buttons */}
      <div className="flex w-fit">
        {types.map((type, index) => {
          const isActive = query.type === type;
          const baseClass = "py-3 px-6 border border-black cursor-pointer transition-all duration-200 hover:opacity-80";
          const activeClass = isActive ? "bg-black text-white" : "bg-white text-black";
          const roundedClass = index === 0 ? "rounded-tl-md" : "rounded-tr-md";

          return (
            <button
              key={type}
              onClick={() => switchType(type)}
              className={`${baseClass} ${activeClass} ${roundedClass} border-b-0`}
              type="button"
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          );
        })}
      </div>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="bg-white border border-black rounded-b-md rounded-tr-md overflow-hidden">
        {/* Desktop Layout */}
        <div className="hidden lg:flex">
          <input
            className="flex-1 py-4 px-4 border-r text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-inset"
            type="text"
            name="location"
            value={query.location}
            onChange={handleInputChange}
            placeholder="City Location"
          />
          <input
            className="flex-1 text-sm  py-4 px-4 border-r border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-inset"
            type="number"
            name="minPrice"
            value={query.minPrice || ""}
            onChange={handleInputChange}
            min={0}
            max={10000000}
            placeholder="Minimum Price"
          />
          <input
            className="flex-1 text-sm py-4 px-4 border-r border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-inset"
            type="number"
            name="maxPrice"
            value={query.maxPrice || ""}
            onChange={handleInputChange}
            min={0}
            max={10000000}
            placeholder="Maximum Price"
          />
          <Link to="/list" >
          <button
            className="bg-[#fece51] hover:bg-[#fdc125] transition-colors duration-200 flex items-center justify-center text-white cursor-pointer px-6 focus:outline-none focus:ring-2 focus:ring-yellow-600 h-full"
            type="submit"
            >
            <img src="/search.png" alt="search" className="w-5 h-5" />
          </button>
            </Link>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:flex lg:hidden flex-col">
          <div className="flex">
            <input
              className="flex-1 py-4 px-4 border-r border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-inset"
              type="text"
              name="location"
              value={query.location}
              onChange={handleInputChange}
              placeholder="City Location"
            />
            <Link to="/list">
            <button
              className="bg-[#fece51] hover:bg-[#fdc125] transition-colors duration-200 flex items-center justify-center text-white cursor-pointer px-6 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              type="submit"
            >
              <img src="/search.png" alt="search" className="w-5 h-5" />
            </button>
            </Link>
          </div>
          <div className="flex border-t border-gray-300">
            <input
              className="flex-1 py-4 px-4 border-r border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-inset"
              type="number"
              name="minPrice"
              value={query.minPrice || ""}
              onChange={handleInputChange}
              min={0}
              max={10000000}
              placeholder="Minimum Price"
            />
            <input
              className="flex-1 py-4 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-inset"
              type="number"
              name="maxPrice"
              value={query.maxPrice || ""}
              onChange={handleInputChange}
              min={0}
              max={10000000}
              placeholder="Maximum Price"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col">
          <input
            className="w-full py-4 px-4 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-inset"
            type="text"
            name="location"
            value={query.location}
            onChange={handleInputChange}
            placeholder="City Location"
          />
          <div className="flex">
            <input
              className="flex-1 py-4 px-4 border-r border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-inset"
              type="number"
              name="minPrice"
              value={query.minPrice || ""}
              onChange={handleInputChange}
              min={0}
              max={10000000}
              placeholder="Min Price"
            />
            <input
              className="flex-1 py-4 px-4 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-inset"
              type="number"
              name="maxPrice"
              value={query.maxPrice || ""}
              onChange={handleInputChange}
              min={0}
              max={10000000}
              placeholder="Max Price"
            />
          </div>
          <Link to="/list">
          <button
            className="bg-[#fece51] hover:bg-[#fdc125] transition-colors duration-200 flex items-center justify-center text-white cursor-pointer py-4 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            type="submit"
          >
            <img src="/search.png" alt="search" className="w-5 h-5 mr-2" />
            <span className="font-medium">Search Properties</span>
          </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;