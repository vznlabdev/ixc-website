'use client'

import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from '@/components/ui/card';

const metrics = [
  {
    percentage: "8.4/10",
    description: "Tenant Satisfaction Score",
    isNumber: true,
    value: 8.4,
    prefix: "",
    suffix: "/10"
  },
  {
    percentage: "35%",
    description: "Reduction in Admin Costs",
    isNumber: true,
    value: 35,
    prefix: "",
    suffix: "%"
  },
  {
    percentage: "$184",
    description: "Avg Work Order Cost Savings",
    isNumber: true,
    value: 184,
    prefix: "$",
    suffix: ""
  },
  {
    percentage: "100%",
    description: "Free to Start (No Credit Card)",
    isNumber: true,
    value: 100,
    prefix: "",
    suffix: "%"
  }
];

export default function StatsSection() {
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateNumbers();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateNumbers = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedValues([
        Math.round((8.4 * progress) * 10) / 10, // Round to 1 decimal place
        Math.floor(35 * progress),
        Math.floor(184 * progress),
        Math.floor(100 * progress)
      ]);

      if (currentStep >= steps) {
        clearInterval(interval);
        setAnimatedValues([8.4, 35, 184, 100]);
      }
    }, stepDuration);
  };

  const formatDisplayValue = (metric: typeof metrics[0], animatedValue: number) => {
    if (!metric.isNumber) {
      return metric.percentage; // Return original text for non-numeric values
    }
    
    return `${metric.prefix}${animatedValue}${metric.suffix}`;
  };

  return (
    <section ref={sectionRef} className="py-16 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-lg border-2 border-blue-600 bg-background">
          <CardContent className="px-12 pt-6 pb-8">
            <h3 className="text-xl font-medium text-blue-800 dark:text-blue-400 mb-8 text-left">
              Property managers using IncoXchange see immediate improvements
            </h3>
            <div className="flex justify-between items-start">
              {metrics.map((metric, index) => (
                <div key={index} className="text-left flex-1">
                  <div className="text-3xl md:text-4xl font-medium mb-2 text-primary">
                    {formatDisplayValue(metric, animatedValues[index])}
                  </div>
                  <p className="text-sm text-blue-800 dark:text-blue-400">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
} 