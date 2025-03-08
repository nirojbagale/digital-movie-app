import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data)); 
  }, []);

  return (
    <section className="featured px-6 py-8 bg-gray-900 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div key={movie.id} onClick={()=>navigate(`/movie/${movie.id}`)} className="relative group overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            {/* Movie Image */}
            <img src={movie.thumbnail} alt={movie.title} className="w-full h-84 object-contain rounded-lg" />

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

export default Movies;
