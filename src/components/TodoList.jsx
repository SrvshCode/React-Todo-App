import TodoCard from "./TodoCard";

export default function TodoList({todos,selectedTab,handleDeleteTodo,handleCompleteTodo}){

    // const tab="All";
    const filterTodosList = selectedTab ==="All"? todos:
                            selectedTab ==="Completed"? todos.filter(val =>val.completed):
                            todos.filter(val =>!val.completed);
    return (
        <>
        {
            filterTodosList.map((todo,todoIndex)=>{
                return (
                    <TodoCard key={todoIndex}
                    handleDeleteTodo={handleDeleteTodo}
                    handleCompleteTodo= {handleCompleteTodo}
                    todoIndex={todos.findIndex(val=>val.input ===todo.input)}
                    todo={todo}/>
                )
            })
        }
        </>
    )
}