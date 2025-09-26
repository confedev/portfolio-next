'use client';

import { useState, useEffect } from 'react';
import { LOGO_COLOR_THEMES, ANIMATION_SPEEDS } from '@/config/logo-themes';

interface AnimatedLogoProps {
  className?: string;
  colors?: string[]; // Allow custom color configuration
  animationSpeed?: number; // Animation speed in milliseconds
  theme?: keyof typeof LOGO_COLOR_THEMES; // Predefined theme
}

export function AnimatedLogo({
  className = '',
  colors,
  animationSpeed = ANIMATION_SPEEDS.normal,
  theme = 'default',
}: AnimatedLogoProps) {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  // Use custom colors or predefined theme
  const colorPalette = colors || LOGO_COLOR_THEMES[theme];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex(
        (prevIndex) => (prevIndex + 1) % colorPalette.length,
      );
    }, animationSpeed);

    return () => clearInterval(interval);
  }, [colorPalette.length, animationSpeed]);

  const currentColor = colorPalette[currentColorIndex];

  return (
    <div className={`text-2xl font-bold text-green-400 ${className}`}>
      {'<'}
      <span
        style={{
          color: currentColor,
          transition: 'color 0.6s ease-in-out',
          textShadow: `0 0 10px ${currentColor}40`, // Add subtle glow effect
        }}
      >
        CONFE
      </span>
      <span className="text-green-400">{'DEV/>'}</span>
    </div>
  );
}
