"use client";

import { List } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

import { cn } from "@/lib/utils";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
}

function TocThumb({
  containerRef,
  activeIds,
}: {
  containerRef: React.RefObject<HTMLElement | null>;
  activeIds: string[];
}) {
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !thumbRef.current) return;

    let upper = Number.MAX_VALUE;
    let lower = 0;

    if (activeIds.length > 0) {
      for (const item of activeIds) {
        const element = containerRef.current.querySelector<HTMLElement>(
          `a[href="#${item}"]`,
        );
        if (!element) continue;

        const styles = getComputedStyle(element);
        upper = Math.min(
          upper,
          element.offsetTop + parseFloat(styles.paddingTop || "0"),
        );
        lower = Math.max(
          lower,
          element.offsetTop +
            element.clientHeight -
            parseFloat(styles.paddingBottom || "0"),
        );
      }
    }

    if (upper !== Number.MAX_VALUE) {
      thumbRef.current.style.setProperty("--top", `${upper}px`);
      thumbRef.current.style.setProperty("--height", `${lower - upper}px`);
    } else {
      thumbRef.current.style.setProperty("--top", "0px");
      thumbRef.current.style.setProperty("--height", "0px");
    }
  }, [containerRef, activeIds]);

  return (
    <div
      ref={thumbRef}
      className="mt-(--top) h-(--height) bg-primary transition-all duration-200"
      style={{ "--top": "0px", "--height": "0px" } as React.CSSProperties}
    />
  );
}

function TOCItem({
  item,
  activeIds,
  upper = item.level,
  lower = item.level,
}: {
  item: TOCItem;
  activeIds: string[];
  upper?: number;
  lower?: number;
}) {
  const offset = getLineOffset(item.level);
  const upperOffset = getLineOffset(upper);
  const lowerOffset = getLineOffset(lower);

  return (
    <a
      href={`#${item.id}`}
      className={cn(
        "prose relative py-1.5 text-sm text-muted-foreground hover:text-accent-foreground transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0",
        activeIds.includes(item.id) && "text-primary",
      )}
      style={{
        paddingInlineStart: getItemOffset(item.level),
      }}
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById(item.id);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }}
    >
      {offset !== upperOffset ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          className="absolute -top-1.5 start-0 size-4 rtl:-scale-x-100"
        >
          <line
            x1={upperOffset}
            y1="0"
            x2={offset}
            y2="12"
            className="stroke-foreground/10"
            strokeWidth="1"
          />
        </svg>
      ) : null}
      <div
        className={cn(
          "absolute inset-y-0 w-px bg-foreground/10",
          offset !== upperOffset && "top-1.5",
          offset !== lowerOffset && "bottom-1.5",
        )}
        style={{
          insetInlineStart: offset,
        }}
      />
      {item.title}
    </a>
  );
}

// Helper functions for indentation
function getItemOffset(level: number): number {
  if (level <= 2) return 14;
  if (level === 3) return 26;
  return 36;
}

function getLineOffset(level: number): number {
  return level >= 3 ? 10 : 0;
}

export function TableOfContents({ className }: TableOfContentsProps) {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeIds, setActiveIds] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Small delay to ensure content is rendered
    const timer = setTimeout(() => {
      // Extract headings from the document (skip h1 for TOC)
      const headingElements = document.querySelectorAll("h2, h3, h4, h5, h6");
      const items: TOCItem[] = Array.from(headingElements).map((heading) => ({
        id: heading.id || "",
        title: heading.textContent?.replace(/#/g, "").trim() || "",
        level: parseInt(heading.tagName.charAt(1)),
      }));

      const validHeadings = items.filter((item) => item.id && item.title);
      setHeadings(validHeadings);

      // Set up scroll-based active heading tracking
      function updateActiveHeading() {
        const scrollY = window.scrollY;
        let currentActiveId = "";

        // Find the heading that is currently visible
        for (let i = validHeadings.length - 1; i >= 0; i--) {
          const heading = validHeadings[i];
          const element = document.getElementById(heading.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + scrollY;

            // If this heading is above the current scroll position (with some offset)
            if (elementTop <= scrollY + 100) {
              currentActiveId = heading.id;
              break;
            }
          }
        }

        // If no heading found, use the first one
        if (!currentActiveId && validHeadings.length > 0) {
          currentActiveId = validHeadings[0].id;
        }

        setActiveIds(currentActiveId ? [currentActiveId] : []);
      }

      // Initial update
      updateActiveHeading();

      // Listen to scroll events
      const handleScroll = () => updateActiveHeading();
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  const [svg, setSvg] = useState<{
    path: string;
    width: number;
    height: number;
  }>();

  // Generate SVG path for wavy lines
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    function onResize(): void {
      if (container.clientHeight === 0) return;
      let w = 0,
        h = 0;
      const d: string[] = [];

      for (let i = 0; i < headings.length; i++) {
        const element: HTMLElement | null = container.querySelector(
          `a[href="#${headings[i].id}"]`,
        );
        if (!element) continue;

        const styles = getComputedStyle(element);
        const offset = getLineOffset(headings[i].level) + 1;
        const top = element.offsetTop + (parseFloat(styles.paddingTop) || 0);
        const bottom =
          element.offsetTop +
          element.clientHeight -
          (parseFloat(styles.paddingBottom) || 0);

        w = Math.max(offset, w);
        h = Math.max(h, bottom);

        d.push(`${i === 0 ? "M" : "L"}${offset} ${top}`);
        d.push(`L${offset} ${bottom}`);
      }

      setSvg({
        path: d.join(" "),
        width: w + 1,
        height: h,
      });
    }

    const observer = new ResizeObserver(onResize);
    onResize();
    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className={cn("sticky top-5", className)}>
      <div className="space-y-3">
        <p className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <List size={16} />
          On this page
        </p>

        {/* TOC Container with scroll area and wavy lines */}
        <div className="relative min-h-0 text-sm overflow-auto [scrollbar-width:none] [mask-image:linear-gradient(to_bottom,transparent,white_16px,white_calc(100%-16px),transparent)] py-3">
          {svg ? (
            <div
              className="absolute start-0 top-0 rtl:-scale-x-100"
              style={{
                width: svg.width,
                height: svg.height,
                maskImage: `url("data:image/svg+xml,${encodeURIComponent(
                  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svg.width} ${svg.height}"><path d="${svg.path}" stroke="black" stroke-width="1" fill="none" /></svg>`,
                )}")`,
              }}
            >
              <TocThumb containerRef={containerRef} activeIds={activeIds} />
            </div>
          ) : null}

          {/* TOC Items container */}
          <div ref={containerRef} className="flex flex-col">
            {headings.map((heading, i) => (
              <TOCItem
                key={heading.id}
                item={heading}
                activeIds={activeIds}
                upper={headings[i - 1]?.level}
                lower={headings[i + 1]?.level}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
