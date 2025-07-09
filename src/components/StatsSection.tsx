import React from "react";
import { Card, CardContent } from '@/components/ui/card';

const metrics = [
  {
    percentage: "Unlimited",
    description: "Work Orders"
  },
  {
    percentage: "Zero",
    description: "Training Required"
  },
  {
    percentage: "3",
    description: "Simple Steps"
  },
  {
    percentage: "100%",
    description: "Free to Start"
  }
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-lg border" style={{ backgroundColor: '#193a8f' }}>
          <CardContent className="p-8">
            <div className="flex flex-wrap gap-8 md:gap-12 justify-center">
              {metrics.map((metric, index) => (
                <div key={index} className="text-left min-w-[140px]">
                  <div className="text-4xl md:text-5xl font-medium mb-2" style={{ color: '#ffffff' }}>
                    {metric.percentage}
                  </div>
                  <p className="text-sm" style={{ color: '#ffffff' }}>
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center" style={{ fontSize: '14px', color: '#ffffff' }}>
              Property managers using IncoXchange see immediate improvements
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
} 