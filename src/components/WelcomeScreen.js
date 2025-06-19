import React from 'react';
import LevelSelector from './LevelSelector';
import ThemeSelector from './ThemeSelector';

const WelcomeScreen = ({ currentLevel, currentTheme, setCurrentLevel, setCurrentTheme, startGame }) => {
  return (
    <div className="welcome-screen">
      <h1>MemoTrip</h1>
      <div className="welcome-message">Bonjour Paul,<br />prêt pour un nouveau défi ?</div>
      
      <LevelSelector currentLevel={currentLevel} setCurrentLevel={setCurrentLevel} />
      
      <ThemeSelector currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
      
      <button className="btn start-btn" onClick={startGame}>Démarrer le jeu</button>
    </div>
  );
};

export default WelcomeScreen;