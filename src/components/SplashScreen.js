import React, { useEffect } from 'react';
import '../styles/SplashScreen.css';

function SplashScreen({ onAnimationComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationComplete();
    }, 3000); // 3 secondes

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <div className="splash-container">
      <img 
        src={process.env.PUBLIC_URL + '/images/memeotrip.jpg'} 
        alt="MemoTrip Logo"
        className="splash-image"
      />
    </div>
  );
}

export default SplashScreen;