import { useState } from "react"
function App(){
    const [ list, setList ] = useState([]);
    const [ text, setText ] = useState("")
    const handleAdd = ()=>{
        if(!text.trim()) return;
        setList([...list,text]);
        setText("");
    }
    return(
        <div>
            <input
                type='text'
                value={text}
                onChange={(e)=>setText(e.target.value)}
            />
            <button onClick={handleAdd}>Add Item</button>
            <ul>
                { list.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
export default App;
