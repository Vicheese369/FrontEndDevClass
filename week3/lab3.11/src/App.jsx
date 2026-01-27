import { useState } from "react";

function App() {
    const [list, setList] = useState([
        "Eat", "Sleep", "Code", "Read", "Hoop", "Hack", "Movie", "Date"
    ]);
    const [deleteIndex, setDeleteIndex] = useState("");

    const deleteTask = () => {
        if (deleteIndex === "") return;

        setList(prevList =>
            prevList.filter((_, index) => index !== deleteIndex)
        );

        setDeleteIndex("");
    };

    return (
        <div>
            <input
                type="number"
                value={deleteIndex}
                placeholder="Enter task index"
                onChange={(e) => setDeleteIndex(Number(e.target.value))}
            />
            <button onClick={deleteTask}>
                Delete Task
            </button>
            <ul>
                {list.map((task, index) => (
                    <li key={index}>
                        {index}: {task}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
