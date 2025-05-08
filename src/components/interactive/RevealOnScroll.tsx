import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface RevealOnScrollProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export default function RevealOnScroll({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = "" 
}: RevealOnScrollProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const directionMap = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  };
  
  const initial = directionMap[direction];
  
  return (
    <motion.div
      ref={ref}
      initial={{ ...initial, opacity: 0 }}
      animate={inView ? { x: 0, y: 0, opacity: 1 } : { ...initial, opacity: 0 }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 