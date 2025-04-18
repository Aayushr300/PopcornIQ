import React from "react";
import OldMovies from "../Database/Data";
import Watchlist from "./Navbar";

function MoviesCard({
  handleAddToWatchlist,
  handleRemoveFromWatchlist,
  watchlist,
}) {
  function doesContain(movie) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movie.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className="flex flex-wrap gap-4 p-4 ">
      {OldMovies.map((movie, index) => (
        <div
          key={index}
          className="m-4 hover:scale-110 duration-300 hover:cursor-pointer rounded-xl w-[220px] bg-cover bg-center h-[40vh] flex flex-col justify-between items-end "
          style={{ backgroundImage: `url(${movie.poster})` }}
        >
          {doesContain(movie) ? (
            <div
              onClick={() => handleRemoveFromWatchlist(movie)}
              className=" bg-gray-900/60 flex m-4 justify-center h-8 w-8 items-center rounded-lg "
            >
              &#10006;
            </div>
          ) : (
            <div
              onClick={() => handleAddToWatchlist(movie)}
              className=" bg-gray-900/60 flex m-4 justify-center h-8 w-8 items-center rounded-lg "
            >
              &#x2764;
            </div>
          )}

          <div className="text-white text-center w-full bg-gray-800/70 p-2">
            {movie.title}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoviesCard;
