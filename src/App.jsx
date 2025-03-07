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
import MovieDetails from "./pages/MovieDetails";
import FeaturedtvShows from "./components/FeaturedtvShows";
import TvshowDetails from "./pages/tvshowDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/featuredmovies" element={<FeaturedMovies />} />
            <Route path="/featuredtvshows" element={<FeaturedtvShows />} />
            <Route path ="/tvShows" element={<TvShows/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/movie/:id" element={<MovieDetails/>}/>
            <Route path="/tvShow/:id" element={<TvshowDetails/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


