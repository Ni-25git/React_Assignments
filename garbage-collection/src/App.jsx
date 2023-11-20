
import React, { useState, useEffect } from 'react';
import './App.css'

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);


    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div>
      <h2>Timer: {count} seconds</h2>
    </div>
  );
};

const App = () => {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div>
      <label>
        <input type="checkbox" checked={showTimer} onChange={() => setShowTimer(!showTimer)} />
        Show Timer
      </label>

      {showTimer && <Timer />}
    </div>
  );
};

export default App;

