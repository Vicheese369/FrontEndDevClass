import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            React + Tailwind + Node.js Starter
          </h1>
          <div className="text-center space-y-4">
            <p className="text-lg text-gray-600">
              Welcome to your new React project with Tailwind CSS!
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
                Get Started
              </button>
              <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">React</h3>
              <p className="text-blue-600">Modern React with hooks and components</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Tailwind CSS</h3>
              <p className="text-green-600">Utility-first CSS framework</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">Node.js</h3>
              <p className="text-purple-600">JavaScript runtime environment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;