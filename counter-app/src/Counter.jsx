import { useState } from 'react'
import './App.css'


const Counter = (prop) => {
    const { initialValue } = prop;
    const[count, setCount] = useState(initialValue)
    
    const incrementCount = () => {
        setCount(count + 1);
    };

    const deccrementCount = () => {
        setCount(count - 1);
    };

    const doubleCount = () => {
        setCount(count * 2);
    }

    return( 
    <>
    <h2 data-testid="counter-header">Counter</h2>
    <h3 data-testid="count">{count}</h3>
    <button onClick={incrementCount} data-testid="add-btn">+</button>
    <button onClick={deccrementCount} data-testid="subtract-btn">-</button>
    <button onClick={doubleCount} data-testid="double-btn">Double</button>
    </>
    )
}

export default Counter;