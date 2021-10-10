import React from 'react'
import {useState} from 'react'

const State2 = () => {
    const [count, setCount] = useState(0)
    const handleIncrement =()=>setCount(count + 1);
    const handleDecrement =()=>setCount(count - 1);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>P+</button>
            <button onClick={handleDecrement} disabled ={count=== 0 ? true : false}>M-</button>
        </div>
    )
}

export default State2
