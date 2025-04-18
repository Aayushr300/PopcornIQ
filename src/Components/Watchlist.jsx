import React, { useEffect, useState } from "react";

function Watchlist({ watchlist, handleRemoveFromWatchlist, setWatchlist }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState([]);
  const [currentGenre, setCurrentGenre] = useState("All Genre");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (genre) => {
    setCurrentGenre(genre);
  };

  const sortIncreasing = () => {
    const sorted = [...watchlist].sort((a, b) => a.rating - b.rating);
    setWatchlist(sorted);
  };

  const sortDecreasing = () => {
    const sorted = [...watchlist].sort((a, b) => b.rating - a.rating);
    setWatchlist(sorted);
  };

  useEffect(() => {
    const genres = ["All Genre", ...new Set(watchlist.map((m) => m.genre))];
    setGenreList(genres);
  }, [watchlist]);

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-16 py-4">
      {/* Genre Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {genreList.map((genre, index) => (
          <div
            key={index}
            onClick={() => handleFilter(genre)}
            className={`cursor-pointer px-4 py-2 rounded-lg text-sm font-semibold ${
              currentGenre === genre
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-800"
            }`}
          >
            {genre}
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="flex justify-center mb-6">
        <input
          onChange={handleSearch}
          value={search}
          placeholder="Search Movie"
          type="text"
          className="px-4 py-2 w-full sm:w-[22rem] bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      {/* Movie Table */}
      <div className="overflow-x-auto">
        <table className="min-w-[700px] w-full text-center text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-3">Name</th>
              <th className="p-3">Year</th>
              <th className="p-3 flex items-center justify-center gap-2">
                <button onClick={sortIncreasing} title="Sort Ascending">
                  <i className="fa-solid fa-arrow-up" />
                </button>
                Ratings
                <button onClick={sortDecreasing} title="Sort Descending">
                  <i className="fa-solid fa-arrow-down" />
                </button>
              </th>
              <th className="p-3">Popularity</th>
              <th className="p-3">Genre</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movie) =>
                currentGenre === "All Genre"
                  ? true
                  : movie.genre === currentGenre
              )
              .filter((movie) =>
                movie.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((movie, index) => (
                <tr key={movie.id || index} className="border-t">
                  <td className="flex items-center gap-4 p-3">
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      className="h-16 w-24 object-cover rounded"
                    />
                    <span className="font-medium">{movie.title}</span>
                  </td>
                  <td className="p-3">{movie.year}</td>
                  <td className="p-3">{movie.rating}</td>
                  <td className="p-3">{movie.popularity}</td>
                  <td className="p-3">{movie.genre}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleRemoveFromWatchlist(movie)}
                      className="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Watchlist;
