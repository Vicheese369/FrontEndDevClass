function TodoItem (){ return <li>Task</li>;}

function TodoList (){
    return(
        <div>
            <ul>
                <TodoItem/>
                <TodoItem/>
            </ul>
        </div>
    );
}
function App() {
    return (
        <div>
            <h1>My App</h1>
            <TodoList/>
        </div>
    );
}

export default App;
