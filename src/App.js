<<<<<<< HEAD
import React, { useState } from 'react';
import './styles/App.css';
import WelcomeScreen from './components/WelcomeScreen';
import MemorizationScreen from './components/MemorizationScreen';
import SelectionScreen from './components/SelectionScreen';
import ResultsScreen from './components/ResultsScreen';
import { generateRandomObjects, themes, levels } from './utils';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [currentLevel, setCurrentLevel] = useState('beginner');
  const [currentTheme, setCurrentTheme] = useState('travel');
  const [objectsToMemorize, setObjectsToMemorize] = useState([]);
  const [selectedObjects, setSelectedObjects] = useState([]);
  const [score, setScore] = useState(0);

  const startGame = () => {
    const objects = generateRandomObjects(currentLevel, currentTheme);
    setObjectsToMemorize(objects);
    setSelectedObjects([]);
    setCurrentScreen('memorization');
  };

  const showSelectionScreen = () => {
    setCurrentScreen('selection');
  };

  const showResults = (selected) => {
    let correct = 0;
    selected.forEach(obj => {
      if (objectsToMemorize.includes(obj)) correct++;
    });
    setScore(correct);
    setCurrentScreen('results');
  };

  const returnHome = () => {
    setCurrentScreen('welcome');
  };

  return (
    <div className="app-container">
      {currentScreen === 'welcome' && (
        <WelcomeScreen
          currentLevel={currentLevel}
          currentTheme={currentTheme}
          setCurrentLevel={setCurrentLevel}
          setCurrentTheme={setCurrentTheme}
          startGame={startGame}
        />
      )}

      {currentScreen === 'memorization' && (
        <MemorizationScreen
          objects={objectsToMemorize}
          timeLimit={levels[currentLevel].time}
          showSelectionScreen={showSelectionScreen}
        />
      )}

      {currentScreen === 'selection' && (
        <SelectionScreen
          theme={currentTheme}
          objectsToMemorize={objectsToMemorize}
          showResults={showResults}
        />
      )}

      {currentScreen === 'results' && (
        <ResultsScreen
          score={score}
          total={objectsToMemorize.length}
          retryGame={startGame}
          returnHome={returnHome}
        />
      )}
    </div>
=======
// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Result from './pages/Result';
import SplashScreen from './components/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Router>
      )}
    </>
>>>>>>> 123eed65893de8febeec14bf0c56a24777659f56
  );
}

export default App;