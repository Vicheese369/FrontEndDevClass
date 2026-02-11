import React from 'react';
import PEOPLE_DATA from "./data.js"

const Card = ({ name, classInfo, hobbies, image }) => {
  return (
      <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
          <img
              src={`${image}`}
              alt={name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/150';
              }}
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-1">{name}</h2>
        <p className="text-gray-600 font-medium mb-2">{classInfo}</p>
        <p className="text-gray-500 text-sm italic">{hobbies}</p>
      </div>
  );
};

function App() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-800 text-center mb-4">
            Meet Our Team
          </h1>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Get to know the amazing people we work with!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PEOPLE_DATA.map((person) => (
                <Card
                    key={person.id}
                    name={person.name}
                    classInfo={person.class}
                    hobbies={person.hobbies}
                    image={person.image}
                />
            ))}
          </div>
        </div>
      </div>
  );
}

export default App;