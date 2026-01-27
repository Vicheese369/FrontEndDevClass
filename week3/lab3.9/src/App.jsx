import { useState } from "react";

function App() {
    const [list, setList] = useState(["Eat", "Sleep", "Code"]);

    return (
        <ul>
            {list.map((element, index) => (
                <li key={index}>{element}</li>
            ))}
        </ul>
    );
}
export default App;
