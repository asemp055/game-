import React, { useState, useEffect } from 'react';
import MemoryObject from './MemoryObject';

const MemorizationScreen = ({ objects, timeLimit, showSelectionScreen }) => {
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          showSelectionScreen(); // Passage automatique quand le timer finit
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showSelectionScreen]);

  return (
    <div className="memorization-screen">
      <h1>MemoTrip</h1>
      <div className="instruction">Mémorisez les objets suivants :</div>
      
      {/* Barre de timer visuelle */}
      <div className="timer-container">
        <div className="timer-bar">
          <div 
            className="timer-progress"
            style={{ width: `${(timeLeft/timeLimit)*100}%` }}
          ></div>
        </div>
        <div className="timer-text">{timeLeft}s</div>
      </div>
      
      <div className="memory-objects">
        {objects.map((obj, index) => (
          <MemoryObject key={index} content={obj} />
        ))}
      </div>
      
      {/* Bouton toujours visible avec temps restant */}
      <button 
        className="btn ready-btn"
        onClick={showSelectionScreen}
      >
        Je suis prêt ({timeLeft}s)
      </button>
    </div>
  );
};

export default MemorizationScreen;