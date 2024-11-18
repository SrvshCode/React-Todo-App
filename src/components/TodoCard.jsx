export default function TodoCard({todo,handleDeleteTodo,todoIndex,handleCompleteTodo}){
    return (
        <div>
            <p>{todo.input}</p>
            <div>
                <button onClick={()=>{
                    console.log('Done button clicked');
                    handleCompleteTodo(todoIndex);
                }} disabled={todo.completed} >
                    <h6>Done</h6>
                </button>
                <button onClick={()=>{
                    handleDeleteTodo(todoIndex)
                }}>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}