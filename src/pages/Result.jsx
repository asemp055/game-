import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Result.css';

function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const score = state?.score || 0;
  const total = state?.total || 0;

  const percentage = score / total;
  let stars = '⭐';
  if (percentage >= 0.9) stars = '⭐⭐⭐';
  else if (percentage >= 0.6) stars = '⭐⭐';
  
  const handleReplay = () => navigate('/game', { state });
  const handleHome = () => navigate('/');
  const handleChangeTheme = () => navigate('/');

  return (
    <div className="result-wrapper">
      <div className="result-container">
        <h2>Bravo Aïcha 🎉</h2>
        <p>Tu es prête pour ton voyage !</p>
        <h3>{stars}</h3>
        <p>Tu as retrouvé <strong>{score}</strong> objets sur <strong>{total}</strong>.</p>

        <div className="result-buttons">
          <button onClick={handleReplay}>🔁 Rejouer</button>
          <button onClick={handleChangeTheme}>🎨 Changer de thème</button>
          <button onClick={handleHome}>❌ Quitter</button>
        </div>
      </div>
    </div>
  );
}

export default Result;
