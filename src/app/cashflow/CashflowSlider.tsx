'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  const [isPaused, setIsPaused] = useState(false);
  const [swipeAnimation, setSwipeAnimation] = useState({ isAnimating: false, direction: 0, distance: 0 });
  const [touchOffset, setTouchOffset] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-rotate every 3 seconds (pause when user interacts)
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
    const currentOffset = touchEndX.current - touchStartX.current;
    // Limit the offset to prevent excessive movement
    const maxOffset = 100;
    setTouchOffset(Math.max(-maxOffset, Math.min(maxOffset, currentOffset)));
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const swipeDistance = touchStartX.current - touchEndX.current;

    // Reset touch offset
    setTouchOffset(0);

    if (Math.abs(swipeDistance) > swipeThreshold) {
      // Start swipe animation
      const direction = swipeDistance > 0 ? 1 : -1; // 1 for left swipe, -1 for right swipe
      const distance = Math.abs(swipeDistance);
      
      setSwipeAnimation({ isAnimating: true, direction, distance });
      
      // After animation completes, change the slide
      setTimeout(() => {
        if (swipeDistance > 0) {
          // Swiped left - next slide
          setCurrent((prev) => (prev + 1) % slides.length);
        } else {
          // Swiped right - previous slide
          setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
        }
        // Reset animation state
        setSwipeAnimation({ isAnimating: false, direction: 0, distance: 0 });
      }, 300); // Animation duration
    }

    // Resume auto-rotation after 3 seconds of inactivity
    setTimeout(() => setIsPaused(false), 3000);
  };

  // Get the indices for the top 3 cards in the stack
  const getStackIndices = () => [0, 1, 2].map(i => (current + i) % slides.length);

  return (
    <div className="relative w-full max-w-xs mx-auto" style={{ minHeight: 380 }}>
      <div 
        className="relative h-[380px] w-full flex items-center justify-center touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {getStackIndices().reverse().map((slideIdx, stackIdx) => {
          // stackIdx: 0 = back, 2 = top
          const z = 10 + stackIdx;
          const offset = (2 - stackIdx) * 12; // px offset for stacking
          const stackColors = ['#2a6df4', '#3384fe', '#5aa7ff'];
          const color = stackColors[stackIdx];
          const rotation = cardRotations[stackIdx] || 0;
          
          // Apply swipe animation to cards
          let transform = `rotateZ(${rotation}deg)`;
          let transition = 'all 1000ms ease-out';
          
          if (swipeAnimation.isAnimating) {
            if (stackIdx === 2) {
              // Top card flies out
              const swipeDistance = Math.min(swipeAnimation.distance * 2, 300); // Max 300px
              const swipeRotation = swipeAnimation.direction * 15; // 15 degree rotation
              transform = `translateX(${swipeAnimation.direction * swipeDistance}px) rotateZ(${rotation + swipeRotation}deg) scale(0.9)`;
              transition = 'all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            } else if (stackIdx === 1) {
              // Middle card moves up to become top card
              const newRotation = cardRotations[2] || 0;
              const newOffset = (2 - 2) * 12; // Top position
              transform = `translateY(${newOffset - offset}px) rotateZ(${newRotation}deg) scale(1.02)`;
              transition = 'all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            } else if (stackIdx === 0) {
              // Back card moves up to middle position
              const newRotation = cardRotations[1] || 0;
              const newOffset = (2 - 1) * 12; // Middle position
              transform = `translateY(${newOffset - offset}px) rotateZ(${newRotation}deg) scale(1.01)`;
              transition = 'all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            }
          } else if (touchOffset !== 0 && stackIdx === 2) {
            // Real-time touch feedback for top card
            const touchRotation = (touchOffset / 100) * 5; // Subtle rotation based on offset
            transform = `translateX(${touchOffset}px) rotateZ(${rotation + touchRotation}deg) scale(${1 - Math.abs(touchOffset) * 0.0005})`;
            transition = 'none'; // No transition for real-time feedback
          }
          
          return (
            <div
              key={slideIdx}
              className={`absolute left-0 right-0 mx-auto pointer-events-none`}
              style={{
                top: offset,
                zIndex: z,
                background: color,
                borderRadius: '1rem',
                boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)',
                width: '100%',
                minHeight: 340,
                padding: 16,
                transform,
                transition
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
            className={`inline-block w-2 h-2 rounded-full ${i === current ? 'bg-[#142557]' : 'bg-white/50'} transition-colors`}
            onClick={() => {
              setCurrent(i);
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 3000);
            }}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  );
} 
