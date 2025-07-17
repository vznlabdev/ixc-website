'use client'

import Image from 'next/image'
import { LinkButton } from '@/components/ui/link-button'
import { ROUTES } from '@/lib/routes'
import InfiniteSlider from '@/components/InfiniteSlider'
import { useRef, useState, useEffect } from 'react'

interface HeroProps {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaUrl?: string
  secondaryCtaText?: string
  secondaryCtaUrl?: string
}

const headlineWords = ['fastest', 'easiest', 'simplest'];

const featureCards = [
  {
    emoji: '💳',
    title: 'Instant Payments.',
    description: 'Send contractor payouts the same day without delays or payment confusion.'
  },
  {
    emoji: '📦',
    title: 'All inclusive.',
    description: 'Create work orders, assign contractors, track progress, and approve completions in one place.'
  },
  {
    emoji: '🧠',
    title: 'Zero learning curve.',
    description: 'Your contractors already know how to use it. It works like texting.'
  },
  {
    emoji: '💬',
    title: 'SMS powered.',
    description: 'Instant contractor notifications and updates without app downloads or complex logins.'
  }
]

export default function Hero({ 
  title, 
  subtitle,
  ctaText = "Start Free",
  ctaUrl = ROUTES.CONTACT,
  secondaryCtaText = "Watch Demo",
  secondaryCtaUrl = "#demo"
}: HeroProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isWordVisible, setIsWordVisible] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);

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

  // Infinite card rotation animation and word animation
  useEffect(() => {
    let currentCardIndex = 0;
    let currentHeadlineIndex = 0;
    
    // Show first card after initial delay
    const initialTimer = setTimeout(() => {
      setVisibleCards([true, false, false, false]);
      setIsWordVisible(true);
    }, 500);

    // Cycle through cards infinitely
    const interval = setInterval(() => {
      // Fade out current word
      setIsWordVisible(false);
      
      // After fade out, change the word and fade in
      setTimeout(() => {
        // Animate headline (3 words)
        currentHeadlineIndex = (currentHeadlineIndex + 1) % headlineWords.length;
        setCurrentWordIndex(currentHeadlineIndex);
        setIsWordVisible(true);
        // Animate cards (4 cards)
        currentCardIndex = (currentCardIndex + 1) % featureCards.length;
        const newVisible = [false, false, false, false];
        newVisible[currentCardIndex] = true;
        setVisibleCards(newVisible);
      }, 350); // Half of the transition duration
    }, 5000); // Change card every 5 seconds

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <section
        className="bg-background dark:bg-background pt-24 lg:pt-32 pb-24"
        ref={heroRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-6">
            {/* Left: Headline, subheadline, CTAs */}
            <div className="flex-1 w-full text-left max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight text-foreground">
                {title || (
                  <>The <span
                    className={`italic inline-block transition-all duration-700 ease-out ${
                      isWordVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{
                      minWidth: '120px',
                      color: 'var(--animated-word-color, #1e40af)',
                    }}
                  >
                    {headlineWords[currentWordIndex]}
                  </span><br />way to manage contractor work orders.<span role="img" aria-label="smiling face with heart">🥰</span></>
                )}
              </h1>
              <p className="mb-10 max-w-4xl text-muted-foreground leading-relaxed text-base">
                {subtitle || (
                  <>
                    Transform chaotic work orders into organized, professional workflows.<br className="hidden md:block" /> Get complete visibility of every repair, every time.
                  </>
                )}
              </p>
              <div className="flex flex-row gap-3 md:gap-4 items-start pb-8">
                <div className="flex flex-col items-center">
                  <LinkButton 
                    href={ctaUrl} 
                    size="lg" 
                    className="font-semibold px-6 py-5 md:px-10 text-xs"
                  >
                    {ctaText}
                  </LinkButton>
                  <p className="text-xs text-muted-foreground mt-2">No credit card</p>
                </div>
                <div className="flex flex-col items-center">
                  <LinkButton 
                    href={secondaryCtaUrl} 
                    size="lg" 
                    variant="outline" 
                    className="font-semibold px-6 py-5 md:px-10 text-xs"
                  >
                    {secondaryCtaText}
                  </LinkButton>
                  <p className="text-xs text-muted-foreground mt-2">See 2-Min Demo</p>
                </div>
              </div>
            </div>
            {/* Center: App/phone image with overlapping feature cards - Medium screens and up */}
            <div className="flex flex-1 justify-center items-center min-w-[220px] relative">
              {/* Radial background with parallax effect */}
              <div
                className="absolute inset-0 flex justify-center items-center z-0"
                style={{
                  transform: `perspective(1000px) rotateX(${rotation.x * -1.2}deg) rotateY(${rotation.y * -1.2}deg) translateZ(-50px)`,
                  transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Image 
                  src="/hero-radial-bg.svg" 
                  alt="Radial Background" 
                  width={900} 
                  height={900} 
                  className="opacity-60"
                  style={{
                    width: 900,
                    height: 900,
                  }}
                />
              </div>
              <Image 
                src="/incoxchange-screen.svg" 
                alt="incoXchange App Screenshot" 
                width={260} 
                height={500} 
                className="drop-shadow-2xl rounded-xl relative z-10"
                style={{
                  width: 260,
                  height: 500,
                  transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1)',
                  transformStyle: 'preserve-3d'
                }}
                priority
              />
              {/* Overlapping feature cards - left of image */}
              <div
                className="absolute w-[200px] h-[72px] z-20"
                style={{ 
                  pointerEvents: 'none',
                  top: '72%',
                  left: '-8%',
                  transform: `perspective(1000px) rotateX(${rotation.x * 0.6}deg) rotateY(${rotation.y * 0.6}deg)`,
                  transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {featureCards.map((card, idx) => (
                  <div
                    key={idx}
                    className={`absolute top-0 left-0 w-full flex flex-col justify-center rounded-2xl backdrop-blur-md px-6 py-4 transform transition-all duration-700 ease-out ${
                      visibleCards[idx] 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-20'
                    }`}
                    style={{ 
                      minHeight: '72px', 
                      pointerEvents: 'auto',
                      backgroundColor: idx === 0 ? '#6b51ff' : idx === 1 ? '#582dfa' : idx === 2 ? '#491ae6' : '#3e16c1',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    <div>
                      <div className="font-semibold text-white text-base mb-1">{card.title}</div>
                      <div className="text-white text-sm leading-snug">{card.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <InfiniteSlider />
    </>
  )
} 