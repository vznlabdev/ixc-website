'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  'Send the invoice — we\'ll handle the rest.',
  'Pay contractors now. Get up to 120 days to settle.',
  'Stress free property management, finally.',
  'Fast cashflow. Zero collection headaches.'
];

const slideImages = [
  '/send-invoice.jpg',
  '/pay-contactors.jpg', 
  '/stress-free.jpg',
  '/fast-cashflow.jpg'
];

const cardRotations = [0, -5, -10]; // degrees for top, next, last

export default function CashflowSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Get the indices for the top 3 cards in the stack
  const getStackIndices = () => [0, 1, 2].map(i => (current + i) % slides.length);

  return (
    <div className="relative w-full max-w-xs mx-auto" style={{ minHeight: 380 }}>
      <div className="relative h-[380px] w-full flex items-center justify-center">
        {getStackIndices().reverse().map((slideIdx, stackIdx) => {
          // stackIdx: 0 = back, 2 = top
          const z = 10 + stackIdx;
          const offset = (2 - stackIdx) * 12; // px offset for stacking
          const stackColors = ['#2a6df4', '#3384fe', '#5aa7ff'];
          const color = stackColors[stackIdx];
          const rotation = cardRotations[stackIdx] || 0;
          return (
            <div
              key={slideIdx}
              className={`absolute left-0 right-0 mx-auto transition-all duration-1000 ease-out pointer-events-none`}
              style={{
                top: offset,
                zIndex: z,
                background: color,
                borderRadius: '1rem',
                boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)',
                width: '100%',
                minHeight: 340,
                padding: 16,
                transform: `rotateZ(${rotation}deg)`
              }}
            >
              <div className="w-full aspect-[4/3] mb-6">
                <div className="w-full h-full relative aspect-[4/3]">
                  <Image
                    src={slideImages[slideIdx]}
                    alt="Property Management"
                    fill
                    className="rounded-xl object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="flex-1 text-3xl font-semibold text-[#142557] text-left w-full leading-tight" style={{ wordBreak: 'break-word' }}>
                {slides[slideIdx]}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-4 gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`inline-block w-2 h-2 rounded-full ${i === current ? 'bg-[#142557]' : 'bg-white/50'}`}
            onClick={() => setCurrent(i)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  );
} 
