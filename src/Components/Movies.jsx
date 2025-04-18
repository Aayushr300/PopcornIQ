import React from "react";
import MoviesCard from "./MoviesCard";

function Movies({
  handleAddToWatchlist,
  handleRemoveFromWatchlist,
  watchlist,
}) {
  return (
    <div className="p-5">
      <div className=" m-3  text-xl font-bold  text-center">
        Trending Movies
      </div>
      <div className="mb-2 flex  flex-row flex-wrap justify-around ">
        <MoviesCard
          handleAddToWatchlist={handleAddToWatchlist}
          handleRemoveFromWatchlist={handleRemoveFromWatchlist}
          watchlist={watchlist}
        />
      </div>
    </div>
  );
}

export default Movies;
