import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie:", error));
  }, [id]);
 return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-3xl bg-gray-800 rounded-lg shadow-lg p-6 text-center">
        <div className="flex" >
        <div>
        <h1 className="text-3xl font-bold mb-4">{movie.title || "movie Title"}</h1>
        <img
          src={movie.thumbnail}
          alt={movie.title || "TV show Thumbnail"}
          className="w-full max-w-md rounded-lg shadow-md mb-4"
        />
        </div>
        <div>
        <p className="text-gray-300 text-lg mb-4">{movie.description || "Movie description goes here."}</p>
        <div className="flex justify-center space-x-6 text-lg font-semibold">
          <span className="bg-blue-600 px-4 py-2 rounded-lg shadow-md">
            Rent: {movie.price?.rent || "$0.00"}
          </span>
          <span className="bg-green-600 px-4 py-2 rounded-lg shadow-md">
            Buy: {movie.price?.buy || "$0.00"}
          </span>
        </div>
        </div>
        </div>
        <Link to="/movies" className="inline-block mt-6 bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg shadow-md text-lg font-semibold">
          ⬅ Back to movies
        </Link>
        
      </div>
      </div>
  );
};
export default MovieDetails;


