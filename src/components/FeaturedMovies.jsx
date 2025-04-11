import React, { useEffect, useState } from "react";
import api from "../API";


const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchFeaturedMovies = async () => {
      try {
        const { data } = await api.get("/movies/featured");
        console.log(data);
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchFeaturedMovies();
  }, []);

  return (
    <section className="featured px-6 py-8 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-6">
        🎬 Featured Movies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="relative group overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            {/* Movie Image */}
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-84 object-contain rounded-lg"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Movie Title */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">{movie.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedMovies;
