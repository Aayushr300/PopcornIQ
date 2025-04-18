import { useEffect, useState } from "react";
import axios from "axios";

import Data from "../Api/server/";

function SearchMovie() {
  const [search, setSearch] = useState("");

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalresults, setTotalPage] = useState(0);

  const fetchdata = async (query, pageNum = 1) => {
    if (!query.trim()) return;

    const url = `http://www.omdbapi.com/?apikey=9b36949d&s=${query}&page=${pageNum}`;

    try {
      const response = await axios.get(url);
      console.log(response.data);
      setMovies(response.data.Search);
      setTotalPage(parseInt(response.data.totalResults));
    } catch (e) {
      setMovies([]);
      setTotalPage(0);
      console.error(e);
      return null; // Or throw e if you want to handle it upstream
    }
  };

  // 🎬 Default movie list (preset IDs or a keyword like "Batman")
  const fetchDefaultMovies = async () => {
    const defaultQuery = ["Avengers", "Batman"]; // or any other default term

    await fetchdata(defaultQuery[1], 1);
  };

  useEffect(() => {
    if (search.trim()) {
      fetchdata(search, page);
    } else {
      fetchDefaultMovies();
    }
  }, [page]);
  const handleSearch = () => {
    setPage(1);
    fetchdata(search, 1);
  };

  const totalPages = Math.ceil(totalresults / 10);

  return (
    <>
      <div className="flex justify-center my-4 ">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a movie..."
          className=" px-2 h-[3rem] w-[18rem] bg-gray-200 outline-none rounded "
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 active:bg-red-500 transition"
        >
          Search
        </button>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center space-x-4 my-6">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-lg font-medium">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {/* This div for a tableof movie */}
      <div className="overflow-hidden rounded-md  border border-gray-150 m-8">
        <table className="w-full text-gray-600  table-auto">
          <thead className="border">
            <tr className=" ">
              <th className="p-2">Poster</th>
              <th className="p-2">Name</th>
              <th className="p-2">Year</th>
              <th className="p-2">Ratings</th>
            </tr>
          </thead>

          <tbody>
            {/* Populate of the array from vovie object */}
            {movies.map((movie) => (
              <tr key={movie.imdbID} className="border">
                <td className=" flex items-center p-2 m-2">
                  <img
                    src={
                      movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"
                    }
                    className="h-[10rem] w-[10rem]"
                    alt={movie.Title}
                  />
                </td>

                <td className="text-lg font-bold mt-2 p-2 text-center">
                  {movie.Title}
                </td>
                <td className="p-2 text-center">{movie.Year}</td>
                <td className="p-2 text-center">{movie.Type.toUpperCase()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SearchMovie;
