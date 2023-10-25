import TodoItem from "./TodoItem";
function TodoList({tasks,ontogglestatus}){
    return(
        <table>
            <thead>
                <tr>
                    <th>Task Name</th>
                    <th>Status</th>
                </tr>
            </thead>

            <tbody>
                {
                    tasks.map((task)=>(
                        <TodoItem key={task.id} data={task} ontogglestatus={ontogglestatus}/>
                    ))
                }
            </tbody>
        </table>
    )
}

export default TodoList;