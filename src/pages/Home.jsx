import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';



function Home() {
  const [level, setLevel] = useState('Débutant');
  const [theme, setTheme] = useState('Plage');
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/game', { state: { level, theme } });
  };

  return (
    <div className="home-container">
      <h1>MemoTrip</h1>
      <h2>Choisis ton défi, Aïcha !</h2>

      <label>Niveau :</label>
      <select value={level} onChange={(e) => setLevel(e.target.value)}>
        <option value="Débutant">Débutant</option>
        <option value="Intermédiaire">Intermédiaire</option>
        <option value="Avancé">Avancé</option>
      </select>

      <label>Thème :</label>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="Plage">Plage</option>
        <option value="Montagne">Montagne</option>
        <option value="Ville">Ville</option>
      </select>

      <button onClick={handleStart}>Commencer</button>
    </div>
  );
}

export default Home;
