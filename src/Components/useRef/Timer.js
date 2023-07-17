import React, { useState, useRef, useEffect } from 'react';
import './Timer.css'

function Timer() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  };

  /// وقتی میخای خودش اجرا بشه
  // useEffect(() => {
  //   intervalRef.current = setInterval(() => {
  //     setTime(prevTime => prevTime + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(intervalRef.current);
  //   };
  // }, []);

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTime(0);
  };

  return (
    <div className='d-felx flex-column timer-container m-4'>
      <p className='text-warning text-center p-4 fs-2'>Create a timer with useRef Hook </p>
      <div className='timer-item'>
      <h2>Timer: {time}s</h2>
      <button className='btn btn-success ' onClick={startTimer}>Start</button>
      <button className='btn btn-danger m-2' onClick={stopTimer}>Stop</button>
      <button className='btn btn-warning ' onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
