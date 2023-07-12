import React from "react";
import useCounter from "../../hooks/useCounter";
import "./Counter.css";
export default function Counter() {
  const [count, addCount, minusCount] = useCounter(0);
  return (
    <div className="d-felx flex-column counter-body">
      <h3 className='text-primary text-center py-4'>I have created a custom hook named "useCounter" which counts the number. </h3>
      <div className="counter-show">
        <p className="text-danger">{count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={minusCount}>Minus</button>
      </div>
    </div>
  );
}
