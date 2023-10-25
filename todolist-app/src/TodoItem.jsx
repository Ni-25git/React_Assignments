function TodoItem({data,ontogglestatus}){
    return(
        <tr onClick={()=> ontogglestatus(data.id)}>
            <td>{data.todo}</td>
            <td style={{color: data.status?"green":"red"}}>{data.status?"True":"False"}</td>
        </tr>
    )
}

export default TodoItem;