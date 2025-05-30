import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  status?: 'active' | 'planned';
}

export default function FeatureCard({ title, description, icon, status }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card-gradient rounded-xl p-6 relative"
    >
      {status && (
        <span className={`absolute top-4 right-4 text-sm px-3 py-1 rounded-full ${
          status === 'active' 
            ? 'bg-green-100 text-green-800'
            : 'bg-gray-100 text-gray-600'
        }`}>
          {status === 'active' ? 'Ativo' : 'Planejado'}
        </span>
      )}
      
      {icon && (
        <div className="text-green-600 mb-4 text-2xl">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
} 