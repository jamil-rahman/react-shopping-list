import React, {useState, useEffect} from 'react'

export default function Counter() {
    const [count,setCount] = useState();
    const [color, setColorIncrease] = useState(null);
   
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(currentCount => currentCount +1)}>+</button>
            <button onClick={()=>setCount(currentCount => currentCount -1)}> -</button>
        </div>
    )
}
