'use client';

import React from 'react';
import Image from 'next/image';

interface ProductMockupProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  showFloatingElements?: boolean;
  floatingElements?: string[];
}

export default function ProductMockup({
  src,
  alt,
  width = 400,
  height = 500,
  className = "drop-shadow-2xl",
  showFloatingElements = true,
  floatingElements = ["💖", "⭐", "🎨", "🌟"]
}: ProductMockupProps) {
  return (
    <div className="relative mx-auto max-w-md">
      {/* Main product image */}
      <div className="relative z-10">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      </div>
      
      {/* Floating elements */}
      {showFloatingElements && (
        <>
          <div className="absolute -top-4 -left-4 text-3xl opacity-60 animate-bounce">
            {floatingElements[0]}
          </div>
          <div className="absolute -top-2 -right-6 text-2xl opacity-60 animate-pulse">
            {floatingElements[1]}
          </div>
          <div className="absolute -bottom-4 -left-6 text-2xl opacity-60 animate-bounce delay-300">
            {floatingElements[2]}
          </div>
          <div className="absolute -bottom-2 -right-4 text-3xl opacity-60 animate-pulse delay-500">
            {floatingElements[3]}
          </div>
        </>
      )}
    </div>
  );
}
