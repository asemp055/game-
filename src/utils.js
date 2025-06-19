export const themes = {
  travel: ['✈️', '🧳', '🌍', '🏨', '🗺️', '🚕', '🏖️', '⛰️'],
  kitchen: ['🍳', '🍲', '🥄', '🔪', '🥘', '🧂', '🍞', '🥗'],
  colors: ['🔴', '🔵', '🟢', '🟡', '🟠', '🟣', '⚫', '⚪']
};

export const levels = {
  beginner: { count: 4, time: 15 },
  intermediate: { count: 6, time: 20 },
  advanced: { count: 8, time: 25 }
};

export const generateRandomObjects = (level, theme) => {
  const count = levels[level].count;
  const themeObjects = [...themes[theme]];
  const selected = [];
  
  // Mélanger le tableau
  themeObjects.sort(() => Math.random() - 0.5);
  
  // Sélectionner les premiers éléments
  for (let i = 0; i < count; i++) {
    selected.push(themeObjects[i]);
  }
  
  return selected;
};
export const playSound = (type) => {
  const sounds = {
    click: new Audio('/sounds/Click.mp3'),
    correct: new Audio('/sounds/Correct.mp3'),
    wrong: new Audio('/sounds/Wrong.mp3'),
    success: new Audio('/sounds/Success.mp3')
  };
  
  sounds[type].play().catch(e => console.log("Le son n'a pas pu être joué:", e));
};