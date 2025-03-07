import React from "react";
import HeroSection from "../components/HeroSection";
import MovieList from "../components/FeaturedMovies";
import TvShows from "../components/TvShows";
import FeaturedMovies from "../components/FeaturedMovies";
import SpotlightActors from "../components/SpotlightActors";
import FeaturedtvShows from "../components/FeaturedtvShows";
import SpotlightCinema from "../components/SpotlightCinema";
function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">


      {/* Hero Section */}
      <section className="my-8 px-4">
        <HeroSection />
      </section>

      {/* Movie List Section */}
      <section className="my-16 px-4">
        <FeaturedMovies />
      </section>

      {/* TV Shows Section */}
      <section className="my-16 px-4">
        <FeaturedtvShows />
      </section>
      {/* spotlight actors section*/}
      <section className="my-16 px-4">
        <SpotlightActors></SpotlightActors>
      </section>
           {/* spotlight cinema section*/}
           <section className="my-16 px-4">
        <SpotlightCinema></SpotlightCinema>
      </section>
    </div>
  );
}

export default Home;
