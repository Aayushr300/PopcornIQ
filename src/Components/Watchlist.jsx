import React, { useEffect, useState } from "react";
import OldMovies from "../Api/Data";

function Watchlist({ watchlist, handleRemoveFromWatchlist, setWatchlist }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState([]);
  const [currentGenre, setCurrentGenre] = useState("All Genre");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre) => {
    setCurrentGenre(genre);
  };

  let sortIncreasing = () => {
    let sortedIncreasing = [...watchlist].sort((movieA, movieB) => {
      // Compare the ratings directly since they are numbers
      return movieA.rating - movieB.rating;
    });

    setWatchlist(sortedIncreasing); // Update the watchlist state
  };
  let sortDecreasing = () => {
    console.log("Before sorting (decreasing):", watchlist); // Log before sorting

    let sortedDecreasing = [...watchlist].sort((movieA, movieB) => {
      return movieB.rating - movieA.rating;
    });

    setWatchlist(sortedDecreasing); // Update the watchlist state
  };

  useEffect(() => {
    let genres = [...new Set(watchlist.map((movie) => movie.genre))];
    console.log(genres);
    genres = new Set(genres);
    setGenreList(["All Genre", ...genres]);
  }, [watchlist]); // Run this effect whenever watchlist changes

  return (
    <>
      <div className="h-[80vh]">
        <div className="flex justify-center flex-wrap m-4">
          {genreList.map((genre, index) => (
            <div
              onClick={() => {
                handleFilter(genre);
              }}
              key={index}
              className={
                currentGenre === genre
                  ? "flex justify-center w-[9rem] h-[2rem] bg-blue-400 text-white font-bold rounded-lg items-center mx-2 mt-2 cursor-pointer"
                  : "flex justify-center w-[9rem] h-[2rem] bg-gray-400 text-white font-bold rounded-lg items-center mx-2 mt-2 cursor-pointer"
              }
            >
              {genre}
            </div>
          ))}
        </div>

        {/* //Search movie  */}
        <div className="flex justify-center my-4">
          <input
            onChange={handleSearch}
            value={search}
            placeholder="Search Movie"
            type="text"
            className=" px-2 h-[3rem] w-[18rem] bg-gray-200 outline-none "
          />
        </div>
        {/* This div for a tableof movie */}
        <div className="  overflow-hidden rounded-md  border border-gray-150 m-8">
          <table className="w-full text-gray-600 text-center">
            <thead className="border">
              <tr>
                <th>Name</th>
                <th>Year</th>
                <th className="flex justify-center">
                  <div onClick={sortIncreasing} className="px-2">
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                  <div className="mx-1">Ratings</div>
                  <div onClick={sortDecreasing} className="px-2">
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                </th>

                <th>Popularity</th>
                <th>Genre</th>
              </tr>
            </thead>

            <tbody>
              {/* Populate of the array from vovie object */}
              {watchlist
                .filter((movie) => {
                  if (currentGenre === "All Genre") return true;
                  else {
                    return movie.genre === currentGenre;
                  }
                })
                .filter((movie) => {
                  return movie.title
                    .toLowerCase()
                    .includes(search.toLowerCase());
                })
                .map((movie) => {
                  return (
                    <tr className="border-b-2">
                      <td className="flex items-center p-2 m-2">
                        <img
                          src={`${movie.poster}`}
                          alt=""
                          className="w-[10rem] h-[6rem] rounded-xl "
                        />
                        <div className="mx-10">{movie.title}</div>
                      </td>
                      <td>{movie.year}</td>
                      <td>{movie.rating}</td>
                      <td>{movie.popularity}</td>
                      <td>{movie.genre}</td>

                      <td>
                        <button
                          onClick={() => {
                            handleRemoveFromWatchlist(movie);
                          }}
                          className="font-bold border border-solid  border-red-800 bg-red-400 text-white rounded-md hover:text-black px-2 mx-2 "
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Watchlist;
