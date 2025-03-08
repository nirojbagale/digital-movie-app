import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedMovies from "../components/FeaturedMovies";
import FeaturedtvShows from "../components/FeaturedtvShows";
import SpotlightActors from "../components/SpotlightActors";
import SpotlightCinema from "../components/SpotlightCinema";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="my-8 px-4 md:px-8 lg:px-16">
        <HeroSection />
      </section>

      {/* Movie List Section */}
      <section className="my-16 px-4 md:px-8 lg:px-16">
        <FeaturedMovies />
      </section>

      {/* TV Shows Section */}
      <section className="my-16 px-4 md:px-8 lg:px-16">
        <FeaturedtvShows />
      </section>

      {/* Spotlight Actors Section */}
      <section className="my-16 px-4 md:px-8 lg:px-16">
        <SpotlightActors />
      </section>

      {/* Spotlight Cinema Section */}
      <section className="my-16 px-4 md:px-8 lg:px-16">
        <SpotlightCinema />
      </section>
    </div>
  );
}

export default Home;
