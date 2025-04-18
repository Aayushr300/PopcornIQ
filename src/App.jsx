import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Movies from "./Components/Movies";
import Watchlist from "./Components/Watchlist";
import Banner from "./Components/Banner";
import SearchMovie from "./Components/SearchMovie";

import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let [watchlist, setWatchlist] = useState([]);

  let handleAddToWatchlist = (movie) => {
    let newwatchlist = [...watchlist, movie];
    localStorage.setItem("moviesApp", JSON.stringify(newwatchlist));
    setWatchlist(newwatchlist);
    console.log(newwatchlist);
  };

  let handleRemoveFromWatchlist = (movieToRemove) => {
    let filterWatchlist = watchlist.filter((movie) => {
      return movie.id !== movieToRemove.id;
    });
    localStorage.setItem("moviesApp", JSON.stringify(filterWatchlist));
    setWatchlist(filterWatchlist);
  };

  useEffect(() => {
    let savedWatchlist = localStorage.getItem("moviesApp");
    if (!savedWatchlist) {
      return;
    }
    setWatchlist(JSON.parse(savedWatchlist));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  handleAddToWatchlist={handleAddToWatchlist}
                  handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                  watchlist={watchlist}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <>
                <Watchlist
                  watchlist={watchlist}
                  setWatchlist={setWatchlist}
                  handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                />
              </>
            }
          />

          <Route
            path="/movielist"
            element={
              <>
                <SearchMovie />
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
