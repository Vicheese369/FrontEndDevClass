import { useState } from "react"
function App() {
    const [list, setList] = useState([
        {id: 1},
        {id: 2},
        {id: 3}
    ]);

    const removeItem = (id) => {
        setList(list.filter((content, index) => (
            content.id !== id
        )));
    };
    return(
        <div>
            <h2>List of items:</h2>
            {list.map((content,index)=>(
                <div key={content.id}>
                    <p>Item 's ID : {content.id}</p>
                    <button onClick={()=>removeItem(content.id)}
                    >Delete</button>
                </div>
            ))}
        </div>
    );
}

export default App;

























// import React, { useState } from 'react';
//
// function App() {
//     const [list, setList] = useState([
//         { id: 1 },
//         { id: 2 },
//         { id: 3 }
//     ]);
//
//     const removeItem = (id) => {
//
//         setList(list.filter(item => item.id !== id));
//     };
//
//     return (
//         <div>
//             <h2>Item List</h2>
//             {list.map(item => (
//                 <div key={item.id} style={{ padding: '10px', border: '1px solid #ccc', margin: '10px 0' }}>
//                     <p>Item ID: {item.id}</p>
//                     <button onClick={() => removeItem(item.id)}>Delete</button>
//                 </div>
//             ))}
//             {list.length === 0 && <p>No items left!</p>}
//         </div>
//     );
// }
//
// export default App;