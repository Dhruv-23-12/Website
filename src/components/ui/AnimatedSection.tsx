import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInUp' | 'slideInDown';
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  slideInUp: {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  },
  slideInDown: {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 }
  }
};

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  triggerOnce = true
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: triggerOnce, 
    threshold,
    margin: '-50px 0px -50px 0px'
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animations[animation]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedText: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}> = ({ children, className = '', delay = 0, stagger = 0.1 }) => {
  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * stagger,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true, threshold: 0.1 }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export const AnimatedCounter: React.FC<{
  end: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}> = ({ end, duration = 2, className = '', prefix = '', suffix = '' }) => {
  const [count, setCount] = React.useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.5 });

  React.useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const currentCount = Math.floor(progress * end);
        
        setCount(currentCount);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
};
