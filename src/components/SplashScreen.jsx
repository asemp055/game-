// src/components/SplashScreen.jsx
import React, { useEffect } from 'react';
import './SplashScreen.css';
import logo from '../assets/logo.jpg';

function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Appelle la fonction pour passer à l'app principale
    }, 2500); // durée de l'animation (2.5s)

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-container">
      <img src={logo} alt="MemoTrip Logo" className="splash-logo" />
    </div>
  );
}

export default SplashScreen;
