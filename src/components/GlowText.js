import React, { useState } from 'react';

const GlowText = ({ text }) => {
  const defaultStyle = {
    fontSize: '36px', // Adjust font size as needed
    color: '#fff', // Text color
    transition: 'text-shadow 0.3s ease', // Smooth transition for the glow effect
  };

  const [isTouched, setIsTouched] = useState(false);

  const glowTextStyle = {
    ...defaultStyle,
    textShadow: isTouched ? '0 0 10px #00c6ff, 0 0 20px #00c6ff, 0 0 30px #00c6ff' : '0 0 10px transparent', // Apply glow effect when touched
  };

  const handleTouchStart = () => {
    setIsTouched(true);
    setTimeout(() => setIsTouched(false), 1000); // Reset the touch state after 1 second
  };

  return (
    <div style={{ display: 'inline-block' }}>
      <span
        style={glowTextStyle}
        onMouseEnter={() => setIsTouched(true)} // Provide fallback for hover effect on desktop
        onMouseLeave={() => setIsTouched(false)} // Provide fallback for hover effect on desktop
        onTouchStart={handleTouchStart} // Handle touch for mobile devices
      >
        {text}
      </span>
    </div>
  );
};

export default GlowText;
