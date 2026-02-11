import React, { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, text: "Hello", isEdited: false },
  ]);

  const markAsEdited = (id) => {
    setPosts(
        posts.map((post) =>
            post.id === id ? { ...post, isEdited: !post.isEdited } : post
        )
    );
  };

  return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Posts</h2>

          {posts.map((post) => (
              <div
                  key={post.id}
                  className="p-4 border border-gray-300 rounded-lg mb-4 bg-gray-50"
              >
                <p className="text-gray-700 mb-3">
                  {post.text}{" "}
                  {post.isEdited && (
                      <span className="text-blue-500 font-medium">(Edited)</span>
                  )}
                </p>

                <button
                    onClick={() => markAsEdited(post.id)}
                    className={`px-4 py-2 rounded-lg text-white transition duration-200 ${
                        post.isEdited
                            ? "bg-red-500 hover:bg-red-600"
                            : "bg-blue-500 hover:bg-blue-600"
                    }`}
                >
                  {post.isEdited ? "Unmark as Edited" : "Mark as Edited"}
                </button>
              </div>
          ))}
        </div>
      </div>
  );
}

export default App;
