import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Header from "./components/header";
import Footer from "./components/footer";
import FeaturedMovies from "./components/FeaturedMovies";
import TvShows from "./components/TvShows";
import Movies from "./components/Movies";
import DetailPage from "./pages/DetailPage";
import FeaturedtvShows from "./components/FeaturedtvShows";
import { DigitalMovieProvider } from "./components/Context";

function App() {
  return (
    <Router>
      <DigitalMovieProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/featuredmovies" element={<FeaturedMovies />} />
              <Route path="/featuredtvshows" element={<FeaturedtvShows />} />
              <Route path="/tvShows" element={<TvShows />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movie/:id" element={<DetailPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </DigitalMovieProvider>
    </Router>
  );
}

export default App;
