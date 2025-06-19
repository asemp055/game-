import React, { useState, useEffect } from 'react';
import MemoryObject from './MemoryObject';

const MemorizationScreen = ({ objects, timeLimit, showSelectionScreen }) => {
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsReady(true);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="memorization-screen">
      <h1>MemoTrip</h1>
      <div className="welcome-message">Mémorisez les objets suivants :</div>
      
      <div className="timer">{timeLeft}</div>
      
      <div className="memory-objects">
        {objects.map((obj, index) => (
          <MemoryObject key={index} content={obj} />
        ))}
      </div>
      
      {isReady && (
        <button className="btn ready-btn" onClick={showSelectionScreen}>Je suis prêt</button>
      )}
    </div>
  );
};

export default MemorizationScreen;