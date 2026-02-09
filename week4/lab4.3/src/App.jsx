import { useState} from "react"
function App(){
    const [title , setTitle] = useState("");
    const [desc , setDesc] = useState("");
    return(
        <form>
            <input
                type='text'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
            <input
                type='text'
                value={desc}
                onChange={(e)=>setDesc(e.target.value)}
                placeholder='Description'
            />
            <p>Preview: {title} - {desc}</p>
        </form>
    );
}
export default App;