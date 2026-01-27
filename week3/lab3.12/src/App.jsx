import { useState } from "react";

function TodoItem({ text, onRemove }) {
    return (
        <li>
            {text} <button onClick={onRemove}>Delete</button>
        </li>
    );
}

function App() {
    const [list, setList] = useState([
        "Eat", "Sleep", "Code", "Read", "Hoop", "Hack", "Movie", "Date"
    ]);

    const deleteTask = (index) => {
        setList(prevList => prevList.filter((_, i) => i !== index));
    };

    return (
        <div>
            <ul>
                {list.map((task, index) => (
                    <TodoItem
                        key={index}
                        text={task}
                        onRemove={() => deleteTask(index)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default App;