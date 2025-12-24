import React, { ReactNode } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'fadeInScale';
  delay?: number;
  className?: string;
}

/**
 * AnimatedSection - Wrapper component for scroll-triggered animations
 */
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  className = '',
}) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.05,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true,
  });

  const animationClass = isVisible ? `animate-${animation}` : 'animation-hidden';
  
  // Generate delay class name (delay-100, delay-200, etc.)
  let delayClass = '';
  if (delay > 0) {
    // Round to nearest 100ms increment to match CSS classes (100, 200, 300, etc.)
    const delayMs = Math.max(100, Math.min(1000, Math.round(delay / 100) * 100));
    delayClass = `delay-${delayMs}`;
  }

  return (
    <div
      ref={ref}
      className={`${animationClass} ${delayClass} ${className}`.trim()}
      style={{
        opacity: isVisible ? undefined : 0,
      }}
    >
      {children}
    </div>
  );
};

