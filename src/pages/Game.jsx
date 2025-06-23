import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Game.css';

const allObjects = {
  Plage: [
    { name: 'Lunettes', icon: '🕶️' },
    { name: 'Serviette', icon: '🟣' },
    { name: 'Crème solaire', icon: '🧴' },
    { name: 'Chapeau', icon: '👒' },
    { name: 'Tongs', icon: '🩴' },
  ],
  Montagne: [
    { name: 'Sac à dos', icon: '🎒' },
    { name: 'Gourde', icon: '💧' },
    { name: 'Carte', icon: '🗺️' },
    { name: 'Bottes', icon: '🥾' },
    { name: 'Pull', icon: '🧥' },
  ],
  Ville: [
    { name: 'Clé', icon: '🔑' },
    { name: 'Téléphone', icon: '📱' },
    { name: 'Portefeuille', icon: '👛' },
    { name: 'Ticket de métro', icon: '🎫' },
    { name: 'Guide', icon: '📘' },
  ],
};

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function Game() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { level = 'Débutant', theme = 'Plage' } = state || {};

  const [itemsToMemorize, setItemsToMemorize] = useState([]);
  const [showItems, setShowItems] = useState(true);
  const [choices, setChoices] = useState([]);
  const [selected, setSelected] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [feedback, setFeedback] = useState({});

  useEffect(() => {
    let count = 4;
    if (level === 'Intermédiaire') count = 6;
    if (level === 'Avancé') count = 8;

    const themeItems = allObjects[theme];
    const shuffled = shuffle(themeItems);
    const selectedItems = shuffled.slice(0, count);
    setItemsToMemorize(selectedItems);

    const others = Object.values(allObjects)
      .flat()
      .filter((item) => !selectedItems.includes(item));
    const mixed = shuffle([...selectedItems, ...shuffle(others).slice(0, 4)]);
    setChoices(shuffle(mixed));

    let timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowItems(false);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [theme, level]);

  const handleSelect = (item) => {
    if (selected.includes(item)) return;

    const isCorrect = itemsToMemorize.some((obj) => obj.name === item.name);
    if (isCorrect) setScore(score + 1);
    setSelected([...selected, item]);
    setFeedback({ ...feedback, [item.name]: isCorrect });
  };

  const handleFinish = () => {
    navigate('/result', { state: { score, total: itemsToMemorize.length } });
  };

  return (
    <div className="game-wrapper">
      <div className="container">
        {showItems && (
          <div className="game-header">
            <div className="timer">⏱️ {timeLeft}s</div>
          </div>
        )}
        <h2>MemoTrip – Niveau {level}</h2>
        <p>Thème : {theme}</p>

        {showItems ? (
          <>
            <p className="instruction">🧠 Mémorise les objets suivants pour ton voyage !</p>
            <div className="grid">
              {itemsToMemorize.map((item) => (
                <div key={item.name} className="card highlight">
                  <span style={{ fontSize: '2rem' }}>{item.icon}</span><br />
                  <small>{item.name}</small>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <p>Quels objets as-tu vu ?</p>
            <div className="grid">
              {choices.map((item) => (
                <button
                  key={item.name}
                  className={`card ${selected.includes(item)
                    ? feedback[item.name]
                      ? 'correct'
                      : 'wrong'
                    : ''}`}
                  onClick={() => handleSelect(item)}
                >
                  <span style={{ fontSize: '2rem' }}>{item.icon}</span><br />
                  <small>{item.name}</small>
                </button>
              ))}
            </div>
            <button className="submit" onClick={handleFinish}>Valider mes choix</button>
            <div className="score">Score : {score} / {itemsToMemorize.length}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Game;
