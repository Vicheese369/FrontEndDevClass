function App() {
    const tasks = ["Learn JSX", "Create Components", "Master State"];

    return (
        <div className="App">
            <h1>My Task List</h1>
            Total Tasks {tasks.length}
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
