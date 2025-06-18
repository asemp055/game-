// src/pages/Result.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Result.css';

function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const score = state?.score || 0;
  const total = state?.total || 0;

  const handleReplay = () => {
    navigate('/');
  };

  return (
    <div className="result-container">
      <h2>Résultat du jeu 🎉</h2>
      <p>Tu as retrouvé <strong>{score}</strong> objets sur <strong>{total}</strong>.</p>

      <p>
        {score === total
          ? "Excellent travail, tu n’as rien oublié !"
          : score >= total / 2
          ? "Pas mal ! Tu es presque prêt·e pour le voyage."
          : "Continue à t'entraîner, tu y arriveras !"}
      </p>

      <button onClick={handleReplay}>Retour à l’accueil</button>
    </div>
  );
}

export default Result;
