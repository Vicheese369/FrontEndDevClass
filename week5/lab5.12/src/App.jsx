import React from 'react';
import ALL_PNV_TEACHERS from "./teacher.js"
const User = ({ firstName, lastName, title }) => {
  return (
      <div className="bg-yellow-400 text-center py-6 px-6 rounded-lg mb-3">
        <h2 className="text-lg font-bold mb-1">
          {firstName} {lastName}
        </h2>
        <p className="text-xs uppercase tracking-wide">
          {title}
        </p>
      </div>
  );
};

function App() {
  return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <h1 className="text-white text-4xl font-bold text-center mb-8">
            PNV TEAM !!
          </h1>
          <p className="text-gray-400 text-center mb-6">
            Here are some PNV trainers and educators, do you know them?
          </p>
          {ALL_PNV_TEACHERS.map((teacher, index) => (
              <User
                  key={index}
                  firstName={teacher.firstName}
                  lastName={teacher.lastName}
                  title={teacher.title}
              />
          ))}
        </div>
      </div>
  );
}

export default App;