import axios from "axios";
export default function TodoList({tasks,fetchTasks}){

    const deleteTask = async(id)=>{
        try {
            await axios.delete(`http://localhost:5000/tasks/${id}`)
            fetchTasks();
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <div>
            {tasks.map((task)=>(
                <div key={task.id}>
                    <span>{task.title}</span>
                    <button onClick={()=> deleteTask(task.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}