function TodoItem() {
    return <li>A single task</li>;
}

function App() {
    return (
        <div>
            <ul>
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </ul>
        </div>
    );
}

export default App;
