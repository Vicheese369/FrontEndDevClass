import React from "react"
const PostImage  = ({url})=>{
    if(!url){
        return <div className='bg-gray-400 h-52 w-full'></div>
    }
    return (
        <img
            src = {url}
        />
    );
}
function App(){
    return(
        <div>
            <h3>Without image</h3>
            <PostImage url = {null}/>
            <h3>With image</h3>
            <PostImage url = "https://i.pinimg.com/736x/fa/9f/8a/fa9f8a97bbecb3d06b318d299646a205.jpg"/>
        </div>
    );
}

export default App;

