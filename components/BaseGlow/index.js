"use client"
import { useEffect } from 'react';

const BaseGlow = () => {
  const syncPointer = ({ x, y }) => {
    document.documentElement.style.setProperty('--x', x.toFixed(2));
    document.documentElement.style.setProperty(
      '--xp',
      (x / window.innerWidth).toFixed(2)
    );
    document.documentElement.style.setProperty('--y', y.toFixed(2));
    document.documentElement.style.setProperty(
      '--yp',
      (y / window.innerHeight).toFixed(2)
    );
  };

  useEffect(() => {
    const handlePointerMove = (event) => {
      syncPointer({ x: event.clientX, y: event.clientY });
    };

    document.body.addEventListener('pointermove', handlePointerMove);

    return () => {
      // Clean up by removing the event listener when the component unmounts
      document.body.removeEventListener('pointermove', handlePointerMove);
    };
  }, []); // Empty dependency array ensures this effect runs only once (on mount)

  // ... rest of your component code


};

export default BaseGlow;
