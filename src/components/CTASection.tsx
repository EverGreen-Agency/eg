'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface CTASectionProps {
  title: string
  description: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function CTASection({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink
}: CTASectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#09231B]/80">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-[#3AC97B] mb-8"
          >
            {title}
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-xl text-[#FFF4C7] mb-12"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <motion.div 
            variants={fadeIn}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link 
              href={primaryButtonLink}
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl text-[#09231B] bg-[#3AC97B] hover:bg-[#3AC97B]/90 transition-colors shadow-lg hover:shadow-xl"
            >
              {primaryButtonText}
                  </Link>
            {secondaryButtonText && secondaryButtonLink && (
              <Link 
                href={secondaryButtonLink}
                className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl text-[#FFF4C7] bg-[#09231B] hover:bg-[#09231B]/80 border border-[#3AC97B]/20 transition-colors shadow-lg hover:shadow-xl"
              >
                {secondaryButtonText}
                  </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 