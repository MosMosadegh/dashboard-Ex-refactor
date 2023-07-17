import React from "react";
import useCounter from "../../hooks/useCounter";
import "./Counter.css";
export default function Counter() {
  const [count, addCount, minusCount] = useCounter(0);
  return (
    <div className="d-felx flex-column counter-body">
      <p className='text-primary text-center py-4 fs-2'>I have created a custom hook named "useCounter" which counts the number. </p>
      <div className="counter-show">
        <p className="text-danger text-center">{count}</p>
       
        <button className="m-3 p-2" onClick={addCount}>Add</button>
        <button className="m-3 p-2" onClick={minusCount}>Minus</button>
        
      </div>
    </div>
  );
}
