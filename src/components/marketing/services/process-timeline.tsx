"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProcessStep {
  title: string;
  description: string;
  services?: string[];
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ steps }) => {
  const [path, setPath] = useState("");
  const timelineRef = useRef<HTMLDivElement>(null);
  const pointRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const calculatePath = () => {
      if (!timelineRef.current) return;

      const validPointRefs = pointRefs.current.filter((ref): ref is HTMLDivElement => ref !== null);
      if (validPointRefs.length === 0) return;

      const points = validPointRefs.map(ref => {
        const rect = ref.getBoundingClientRect();
        const timelineRect = timelineRef.current!.getBoundingClientRect();
        return {
          x: rect.left - timelineRect.left + rect.width / 2,
          y: rect.top - timelineRect.top + rect.height / 2
        };
      });

      let svgPath = `M ${points[0].x} ${points[0].y}`;
      
      for (let i = 0; i < points.length - 1; i++) {
        const current = points[i];
        const next = points[i + 1];
        const midY = (current.y + next.y) / 2;
        
        svgPath += ` C ${current.x} ${midY}, ${next.x} ${midY}, ${next.x} ${next.y}`;
      }

      setPath(svgPath);
    };

    calculatePath();
    window.addEventListener('resize', calculatePath);
    return () => window.removeEventListener('resize', calculatePath);
  }, []);

  return (
    <div className="relative" ref={timelineRef}>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ minHeight: '100%' }}
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--onruntime-blue))" />
            <stop offset="50%" stopColor="hsl(var(--onruntime-magenta))" />
            <stop offset="100%" stopColor="hsl(var(--onruntime-blue))" />
          </linearGradient>
        </defs>
        <path
          d={path}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="8 8"
          className="transition-all duration-300 animate-[dash_30s_linear_infinite]"
        />
      </svg>

      <div className="relative flex flex-col gap-8 md:gap-16 max-w-2xl mx-auto">
        {steps.map((step, i) => (
          <div 
            key={i} 
            className={cn(
              "flex gap-8",
              i % 2 === 0 ? "flex-row" : "flex-row-reverse",
              "group"
            )}
          >
            <div 
              ref={(el) => {
                pointRefs.current[i] = el;
              }}
              className={cn(
                "relative flex-none w-8 h-8 mt-2",
                i % 2 === 0 ? "ml-0" : "-ml-4",
                "md:ml-0"
              )}
            >
              <div className="absolute inset-0 bg-background border-2 border-onruntime-blue rounded-full group-hover:scale-125 transition-transform" />
              <div className="absolute inset-2 bg-onruntime-blue rounded-full animate-pulse" />
            </div>

            <div className={cn(
              "flex-1 p-6 rounded-lg border bg-card hover:border-onruntime-blue transition-colors",
              "group-hover:shadow-lg group-hover:shadow-onruntime-blue/5"
            )}>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="text-lg font-medium text-foreground">
                  {step.title}
                </h3>
                {step.services && (
                  <div className="flex gap-2">
                    {step.services.map((service, j) => (
                      <Badge key={j} variant="secondary">{service}</Badge>
                    ))}
                  </div>
                )}
              </div>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;