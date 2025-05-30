import { motion } from 'framer-motion';

interface InteractiveButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export default function InteractiveButton({ 
  children, 
  onClick, 
  variant = 'primary',
  className = "" 
}: InteractiveButtonProps) {
  const variants = {
    primary: 'bg-eg-green text-white hover:bg-eg-green/90',
    secondary: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'border-2 border-eg-green text-eg-green hover:bg-eg-green/10',
  };
  
  return (
    <motion.button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-medium transition-colors ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
} 