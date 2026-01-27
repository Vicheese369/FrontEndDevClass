function TodoItem() {
    return <li>A single task</li>;
}

function App() {
    return (
        <div>
            <ul>
                <TodoItem />
            </ul>
        </div>
    );
}

export default App;
