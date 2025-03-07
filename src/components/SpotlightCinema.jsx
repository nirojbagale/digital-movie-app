import React, { useEffect, useState } from "react";

const SpotlightCinema = () => {
  const [spotlightActors, setSpotlightActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/spotlight-cinema")
      .then((res) => res.json())
      .then((data) => setSpotlightActors(data)); 

  }, []);
  return (
    <section className=" rounded-lg bg-gray-900 text-white">
      <div className="border-rounded grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 content-center ">
      <h2 className=" col-span-2 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-center uppercase tracking-wide content-center">
    CINEMA-SPOTLIGHT
</h2>
        {spotlightActors.map((actor) => (
          <div key={actor.id}>
            {/* spotlight-actor Image */}
            <img src={actor.url} className="w-full h-48 object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpotlightCinema;