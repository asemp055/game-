// src/pages/Result.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Result.css';

function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const score = state?.score || 0;
  const total = state?.total || 0;

  const getMessage = () => {
    const ratio = score / total;
    if (ratio === 1) return "Excellent travail, tu n’as rien oublié !";
    if (ratio >= 0.5) return "Pas mal ! Tu es presque prêt·e pour le voyage.";
    return "Continue à t’entraîner, tu y arriveras !";
  };

  const handleReplay = () => {
    navigate('/');
  };

  return (
    <div
      style={{
        backgroundImage: "url('/background-pattern.png')",
        backgroundRepeat: 'repeat',
        backgroundSize: '200px',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 0',
      }}
    >
      <div className="result-container">
        <h2>Résultat du jeu 🎉</h2>
        <p>Tu as retrouvé <strong>{score}</strong> objets sur <strong>{total}</strong>.</p>
        <p>{getMessage()}</p>
        <button onClick={handleReplay}>Retour à l’accueil</button>
      </div>
    </div>
  );
}

export default Result;
