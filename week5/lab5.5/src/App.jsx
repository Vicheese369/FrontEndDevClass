const DeleteBtn = ({ id, onConfirm }) => {
    return (
        <button onClick={() => {
            onConfirm(id);
        }}>
            Delete
        </button>
    );
};

function App(){
    const handleDelete = (id)=>{
        alert(`Botton with id ${id} will be deleted!`);
    }
    return(
        <div>
            <DeleteBtn id={1} onConfirm={handleDelete}/>
            <DeleteBtn id={2} onConfirm={handleDelete}/>
            <DeleteBtn id={3} onConfirm={handleDelete}/>
        </div>
    )
}
export default App;

