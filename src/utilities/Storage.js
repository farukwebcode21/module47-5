import React from 'react'
import { useState } from 'react'

const Storage = () => {
    const [count, setCount] = useState(0);
    
    // const handleIncrease =()=>setCount(count+1);

    // const handleDecrease =()=>setCount(count-1);
    const handleIncrease =()=>{
        if(count >= 0){
            setCount(count+1);
        }
    }
    const handleDecrease =() =>{
        if(count > 0){
            setCount(count-1);
        }else{
            setCount(count);
        }

    }
  

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
        </div>
    )
}

export default Storage
