const taskData = {
    todo:"Hack Thailand",
    priority:"Highest"
};
const TaskItem = ({ info }) => {
    return (
        <li>
            {info.todo} :  {info.priority}
        </li>
    );
};
const TaskContainer = () => {
    return (
        <fieldset>
            <legend>My List</legend>
            <TaskItem info={taskData} />
            <TaskItem info={taskData} />
            <TaskItem info={taskData} />
        </fieldset>
    );
};

function App() {
    return <TaskContainer />;
}

export default App;
