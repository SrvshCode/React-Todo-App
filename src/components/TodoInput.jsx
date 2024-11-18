import { useState } from "react"

export default function TodoInput({handleAddTodo}){
    const[inputValue, setInputValue]=useState('');
    return (
        <div>
            <input value={inputValue} onChange={(e)=>{
                setInputValue(e.target.value)
                }} placeholder="Add todo"/>
            <button onClick={()=>{
                if(!inputValue){return};
                handleAddTodo(inputValue);
                setInputValue('');
            }}><i className="fa-solid fa-plus" aria-hidden="true"></i>
            </button>
        </div>
    )
}