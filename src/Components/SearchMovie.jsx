import { useEffect, useState } from "react";
import axios from "axios";

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
      setMovies(response.data.Search || []);
      setTotalPage(parseInt(response.data.totalResults) || 0);
    } catch (e) {
      setMovies([]);
      setTotalPage(0);
      console.error(e);
    }
  };

  const fetchDefaultMovies = async () => {
    const defaultQuery = ["Avengers", "Batman"];
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
    <div className="min-h-screen bg-white px-2 sm:px-6 lg:px-16">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a movie..."
          className="px-4 h-12 w-full sm:w-80 bg-gray-200 outline-none rounded"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 active:bg-red-500 transition w-full sm:w-auto"
        >
          Search
        </button>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 my-6 text-center text-sm sm:text-base">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Prev
          </button>
          <span className="font-medium">
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

      {/* Responsive Scrollable Table */}
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full text-gray-700 table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-3 text-left">Poster</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Year</th>
              <th className="p-3 text-left">Type</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.imdbID} className="border-b hover:bg-gray-50">
                <td className="p-3">
                  <img
                    src={
                      movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"
                    }
                    alt={movie.Title}
                    className="h-28 w-28 object-cover rounded shadow"
                  />
                </td>
                <td className="p-3 font-semibold">{movie.Title}</td>
                <td className="p-3">{movie.Year}</td>
                <td className="p-3 uppercase">{movie.Type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SearchMovie;
