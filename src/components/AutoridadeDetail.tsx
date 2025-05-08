import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AutoridadePost } from '../services/wordpress';

interface AutoridadeDetailProps {
  post: AutoridadePost;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const AutoridadeDetail: React.FC<AutoridadeDetailProps> = ({ post }) => {
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
  
  return (
    <motion.article 
      className="max-w-4xl mx-auto p-4"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.header 
        className="mb-8"
        variants={fadeInUp}
      >
        <motion.h1 
          className="text-3xl md:text-4xl font-bold mb-4"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div 
          className="text-gray-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {new Date(post.date).toLocaleDateString('pt-BR')}
        </motion.div>
      </motion.header>

      {featuredImage?.source_url && (
        <motion.div 
          className="relative h-[400px] w-full mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            src={featuredImage.source_url}
            alt={featuredImage.alt_text || post.title.rendered}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </motion.div>
      )}

      <motion.div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />

      {post.yoast_head_json?.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(post.yoast_head_json.schema)
          }}
        />
      )}
    </motion.article>
  );
};

export default AutoridadeDetail; 