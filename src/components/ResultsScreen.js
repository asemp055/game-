import React, { useEffect } from 'react';
import { playSound } from '../utils';

const ResultsScreen = ({ score, total, retryGame, returnHome }) => {
  const successRate = (score / total) * 100;
  
  return (
    <div className="results-screen">
      <h1>MemoTrip</h1>
      
      {/* Barre de progression */}
      <div className="progress-container">
        <div 
          className="progress-bar"
          style={{ width: `${successRate}%` }}
        ></div>
      </div>
      <div className="progress-text">{score}/{total} objets trouvés</div>

      {/* Messages conditionnels */}
      {successRate === 0 ? (
        <div className="result-message error">
          Essayez encore ! Vous pouvez y arriver !
        </div>
      ) : successRate === 100 ? (
        <div className="result-message success">
          Parfait ! Vous avez une excellente mémoire !
        </div>
      ) : (
        <div className="result-message partial">
          Bien joué Paul ! Vous avez trouvé {score} objet{score > 1 ? 's' : ''} !
        </div>
      )}

      <div className="buttons">
        <button className="btn" onClick={retryGame}>
          Réessayer
        </button>
        <button className="btn" onClick={returnHome}>
          Accueil
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;