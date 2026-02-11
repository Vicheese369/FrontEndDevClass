import React, { useState } from 'react';
function App() {
    const [posts, setPosts] = useState([]);
    const [newContent, setNewContent] = useState("");
    const handleAdd = () => {
        if(!newContent) return  alert("Input something");
        setPosts([...posts, newContent]);
        setNewContent("");
    };
    return(
        <div>
            <h2>Create new post</h2>
            <input
                type='text'
                value={newContent}
                onChange={(e)=>setNewContent(e.target.value)}
                placeholder='Input new content'
            />
            <button
                onClick={handleAdd}
            >
                Add Content
            </button>
            <h3>Posts:</h3>
            <ul>
                {posts.map((content,index)=>(
                    <li key={index}>{content}</li>
                ))}
            </ul>

        </div>
    );
}
export default App;