import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../API";

const Tvshows = () => {
  const [tvshows, setTvShows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTvShows = async () => {
      try {
        const { data } = await api.get("/movies/tvshows");
        setTvShows(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchTvShows();
  }, []);

  return (
    <section className="featured px-6 py-8 bg-gray-900 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tvshows.map((show) => (
          <div
            key={show.id}
            onClick={() => navigate(`/movie/${show.id}`)}
            className="relative group overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            {/* Movie Image */}
            <img
              src={show.poster}
              alt={show.title}
              className="w-full h-84 object-contain rounded-lg"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Tvshow Title */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">{show.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tvshows;
