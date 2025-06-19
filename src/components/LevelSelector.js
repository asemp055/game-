import React from 'react';

const LevelSelector = ({ currentLevel, setCurrentLevel }) => {
  return (
    <div className="level-selector">
      <button 
        className={`btn ${currentLevel === 'beginner' ? 'selected' : ''}`}
        onClick={() => setCurrentLevel('beginner')}
      >
        Débutant
      </button>
      <button 
        className={`btn ${currentLevel === 'intermediate' ? 'selected' : ''}`}
        onClick={() => setCurrentLevel('intermediate')}
      >
        Moyen
      </button>
      <button 
        className={`btn ${currentLevel === 'advanced' ? 'selected' : ''}`}
        onClick={() => setCurrentLevel('advanced')}
      >
        Difficile
      </button>
    </div>
  );
};

export default LevelSelector;