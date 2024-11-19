import {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count +1);
    const decrement = () => setCount(Math.max(0, count - 1));

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button> 
            <button onClick={decrement}>Decrement</button> 
        </div>
    );
}

export default Counter;