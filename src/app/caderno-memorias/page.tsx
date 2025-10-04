'use client';

import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import './globals.css';

// Componentes da landing page
import HeroSection from '@/components/caderno/HeroSection';
import BenefitsSection from '@/components/caderno/BenefitsSection';
import ProductDemo from '@/components/caderno/ProductDemo';
// PagesMontage removido - redundante com ProductDemo
import StorySection from '@/components/caderno/StorySection';
import TestimonialsSection from '@/components/caderno/TestimonialsSection';
import OfferSection from '@/components/caderno/OfferSection';
import UrgencySection from '@/components/caderno/UrgencySection';
import FAQSection from '@/components/caderno/FAQSection';
import FinalCTA from '@/components/caderno/FinalCTA';
// Footer removido para landing page limpa

export default function CadernoMemoriasPage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f7f1] via-[#FFF0B5] to-[#A5D8F3]">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* Product Demo */}
      <ProductDemo />
      
      {/* Story Section */}
      <StorySection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Offer Section */}
      <OfferSection />
      
      {/* Urgency Section */}
      <UrgencySection timeLeft={timeLeft} />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
