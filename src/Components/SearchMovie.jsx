import { useEffect, useState } from "react";
import axios from "axios";

function SearchMovie() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  const fetchData = async (query, pageNum = 1) => {
    if (!query.trim()) return;
    setLoading(true);

    try {
      const response = await axios.get("https://www.omdbapi.com/", {
        params: {
          apikey: apiKey,
          s: query,
          page: pageNum,
        },
      });

      console.log("OMDB response:", response.data);

      setMovies(response.data.Search || []);
      setTotalResults(parseInt(response.data.totalResults) || 0);
    } catch (err) {
      console.error(
        "Error fetching movies:",
        err.response?.data || err.message
      );
      setMovies([]);
      setTotalResults(0);
    }

    setLoading(false);
  };

  const fetchDefaultMovies = () => {
    fetchData("Batman", 1);
  };

  useEffect(() => {
    fetchDefaultMovies();
  }, []);

  useEffect(() => {
    if (search.trim()) {
      fetchData(search, page);
    }
  }, [page]);

  const handleSearch = () => {
    setPage(1);
    fetchData(search, 1);
  };

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:px-8 lg:px-16">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a movie..."
          className="px-4 h-12 w-full sm:w-80 bg-gray-200 rounded outline-none"
        />
        <button
          onClick={handleSearch}
          disabled={!search.trim()}
          className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 active:bg-red-500 transition w-full sm:w-auto disabled:opacity-50"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-center">Loading...</p>}

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mb-4 text-sm sm:text-base">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Prev
          </button>
          <span>
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

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse text-left text-sm text-gray-700">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Poster</th>
              <th className="p-3">Title</th>
              <th className="p-3">Year</th>
              <th className="p-3">Type</th>
            </tr>
          </thead>
          <tbody>
            {movies.length > 0 ? (
              movies.map((movie) => (
                <tr key={movie.imdbID} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <img
                      src={
                        movie.Poster !== "N/A"
                          ? movie.Poster
                          : "/placeholder.png"
                      }
                      alt={movie.Title}
                      className="h-24 w-20 object-cover rounded shadow"
                    />
                  </td>
                  <td className="p-3 font-medium">{movie.Title}</td>
                  <td className="p-3">{movie.Year}</td>
                  <td className="p-3 uppercase">{movie.Type}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-4 text-gray-500">
                  No movies found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SearchMovie;
