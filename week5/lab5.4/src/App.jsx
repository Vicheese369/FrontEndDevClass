import React from "react"
const PostActions = ({ onLike, onShare }) => {
  return (
      <div className="flex gap-4 mt-4">
        <button
            onClick={onLike}
            className="bg-blue-500 text-white px-6 py-2 rounded"
        >
          Like
        </button>
        <button
            onClick={onShare}
            className="bg-green-500 text-white px-6 py-2 rounded"
        >
          Share
        </button>
      </div>
  );
};

function App() {
    const handleLike = () => {
        alert("Liked :)")
    }
    const handleShare = () => {
        alert("Shared :(")
    }
    return (
        <div>
            <PostActions onLike={handleLike} onShare={handleShare}/>
        </div>
    )
}
export default App;
