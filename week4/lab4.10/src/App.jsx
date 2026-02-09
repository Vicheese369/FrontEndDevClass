import { useState } from 'react';
function App() {
    const [search, setSearch] = useState("");
    const items = ["Apple", "Banana", "Cherry"];
    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div>
            <h1>Search Items</h1>
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {filteredItems.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
