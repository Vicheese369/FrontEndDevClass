import { useState } from 'react'
const StatusBadge = ({ active, onToggle }) => {
    return (
        <button onClick={onToggle}>
            {active ? "Done" : "Pending"}
        </button>
    );
};
function App() {
    const [isDone, setIsDone] = useState(false);
    const handleToggle = () => {
        setIsDone(!isDone);
    };
    return (
        <div>
            <h1>Task Status</h1>
            <StatusBadge active={isDone} onToggle={handleToggle} />
            <p>Status: {isDone ? "Done" : "Pending"}</p>
        </div>
    );
}
export default App;

