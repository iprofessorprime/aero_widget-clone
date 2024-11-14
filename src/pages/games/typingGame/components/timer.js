import React, { useEffect } from 'react';

const Timer = ({ timeLeft, setTimeLeft, isGameActive }) => {
  useEffect(() => {
    if (timeLeft > 0 && isGameActive) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      // Clear the interval when the component unmounts or timeLeft changes
      return () => clearInterval(timer);
    }
  }, [timeLeft, isGameActive, setTimeLeft]);

  return <p>Time Left: {timeLeft} seconds</p>;
};

export default Timer;
