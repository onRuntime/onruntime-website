"use client"

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface GlossaryAlphabetNavProps {
  availableLetters: string[];
}

export function GlossaryAlphabetNav({ availableLetters }: GlossaryAlphabetNavProps) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const [activeLetterIdx, setActiveLetterIdx] = useState<number | null>(null);
  
  // Track current section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Adjust based on your header height
      
      // Find the current active letter section
      let currentSection: string | null = null;
      
      for (const letter of availableLetters) {
        const element = document.getElementById(letter);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            currentSection = letter;
            break;
          }
        }
      }
      
      if (currentSection) {
        setActiveLetterIdx(alphabet.indexOf(currentSection));
      } else {
        setActiveLetterIdx(null);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [alphabet, availableLetters]);
  
  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(letter);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - 120, // Adjust for header height
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky top-24 z-30">
      <div className="max-w-5xl mx-auto px-4 md:px-0">
        <div className="rounded-lg shadow-xs bg-background/50 backdrop-blur-2xl p-2.5 border">
          <div className="flex flex-wrap justify-center gap-1 md:gap-0.5">
            {alphabet.map((letter, index) => {
              const isAvailable = availableLetters.includes(letter);
              const isActive = activeLetterIdx === index;
              
              return (
                <button
                  key={letter}
                  onClick={() => isAvailable && scrollToLetter(letter)}
                  className={cn(
                    "w-8 h-8 flex items-center justify-center text-sm uppercase transition-all duration-200",
                    isAvailable 
                      ? "hover:bg-accent hover:text-accent-foreground cursor-pointer font-medium" 
                      : "text-muted-foreground/40 cursor-not-allowed",
                    isActive ? "bg-onruntime-blue/10 text-onruntime-blue rounded-md font-semibold" : "rounded-md"
                  )}
                  disabled={!isAvailable}
                  aria-current={isActive ? 'true' : 'false'}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}