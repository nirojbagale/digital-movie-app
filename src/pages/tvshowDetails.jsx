import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const TvshowDetails = () => {
  const [tvshow, setTvshow] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/nirojbagale/digital-movie-app/tvShows/${id}`)
      .then((res) => res.json())
      .then((data) => setTvshow(data))
      .catch((error) => console.error("Error fetching tvshows:", error));
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl bg-gray-800 rounded-lg shadow-lg p-6 text-center w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* TV Show Thumbnail */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={tvshow.thumbnail}
              alt={tvshow.title || "TV Show Thumbnail"}
              className="w-full max-w-xs md:max-w-md rounded-lg shadow-md"
            />
          </div>
          
          {/* TV Show Details */}
          <div className="w-full md:w-1/2 text-left">
            <h1 className="text-3xl font-bold mb-4">{tvshow.title || "TV Show Title"}</h1>
            <p className="text-gray-300 text-lg mb-4">{tvshow.description || "TV Show description goes here."}</p>
            
            <div className="flex flex-col sm:flex-row justify-center sm:justify-start space-y-3 sm:space-y-0 sm:space-x-6 text-lg font-semibold">
              <span className="bg-blue-600 px-4 py-2 rounded-lg shadow-md text-center">
                Rent: {tvshow.price?.rent || "$0.00"}
              </span>
              <span className="bg-green-600 px-4 py-2 rounded-lg shadow-md text-center">
                Buy: {tvshow.price?.buy || "$0.00"}
              </span>
              
            </div>
            <Link
          to="/TvShows"
          className="inline-block mt-6 bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg shadow-md text-lg font-semibold"
        >
          ⬅ Back to TV Shows
        </Link>
          </div>
        </div>
        
     
      </div>
    </div>
  );
};

export default TvshowDetails;
