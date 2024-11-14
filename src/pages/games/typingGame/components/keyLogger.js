import React, { useEffect, useState } from 'react';

function KeyLogger() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      setLogs((prevLogs) => [...prevLogs, `Key pressed: ${event.key}`]);
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <h1>Press any key!</h1>
      <div
        id="output"
        style={{
          border: '1px solid #000',
          padding: '10px',
          height: '90vh',
          overflowY: 'auto',
        }}
      >
        {logs.map((log, index) => (
          <div key={index}>{log}</div>
        ))}
      </div>
    </div>
  );
}

export default KeyLogger;
