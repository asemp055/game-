import React, { useEffect } from 'react';
import { playSound } from '../utils';

const ResultsScreen = ({ score, total, retryGame, returnHome }) => {
  useEffect(() => {
    if (score === total) {
      playSound('success');
    }
  }, [score, total]);

  
  return (
    <div className="results-screen">
      <h1>MemoTrip</h1>
      
      <div className="results">
        <div>Bien joué Paul !</div>
        <div>Bien joué Paul !</div>
        <div className="score">Vous avez retrouvé {score} objets sur {total}.</div>
      </div>
      
      <div className="encouragement">Un petit pas chaque jour pour garder l'esprit vif.</div>
      
      <div className="buttons">
        <button 
          className="btn" 
          onClick={() => {
            playSound('click');
            retryGame();
          }}
        >
          Refaire le même niveau
        </button>
        
        <button 
          className="btn" 
          onClick={() => {
            playSound('click');
            returnHome();
          }}
        >
          Revenir à l'accueil
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;