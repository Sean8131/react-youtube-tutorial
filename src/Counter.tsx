import {useState} from 'react'
import './App.css'

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(Math.min(10, count + 1));
    const decrement = () => setCount(Math.max(0, count - 1));
    const reset = () => setCount(0);

    return (
        <div className='counter-container'>
            <div className='button-container'>
            <button className='button' onClick={increment}>Increment</button> 
            <button className='button' onClick={decrement}>Decrement</button>
            <button className='button' onClick={reset}>Reset</button>
            </div>
            <p className='counter'>Count: {count}</p>
        </div>
    );
}

export default Counter;