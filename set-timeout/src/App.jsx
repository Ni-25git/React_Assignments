import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [count]);
  
  return (
    <div className="App">
      <h1>Timer: {count} seconds</h1>
    
    </div>
  );
}

export default App
