import React, { useState, useEffect } from 'react';  
import MemoryObject from './MemoryObject';
import { themes, playSound } from '../utils';

const SelectionScreen = ({ theme, objectsToMemorize, showResults }) => {
  const [selectedObjects, setSelectedObjects] = useState([]);
  const [allObjects, setAllObjects] = useState([]);

  useEffect(() => {
    // Générer tous les objets du thème + quelques objets supplémentaires
    const themeObjects = [...themes[theme]];
    
    // Ajouter quelques objets aléatoires si nécessaire
    while (themeObjects.length < 10) {
      const randomThemes = Object.values(themes).flat();
      themeObjects.push(randomThemes[Math.floor(Math.random() * randomThemes.length)]);
    }
    
    // Mélanger les objets
    themeObjects.sort(() => Math.random() - 0.5);
    setAllObjects(themeObjects);
  }, [theme]);

  const toggleSelection = (obj) => {
    if (selectedObjects.includes(obj)) {
        setSelectedObjects(selectedObjects.filter(item => item !== obj));
        playSound('click');
     } else {
        setSelectedObjects([...selectedObjects, obj]);
        playSound(objectsToMemorize.includes(obj) ? 'correct' : 'wrong');
     }
   };

  return (
    <div className="selection-screen">
      <h1>MemoTrip</h1>
      <div className="welcome-message">Sélectionnez les objets que vous avez mémorisés :</div>
      
      <div className="selection-phase">
        <div className="selection-objects">
          {allObjects.map((obj, index) => (
            <MemoryObject 
              key={index} 
              content={obj} 
              selected={selectedObjects.includes(obj)}
              onClick={() => toggleSelection(obj)}
            />
          ))}
        </div>
        
        <button 
          className="btn confirm-btn" 
          onClick={() => showResults(selectedObjects)}
        >
          Confirmer
        </button>
      </div>
    </div>
  );
};

export default SelectionScreen;