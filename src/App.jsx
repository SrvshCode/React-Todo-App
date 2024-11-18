import { useState,useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Tabs from './components/Tabs'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'


//useEffect hook is used to track events

function App() {
  //const [count, setCount] = useState(0)
  // const todos= [{input:"Hello, add you first todo",completed:true},
  //   {input:"Learn seek web design", completed:false},
  //   {input:"Get the groceries", completed:false},
  //   {input:"Say hi to everyone",completed:true}
  // ]

    const[todos,setTodos]=useState([{input:"Hello, add you first todo",completed:true}]); //this is immutable

    const[selectedTab, setSelectedTab]=useState("All");

    const handleAddTodo =(newTodo)=>{
      const newTodoList = [...todos,{input:newTodo,completed:false}];//we have to create a duplicate and overwrite original
      setTodos(newTodoList);
      handleSaveData(newTodoList);
    };
    const handleDeleteTodo= (index)=>{
      let newTodoList = todos.filter((val,valIndex)=>{
        return valIndex !==index;
      })
      setTodos(newTodoList);
      handleSaveData(newTodoList);
    }

    const handleCompleteTodo= (index)=>{
      //edit,update,modify
      let newTodoList=[...todos];
      let completedTodo = todos[index];
      completedTodo["completed"]=true;
      newTodoList[index]=completedTodo;
      setTodos(newTodoList);
      handleSaveData(newTodoList);
    }
    const handleSaveData=(currTodos)=>{
      localStorage.setItem("todo-app",JSON.stringify({todos:currTodos}))
    }

    useEffect(()=>{
      if(!localStorage || !localStorage.getItem("todo-app"))return;
      let db=JSON.parse(localStorage.getItem("todo-app"));
      setTodos(db.todos);
    },[])
  return (
    <>
      <Header todos={todos} />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
      <TodoList handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo} selectedTab={selectedTab} todos={todos}/>
      <TodoInput handleAddTodo={handleAddTodo}/>
    </>
  )
}

export default App
