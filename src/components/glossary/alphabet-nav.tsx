"use client"

import React from 'react';
import { cn } from '@/lib/utils';

interface GlossaryAlphabetNavProps {
  availableLetters: string[];
}

export function GlossaryAlphabetNav({ availableLetters }: GlossaryAlphabetNavProps) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(letter);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 120, // Adjust for header height
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky top-24 z-30 bg-background/80 backdrop-blur-sm py-3 border-y">
      <div className="flex justify-center flex-wrap gap-1 md:gap-2">
        {alphabet.map(letter => {
          const isAvailable = availableLetters.includes(letter);
          
          return (
            <button
              key={letter}
              onClick={() => isAvailable && scrollToLetter(letter)}
              className={cn(
                "w-8 h-8 flex items-center justify-center rounded-md text-sm uppercase transition-colors",
                isAvailable 
                  ? "hover:bg-primary hover:text-primary-foreground cursor-pointer" 
                  : "text-muted-foreground cursor-not-allowed opacity-50"
              )}
              disabled={!isAvailable}
            >
              {letter}
            </button>
          );
        })}
      </div>
    </div>
  );
}