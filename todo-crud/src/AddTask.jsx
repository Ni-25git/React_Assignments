import { useState } from "react";
import axios from "axios";

export default function AddTask({fetchTasks}){
    const[task, setTask]= useState("");

    const addTask = async()=>{
        try {
            await axios.post('http://localhost:5000/tasks',{
                title: task,
                completed: false,
            })
            fetchTasks();
            setTask();
        } catch (error) {
            console.error(error)
            
        }
    }

    return(
        <div>
            <input type="text"  value={task} onChange={(e)=> setTask(e.target.value)} />
            <button onClick={addTask}>Add</button>
        </div>

    )
}