"use client"

import { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@onruntime/translations/react';
import { GlossaryEntry } from '@/types/glossary';
import { Button } from '@/components/ui/button';

interface GlossarySearchProps {
  entries: GlossaryEntry[];
}

export function GlossarySearch({ entries }: GlossarySearchProps) {
  const { t } = useTranslation('components/glossary');
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<GlossaryEntry[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Search logic
  useEffect(() => {
    if (searchTerm.length < 2) {
      setResults([]);
      return;
    }

    const normalizedSearchTerm = searchTerm.toLowerCase();
    const filtered = entries.filter(entry => 
      entry.term.toLowerCase().includes(normalizedSearchTerm) || 
      entry.shortDescription.toLowerCase().includes(normalizedSearchTerm) ||
      (entry.tags && entry.tags.some(tag => tag.toLowerCase().includes(normalizedSearchTerm)))
    );
    
    setResults(filtered.slice(0, 5)); // Limit to 5 results
  }, [searchTerm, entries]);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (entry: GlossaryEntry) => {
    router.push(`/glossary/${entry.letter}/${entry.slug}`);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="relative w-full md:w-96" ref={searchRef}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            if (e.target.value.length > 0) {
              setIsOpen(true);
            }
          }}
          onFocus={() => searchTerm.length > 0 && setIsOpen(true)}
          placeholder={t('search.placeholder')}
          className="w-full rounded-md border border-input pl-10 pr-4 py-2 text-sm focus:outline-hidden focus:ring-2 focus:ring-primary"
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-0"
            onClick={() => {
              setSearchTerm('');
              setIsOpen(false);
            }}
          >
            ×
          </Button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute z-50 w-full mt-1 rounded-md border border-border bg-background shadow-lg">
          <ul className="max-h-80 overflow-auto py-1">
            {results.map((result) => (
              <li key={result.slug}>
                <button
                  className="w-full px-4 py-2 text-left hover:bg-accent transition-colors flex flex-col"
                  onClick={() => handleSelect(result)}
                >
                  <span className="font-medium">{result.term}</span>
                  <span className="text-xs text-muted-foreground line-clamp-1">
                    {result.shortDescription}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {isOpen && searchTerm.length >= 2 && results.length === 0 && (
        <div className="absolute z-50 w-full mt-1 rounded-md border border-border bg-background shadow-lg p-4 text-center text-muted-foreground">
          {t('search.no-results', { term: searchTerm })}
        </div>
      )}
    </div>
  );
}