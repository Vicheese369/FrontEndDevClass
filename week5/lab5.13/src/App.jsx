import React from 'react';
import ALL_PLACES from "./data.js"
const Place = ({ id, title, image, alt }) => {
  return (
      <li className="relative group cursor-pointer">
        <button className="w-full">
          <img
              src={`${image}`}
              alt={alt}
              className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white text-sm p-3 rounded-b-lg">
            {title}
          </h3>
        </button>
      </li>
  );
};

function App() {
  return (
      <div className="min-h-screen bg-gray-900 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-white text-5xl font-bold text-center mb-4">
            PLACEPICKER
          </h1>
          <p className="text-gray-400 text-center mb-12">
            Where would you like to go?
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {ALL_PLACES.map((place) => (
                <Place
                    key={place.id}
                    id={place.id}
                    title={place.title}
                    image={place.image}
                    alt={place.alt}
                />
            ))}
          </ul>
        </div>
      </div>
  );
}

export default App;