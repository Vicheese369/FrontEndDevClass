import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    return(
        <div className='App'>
            <h1>My Task List</h1>
            <input type="text" placeholder="Enter a task..."/>
            <button>Add Task</button>
        </div>
    )
}

export default App
