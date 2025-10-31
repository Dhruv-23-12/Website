import React, { ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  animation: string;
  delay?: number;
  className?: string;
}

interface AnimatedTextProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ 
  children, 
  animation, 
  delay = 0,
  className = ""
}) => {
  const animationClass = `animate-${animation}`;
  const delayStyle = delay > 0 ? { animationDelay: `${delay}s` } : {};
  
  return (
    <div 
      className={`${animationClass} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  children, 
  className = "",
  delay = 0,
  stagger = 0
}) => {
  const delayStyle = delay > 0 ? { animationDelay: `${delay}s` } : {};
  
  return (
    <div 
      className={`animate-fade-in ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
};