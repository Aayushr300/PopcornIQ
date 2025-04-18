import React from "react";
import Logo from "../assets/Movieslogo.png";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" border  ">
      <nav className="bg-gray-700 text-white flex space-x-8 items-center  pl-5 text-xl">
        <a href="./">
          <img
            className="w-[70px] p-1 rounded"
            src="https://cdn-icons-png.flaticon.com/512/777/777242.png"
            alt="Movie Logo"
          />
        </a>

        <div className="flex flex-row w-full items- space-x-8">
          <Link to="/" className=" hover:text-blue-700 text-2xl font-bold">
            Home
          </Link>

          <Link
            to="/watchlist"
            className=" hover:text-blue-700 text-2xl font-bold"
          >
            Watchlist
          </Link>
          <Link
            to="/movielist"
            className=" text-blue-500 hover:text-red-700 text-2xl font-bold"
          >
            MovieList
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
