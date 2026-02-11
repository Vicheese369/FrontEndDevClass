import React from 'react';
const userData = {
  firstName: "Ronan",
  lastName: "Ogor",
  title: "PN React is Killer"
};

const User = () => {
  return (
      <div className="bg-yellow-400 text-center py-8 px-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">
          {userData.firstName} {userData.lastName}
        </h2>
        <p className="text-sm uppercase tracking-wide">
          {userData.title}
        </p>
      </div>
  );
};

function App() {
  return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <h1 className="text-white text-4xl font-bold text-center mb-8">
            WELCOME !!
          </h1>
          <p className="text-gray-400 text-center mb-6">
            PNV students are you ready to React Course ? You got this 💪
          </p>
          <User />
        </div>
      </div>
  );
}

export default App;