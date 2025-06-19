import React from 'react';

const ThemeSelector = ({ currentTheme, setCurrentTheme }) => {
  const themes = [
    { id: 'travel', emoji: '✈️', label: 'Voyages' },
    { id: 'kitchen', emoji: '🍳', label: 'Cuisine' },
    { id: 'colors', emoji: '🎨', label: 'Couleurs' }
  ];

  return (
    <div className="theme-selector">
      <div className="theme-label">Choisissez un thème :</div>
      <div className="theme-options">
        {themes.map(theme => (
          <div 
            key={theme.id}
            className={`theme-option ${currentTheme === theme.id ? 'selected' : ''}`}
            onClick={() => setCurrentTheme(theme.id)}
          >
            <div className="theme-emoji">{theme.emoji}</div>
            <div className="theme-name">{theme.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;