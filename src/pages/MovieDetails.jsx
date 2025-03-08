// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';

// const MovieDetails = () => {
//   const [movie, setMovie] = useState({});
//   const { id } = useParams();

//   useEffect(() => {
//     fetch(`http://localhost:5000/movies/${id}`)
//       .then((res) => res.json())
//       .then((data) => setMovie(data))
//       .catch((error) => console.error("Error fetching movie:", error));
//   }, [id]);
//  return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
//       <div className="max-w-6xl bg-gray-800 rounded-lg shadow-lg p-6 text-center">
//         <div className="flex justify-around items-start gap-2">
//         <div>
//         <img
//           src={movie.thumbnail}
//           alt={movie.title || "TV show Thumbnail"}
//           className="w-full max-w-md rounded-lg shadow-md mb-4"
//         />
//         </div>
//         <div>
//         <h1 className="text-3xl text-left font-bold mb-4">{movie.title || "movie Title"}</h1>
//         <p className="text-gray-300 text-lg mb-4">{movie.description || "Movie description goes here."}</p>
//         <div className="flex justify-center space-x-6 text-lg font-semibold">
//           <span className="bg-blue-600 px-4 py-2 rounded-lg shadow-md">
//             Rent: {movie.price?.rent || "$0.00"}
//           </span>
//           <span className="bg-green-600 px-4 py-2 rounded-lg shadow-md">
//             Buy: {movie.price?.buy || "$0.00"}
//           </span>
//         </div>
//         <Link to="/movies" className="inline-block mt-6 bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg shadow-md text-lg text-left font-semibold">
//           ⬅ Back to movies
//         </Link>
//         </div>
//         </div>
      
        
//       </div>
//       </div>
//   );
// };
// export default MovieDetails;

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
      <div className="max-w-6xl bg-gray-800 rounded-lg shadow-lg p-6 text-center w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Movie Thumbnail */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={movie.thumbnail}
              alt={movie.title || "Movie Thumbnail"}
              className="w-full max-w-xs md:max-w-md rounded-lg shadow-md"
            />
          </div>
          
          {/* Movie Details */}
          <div className="w-full md:w-1/2 text-left">
            <h1 className="text-3xl font-bold mb-4">{movie.title || "Movie Title"}</h1>
            <p className="text-gray-300 text-lg mb-4">{movie.description || "Movie description goes here."}</p>
            
            <div className="flex flex-col sm:flex-row justify-center sm:justify-start space-y-3 sm:space-y-0 sm:space-x-6 text-lg font-semibold">
              <span className="bg-blue-600 px-4 py-2 rounded-lg shadow-md text-center">
                Rent: {movie.price?.rent || "$0.00"}
              </span>
              <span className="bg-green-600 px-4 py-2 rounded-lg shadow-md text-center">
                Buy: {movie.price?.buy || "$0.00"}
              </span>
            </div>
            
            <Link
              to="/movies"
              className="inline-block mt-6 bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg shadow-md text-lg font-semibold"
            >
              ⬅ Back to movies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

