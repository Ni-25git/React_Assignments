import React, { useState, useEffect } from 'react';
import './index.css'

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000); 


    return () => {
      clearInterval(timerInterval);
    };
  }, []); 

  return (
    <div style={{marginLeft: "650px"}}>
      <h2>Timer</h2>
      <p>Seconds Elapsed: {seconds}</p>
    </div>
  );
};

export default Timer;
