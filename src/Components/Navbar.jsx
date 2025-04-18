import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="border-b">
      <nav className="bg-gray-700 text-white px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img
            className="w-10 h-10 p-1 rounded"
            src="https://cdn-icons-png.flaticon.com/512/777/777242.png"
            alt="Movie Logo"
          />
          <span className="text-xl font-bold hidden sm:inline">MovieApp</span>
        </a>

        {/* Hamburger Button */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full sm:flex sm:items-center sm:w-auto sm:space-x-6 sm:ml-auto`}
        >
          <div className="flex flex-col sm:flex-row sm:space-x-6 mt-3 sm:mt-0">
            <Link
              to="/"
              className="hover:text-blue-400 text-lg font-semibold text-center py-1"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/watchlist"
              className="hover:text-blue-400 text-lg font-semibold text-center py-1"
              onClick={() => setIsOpen(false)}
            >
              Watchlist
            </Link>
            <Link
              to="/movielist"
              className=" hover:text-red-400 text-lg font-semibold text-center py-1"
              onClick={() => setIsOpen(false)}
            >
              MovieList
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
