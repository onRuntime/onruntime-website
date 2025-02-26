"use client";

import { Button } from "@/components/ui/button";
import Routes from "@/constants/routes";
import Services from "@/constants/services";
import Projects from "@/constants/projects";
import { OnRuntimeWordMark } from "@/logos/components";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import Navigation from "./navigation";
import { ChevronDown, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
// Remove the useResizeObserver import since we're implementing our own

// Define types for navigation items
interface SubNavItem {
  title: string;
  path: string;
}

interface DropdownItem {
  title: string;
  path: string;
  items?: SubNavItem[];
}

interface NavItem {
  title: string;
  path: string;
  dropdown?: DropdownItem[];
}

// Navigation structure
const navItems: NavItem[] = [
  {
    title: "Nos services",
    path: Routes.services,
    dropdown: Services.map((service) => ({
      title: service.name,
      path: Routes.service[service.id].root,
      items: service.subServices.map((subService) => ({
        title: subService.name,
        path: subService.route,
      })),
    })),
  },
  {
    title: "Nos projets",
    path: Routes.unknown,
    dropdown: Projects.slice(0, 5).map((project) => ({
      title: project.name,
      path: Routes.project(project.id),
    })),
  },
  {
    title: "L'association",
    path: Routes.npo,
  },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  // Create a ref that's definitely not null to satisfy TypeScript
  // Create ref for the navbar
  const navRef = useRef<HTMLDivElement>(null);

  // Create a state to track the width manually since useResizeObserver has type issues with React 19
  const [navWidth, setNavWidth] = useState<number | undefined>(undefined);

  // Set up our own resize observer
  useEffect(() => {
    if (!navRef.current) return;

    // Create ResizeObserver instance
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width } = entry.contentRect;
        setNavWidth(width);
      }
    });

    // Start observing
    resizeObserver.observe(navRef.current);

    // Clean up
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Close the mobile menu when screen size changes to desktop
  useEffect(() => {
    if (navWidth && navWidth >= 768 && mobileMenuOpen) {
      setMobileMenuOpen(false);
      setExpandedSection(null);
    }
  }, [navWidth, mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setExpandedSection(null);
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setExpandedSection(null);
  };

  return (
    <nav
      className="px-4 md:px-0 z-50 fixed w-full max-w-5xl left-1/2 -translate-x-1/2 mt-4"
      ref={navRef}
    >
      <div
        className={
          "flex flex-col bg-background/50 rounded-lg shadow-xs backdrop-blur-2xl transition-all duration-300"
        }
      >
        {/* Main navigation bar */}
        <div className="flex justify-between items-center p-2.5">
          <Link href={Routes.landing.visitor} onClick={closeMenu}>
            <OnRuntimeWordMark className="h-6" height={24} />
          </Link>

          <Navigation />

          <div className="flex gap-2">
            <Link href={Routes.contact}>
              <Button className="hidden md:inline-flex" variant="outline">
                Nous contacter
              </Button>
            </Link>

            <Button
              onClick={toggleMobileMenu}
              className="inline-flex md:hidden"
              variant="outline"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile navigation menu */}
        {mobileMenuOpen && (
          <div className="px-3 flex flex-col space-y-4 md:hidden max-h-[calc(100vh-100px)] overflow-y-auto pb-4">
            {navItems.map((item) => (
              <div key={item.title} className="border-t border-border pt-3">
                {item.dropdown ? (
                  <div className="space-y-3">
                    <button
                      onClick={() => toggleSection(item.title)}
                      className="flex w-full justify-between items-center text-base font-medium"
                      aria-expanded={expandedSection === item.title}
                    >
                      {item.title}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          expandedSection === item.title ? "rotate-180" : ""
                        )}
                      />
                    </button>

                    {expandedSection === item.title && (
                      <div className="pl-4 space-y-4 pt-2 overflow-y-auto">
                        {item.dropdown.map((dropdown) => (
                          <div key={dropdown.title} className="space-y-2 pb-3">
                            <Link
                              href={dropdown.path}
                              className="block text-sm font-medium"
                              onClick={closeMenu}
                            >
                              {dropdown.title}
                            </Link>

                            {dropdown.items && (
                              <div className="pl-3 space-y-2">
                                {dropdown.items.map((subItem) => (
                                  <Link
                                    key={subItem.title}
                                    href={subItem.path}
                                    className="block text-xs text-muted-foreground hover:text-foreground"
                                    onClick={closeMenu}
                                  >
                                    {subItem.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className="block text-base font-medium"
                    onClick={closeMenu}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}

            <Link
              href={Routes.contact}
              className="block pt-4 pb-2"
              onClick={closeMenu}
            >
              <Button className="w-full">Nous contacter</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
