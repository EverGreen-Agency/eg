import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface GradientBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientBackground({ children, className = "" }: GradientBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const springConfig = { damping: 25, stiffness: 700 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      setMousePosition({ x: xPct, y: yPct });
    };

    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 });
    };

    const element = containerRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove as EventListener);
      element.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove as EventListener);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    x.set(mousePosition.x);
    y.set(mousePosition.y);
  }, [mousePosition, x, y]);

  return (
    <div ref={containerRef} className={`gradient-container relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-eg-green/20 via-blue-500/20 to-purple-500/20"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
} 