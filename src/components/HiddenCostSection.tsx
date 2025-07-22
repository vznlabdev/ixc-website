'use client'

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import WaitlistModal from '@/components/WaitlistModal';

export default function HiddenCostSection() {
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
          <div className="text-left lg:order-1">
            <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-6 leading-tight">
              Keep Your Best Contractors Happy Without Changing Your Payment Schedule
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              We pay your contractors same day while you maintain your standard 30-60 day payment terms. No impact on your cash flow or operations.
            </p>
          </div>
          
          <div className="relative flex justify-center lg:justify-end lg:order-2">
            <div className="relative md:left-[12%] lg:left-0">
              <Image
                src="/property-manager-contractor-handshake.jpg"
                alt="Property manager with contractor"
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
                className="w-[250px] z-20 mt-4 mx-auto sm:absolute sm:mt-0 sm:mx-0 sm:top-[14%] sm:left-[-75%]"
                style={{ 
                  transform: `perspective(1000px) rotateX(${rotation.x * 0.6}deg) rotateY(${rotation.y * 0.6}deg)`,
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
                  <div className="font-semibold text-white text-base pb-3 border-b border-white/20">
                    Benefits:
                  </div>
                  <ul className="space-y-0 text-white text-sm leading-relaxed mb-4">
                    <li className="border-b border-white/20 py-2">
                      Your contractors get paid immediately
                    </li>
                    <li className="border-b border-white/20 py-2">
                      You pay us on your normal schedule
                    </li>
                    <li className="border-b border-white/20 py-2">
                      Zero disruption to your workflow
                    </li>
                    <li className="border-b border-white/20 py-2">
                      Attract and retain top contractors
                    </li>
                  </ul>
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