import React, { useState } from 'react';
function App() {
    const [search, setSearch] = useState("");
    const items = ["React", "JavaScript", "Tailwind"];
    const filteredItems = items.filter(items=>
        items.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <div>
            <h2>Search Items</h2>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
            />
            <h3>After filtered : </h3>
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;