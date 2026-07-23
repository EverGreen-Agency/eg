import { motion } from 'framer-motion';
import Link from 'next/link';

interface InteractiveCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  link: string;
}

export default function InteractiveCard({ title, description, icon, color, link }: InteractiveCardProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ duration: 0.3 }}
      className="glass-card p-8 h-full cursor-pointer"
    >
      <Link href={link}>
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-3xl mb-6`}>
          {icon}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <div className="mt-6 flex items-center text-eg-green font-medium">
          <span>Acessar</span>
          <motion.svg 
            className="w-5 h-5 ml-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </motion.svg>
        </div>
      </Link>
    </motion.div>
  );
} 