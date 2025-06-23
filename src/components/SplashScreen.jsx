// src/components/SplashScreen.jsx
import React, { useEffect } from 'react';
import './SplashScreen.css';
import logo from '../../public/logo192.png'; // adapte le chemin selon ton projet

function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500); // 2.5 secondes

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-container">
      <img src={logo} alt="MemoTrip logo" className="splash-logo" />
    </div>
  );
}

export default SplashScreen;
