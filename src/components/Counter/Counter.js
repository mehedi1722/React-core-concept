import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
      <div className='CounterSection'>
        <h3>Counter: {count}</h3>
        <button className="decrease" onClick={ () => setCount(count - 1) }>Decrease</button>
        <button className="increase" onClick={ () => setCount(count + 1) }>Increase</button>
      </div>
    )
}

export default Counter