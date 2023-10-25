import { useState } from 'react'
import './App.css'
import TodoList from './TodoList';

function Todo() {

  const[inputValue, setInputValue] = useState("");
  const[todoList, setTodoList] = useState([]);

  function addValue(e){
    setInputValue(e.target.value)
  }

  function addTodo(){
    let obj={
      id: new Date().getTime(),
      todo: inputValue,
      status: Math.random() <0.5
    }
    let newList= [...todoList,obj]
    setTodoList(newList)
  }

  function toggleStatus(id){
    const updateStatus = todoList.map((task)=>{
      if(task.id === id){
        return{...task,status: !task.status}
      }
      return task
    })
    setTodoList(updateStatus);
  }

  return (
    <>
      <div>
        <input type="text" onChange={addValue} />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div>
        <TodoList tasks={todoList} ontogglestatus={toggleStatus}/>
      </div>
    </>
  )
}

export default Todo
