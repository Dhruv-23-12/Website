import React, { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInUp' | 'slideInDown';
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasAnimated(true);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, triggerOnce]);

  const getAnimationClass = () => {
    const baseClass = `scroll-animation scroll-animation-${animation}`;
    const delayClass = delay > 0 ? `scroll-animation-delay-${Math.round(delay * 1000)}` : '';
    const visibleClass = isVisible ? 'scroll-animation-visible' : '';
    return `${baseClass} ${delayClass} ${visibleClass} ${className}`.trim();
  };

  return (
    <div ref={elementRef} className={getAnimationClass()}>
      {children}
    </div>
  );
};

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div 
      className="scroll-progress-bar"
      style={{ transform: `scaleX(${scrollProgress / 100})` }}
    />
  );
};

export const AnimatedText: React.FC<{
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
}> = ({ children, className = '', delay = 0, stagger = 0.1 }) => {
  const words = children.split(' ');
  const [visibleWords, setVisibleWords] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate words one by one
          words.forEach((_, index) => {
            setTimeout(() => {
              setVisibleWords(prev => [...prev, index]);
            }, (delay + index * stagger) * 1000);
          });
        }
      },
      { threshold: 0.5 }
    );

    const currentElement = containerRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [words, delay, stagger]);

  return (
    <div ref={containerRef} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`animated-word ${visibleWords.includes(index) ? 'animated-word-visible' : ''}`}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

// Global styles for scroll animations
export const ScrollAnimationStyles = () => (
  <style>{`
    /* Scroll Progress Bar */
    .scroll-progress-bar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #dc2626, #ef4444);
      z-index: 9999;
      transform-origin: left;
      transition: transform 0.1s ease-out;
    }

    /* Base Scroll Animation */
    .scroll-animation {
      opacity: 0;
      transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .scroll-animation-visible {
      opacity: 1;
    }

    /* Animation Variants */
    .scroll-animation-fadeIn {
      opacity: 0;
    }

    .scroll-animation-fadeIn.scroll-animation-visible {
      opacity: 1;
    }

    .scroll-animation-fadeInUp {
      opacity: 0;
      transform: translateY(50px);
    }

    .scroll-animation-fadeInUp.scroll-animation-visible {
      opacity: 1;
      transform: translateY(0);
    }

    .scroll-animation-fadeInDown {
      opacity: 0;
      transform: translateY(-50px);
    }

    .scroll-animation-fadeInDown.scroll-animation-visible {
      opacity: 1;
      transform: translateY(0);
    }

    .scroll-animation-fadeInLeft {
      opacity: 0;
      transform: translateX(-50px);
    }

    .scroll-animation-fadeInLeft.scroll-animation-visible {
      opacity: 1;
      transform: translateX(0);
    }

    .scroll-animation-fadeInRight {
      opacity: 0;
      transform: translateX(50px);
    }

    .scroll-animation-fadeInRight.scroll-animation-visible {
      opacity: 1;
      transform: translateX(0);
    }

    .scroll-animation-scaleIn {
      opacity: 0;
      transform: scale(0.8);
    }

    .scroll-animation-scaleIn.scroll-animation-visible {
      opacity: 1;
      transform: scale(1);
    }

    .scroll-animation-slideInUp {
      opacity: 0;
      transform: translateY(100px);
    }

    .scroll-animation-slideInUp.scroll-animation-visible {
      opacity: 1;
      transform: translateY(0);
    }

    .scroll-animation-slideInDown {
      opacity: 0;
      transform: translateY(-100px);
    }

    .scroll-animation-slideInDown.scroll-animation-visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* Delay Classes */
    .scroll-animation-delay-100 { transition-delay: 0.1s; }
    .scroll-animation-delay-200 { transition-delay: 0.2s; }
    .scroll-animation-delay-300 { transition-delay: 0.3s; }
    .scroll-animation-delay-400 { transition-delay: 0.4s; }
    .scroll-animation-delay-500 { transition-delay: 0.5s; }
    .scroll-animation-delay-600 { transition-delay: 0.6s; }
    .scroll-animation-delay-700 { transition-delay: 0.7s; }
    .scroll-animation-delay-800 { transition-delay: 0.8s; }
    .scroll-animation-delay-900 { transition-delay: 0.9s; }
    .scroll-animation-delay-1000 { transition-delay: 1s; }

    /* Animated Text */
    .animated-word {
      display: inline-block;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      margin-right: 0.25rem;
    }

    .animated-word-visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .scroll-animation {
        transition-duration: 0.6s;
      }
      
      .scroll-animation-fadeInUp,
      .scroll-animation-fadeInDown {
        transform: translateY(30px);
      }
      
      .scroll-animation-fadeInLeft,
      .scroll-animation-fadeInRight {
        transform: translateX(30px);
      }
    }

    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
      .scroll-animation,
      .animated-word {
        transition: none;
      }
      
      .scroll-animation {
        opacity: 1;
        transform: none;
      }
      
      .animated-word {
        opacity: 1;
        transform: none;
      }
    }
  `}</style>
);
