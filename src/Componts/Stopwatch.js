import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [ms, setMs] = useState(0);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  function startTimer() {
    clearInterval(intervalId);
    const id = setInterval(() => {
      setMs((prevMs) => prevMs + 1);
    }, 10);
    setIntervalId(id);
  }

  function stopTimer() {
    clearInterval(intervalId);
  }

  function resetTimer() {
    clearInterval(intervalId);
    setMs(0);
    setSec(0);
    setMin(0);
    setHour(0);
  }

  function formatTime(time) {
    return time < 10 ? `0${time}` : `${time}`;
  }

  return (
    <div>
      <div className="stopwatch">
        <span>{formatTime(hour)}</span> : <span>{formatTime(min)}</span> :{" "}
        <span>{formatTime(sec)}</span> : <span>{formatTime(ms)}</span>
      </div>
      <div className="buttons">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
