import React, { useEffect, useState } from "react";

const FeaturedtvShows = () => {
  const [tvShows, settvShows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tvShows")
      .then((res) => res.json())
      .then((data) => settvShows(data.slice(0, 4))); // Get only 4 tvshows

  }, []);

  return (
    <section className="featured px-6 py-8 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-6">🎬 Featured TvShows</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tvShows.map((show) => (
          <div key={show.id} className="relative group overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            {/* Movie Image */}
            <img src={show.thumbnail} alt={show.title} className="w-full h-64 object-contain rounded-lg" />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Movie Title */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">{show.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedtvShows;