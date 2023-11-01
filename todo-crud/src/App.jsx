import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
import TodoList from './TodoList';
import AddTask from './AddTask';

function App() {
  const[tasks, setTasks] = useState([]);
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState(null);
  const [page, setPage] = useState(1)
  
  const fetchTasks = async() => {
    setLoading(true);


    try {
      const response = await axios.get(`http://localhost:5000/tasks?_limit=3&_page=${page}`);
      setTasks(response.data);

    } catch (error) {
      setError(error); 
    } finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchTasks();
  },[page])

  return (
   <div className="App">
    {error && <div>Error: {error}</div>}
    {loading ? (<div>Loading....</div>): (<TodoList tasks={tasks} fetchTasks={fetchTasks} />)}
    <AddTask  fetchTasks={fetchTasks}/>
    <button disabled={page===1} onClick={()=> setPage(page-1)}>Prev</button>
    <button onClick={()=> setPage(page+1)}>Next</button>
   </div>
  )
}

export default App;
