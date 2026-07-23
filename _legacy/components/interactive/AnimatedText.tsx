import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  highlightWords?: string[];
}

export default function AnimatedText({ text, className = "", highlightWords = [] }: AnimatedTextProps) {
  const words = text.split(' ');
  
  return (
    <div className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const isHighlighted = highlightWords.some(hw => 
          word.toLowerCase().includes(hw.toLowerCase())
        );
        
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`mr-2 ${isHighlighted ? 'text-eg-green font-bold' : ''}`}
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
} 