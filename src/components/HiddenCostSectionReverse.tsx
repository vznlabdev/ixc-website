'use client'

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import WaitlistModal from '@/components/WaitlistModal';

export default function HiddenCostSectionReverse() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Global mouse move handler for 3D effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const percentX = x / window.innerWidth;
      const percentY = y / window.innerHeight;
      // 3D rotation range: -15deg to 15deg
      const rotateY = (percentX - 0.5) * 30; // -15deg to 15deg
      const rotateX = (percentY - 0.5) * -30; // -15deg to 15deg (inverted for natural feel)
      setRotation({ x: rotateX, y: rotateY });
    };

    // Add global event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-left lg:order-2">
            <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-6 leading-tight">
              The Hidden Cost<br className="hidden lg:inline" />
              <span className="lg:hidden"> </span>of Slow Payments
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Your best contractors are leaving for competitors who pay faster.
            </p>

            <div className="mb-8">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                What you&apos;re losing:
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                <li className="flex items-start">
                  <ArrowRight className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>Reliable contractors choosing other property managers</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>Higher bids to cover financing costs (18-24% gets built into quotes)</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>Project delays when contractors prioritize faster-paying clients</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>Time spent managing payment complaints and disputes</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-start lg:order-1">
            <div className="relative md:right-[12%] lg:right-0">
              <Image
                src="/constructuction-worker-happy.jpg"
                alt="Happy construction worker"
                width={288}
                height={360}
                className="rounded-2xl shadow-2xl object-cover"
                style={{ 
                  width: '288px', 
                  height: '360px',
                  transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1)',
                  transformStyle: 'preserve-3d'
                }}
              />
              
              {/* Main overlay card */}
              <div 
                className="w-[235px] z-20 mt-4 mx-auto sm:absolute sm:mt-0 sm:mx-0 sm:top-[30%] sm:right-[-65%]"
                style={{ 
                  transform: `perspective(1000px) rotateX(${rotation.x * 0.4}deg) rotateY(${rotation.y * 0.4}deg)`,
                  transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div
                  className="w-full rounded-2xl backdrop-blur-md p-4"
                  style={{ 
                    backgroundColor: '#6b51ff',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className="text-white text-lg leading-relaxed mb-4">
                    What if your contractors never had to worry about cash flow again?
                  </div>
                  <WaitlistModal 
                    trigger={
                      <Button size="sm" className="font-semibold w-full bg-white dark:bg-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800" style={{ color: '#6b51ff' }}>
                        Get Started Free
                      </Button>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 