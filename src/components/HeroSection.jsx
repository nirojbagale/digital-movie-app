import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [images, setImages] = useState([]); // ✅ Initialize with an empty array
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/hero')  // ✅ Correct API endpoint
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setImages(data); // ✅ Ensure data is an array before setting state
        } else {
          console.error("Unexpected API response:", data);
        }
      })
      .catch(error => console.error("Error fetching images:", error));
  }, []);

  useEffect(() => {
    if (images.length > 0) { // ✅ Prevents error if images is undefined
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [images]);

  return (
    <div className="relative w-full h-96 overflow-hidden bg-gray-900"> {/* Fixed height */}
      {images && images.length > 0 ? (
        <img
          src={images[currentImage]?.url} 
          alt="Hero"
          className="w-full h-full object-contain transition-transform duration-1000 ease-in-out" // Use object-contain for full image visibility
        />
      ) : (
        <p className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold">Loading...</p>
      )}

      {/* Hero Text (Optional) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-4">
        <h1 className="text-4xl font-bold">Welcome to the Digital Video Store</h1>
        <p className="mt-2 text-lg">Explore Movies & TV Shows</p>
      </div>
    </div>
  );
};

export default HeroSection;
